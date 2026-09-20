import React, { useState, useEffect } from 'react';
import {
  Calendar as CalendarIcon,
  Clock,
  Send,
  CheckCircle2,
  ExternalLink,
  Download,
  Building,
  User,
  Mail,
  Phone,
  MapPin,
  Users,
  Sparkles,
  ArrowRight,
  RefreshCw,
} from 'lucide-react';
import { BookingFormState } from '../types';
import { MANTIN_BIO } from '../data/mantinData';

interface BookingSystemProps {
  preselectedService?: string;
  preselectedTopic?: string;
}

export const BookingSystem: React.FC<BookingSystemProps> = ({
  preselectedService,
  preselectedTopic,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<
    'keynote' | 'workshop' | 'executive_coaching' | 'family_coaching'
  >('keynote');

  // Dates generator (Next 14 selectable weekdays)
  const [availableDates, setAvailableDates] = useState<{ dateStr: string; display: string; dayName: string }[]>([]);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>('10:00 AM PST');
  const [timezone, setTimezone] = useState<string>('PST (Pacific Time)');

  const timeSlots = [
    '09:00 AM PST',
    '10:30 AM PST',
    '01:00 PM PST',
    '02:30 PM PST',
    '04:00 PM PST',
  ];

  useEffect(() => {
    // Generate dates starting tomorrow
    const dates: { dateStr: string; display: string; dayName: string }[] = [];
    const today = new Date();
    let count = 0;
    let daysAhead = 1;

    while (count < 10) {
      const d = new Date(today);
      d.setDate(today.getDate() + daysAhead);
      const dayOfWeek = d.getDay();
      // Skip Sunday (0) and Saturday (6) for business consultations
      if (dayOfWeek !== 0 && dayOfWeek !== 6) {
        const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const dateStr = d.toISOString().split('T')[0];
        dates.push({
          dateStr,
          display: `${monthNames[d.getMonth()]} ${d.getDate()}`,
          dayName: dayNames[dayOfWeek],
        });
        count++;
      }
      daysAhead++;
    }
    setAvailableDates(dates);
    if (dates.length > 0) {
      setSelectedDate(dates[0].dateStr);
    }
  }, []);

  // Update category when preselected changes
  useEffect(() => {
    if (preselectedService) {
      if (preselectedService.toLowerCase().includes('keynote')) {
        setSelectedCategory('keynote');
      } else if (preselectedService.toLowerCase().includes('workshop')) {
        setSelectedCategory('workshop');
      } else if (preselectedService.toLowerCase().includes('c-suite') || preselectedService.toLowerCase().includes('executive')) {
        setSelectedCategory('executive_coaching');
      } else if (preselectedService.toLowerCase().includes('family') || preselectedService.toLowerCase().includes('neurodiversity')) {
        setSelectedCategory('family_coaching');
      }
    }
  }, [preselectedService]);

  const [formData, setFormData] = useState<BookingFormState>({
    serviceType: 'keynote',
    fullName: '',
    email: '',
    phone: '',
    organization: '',
    eventDate: '',
    timeSlot: '10:00 AM PST',
    eventFormat: 'in-person',
    audienceSize: '100 - 500 attendees',
    location: '',
    estimatedBudget: '$15,000 - $30,000',
    message: preselectedTopic ? `Inquiring specifically about: ${preselectedTopic}` : '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingReference, setBookingReference] = useState('');

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const ref = 'ML-' + Math.random().toString(36).substring(2, 8).toUpperCase();
      setBookingReference(ref);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 900);
  };

  const downloadICS = () => {
    const icsData = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Mantin Lu Keynote & Executive Coaching//EN',
      'CALSCALE:GREGORIAN',
      'METHOD:REQUEST',
      'BEGIN:VEVENT',
      `SUMMARY:Mantin Lu Consultation - ${selectedCategory.toUpperCase().replace('_', ' ')}`,
      `DESCRIPTION:Initial strategic discovery call with Mantin Lu regarding ${formData.organization || 'your event'}. Inquiries: mantin@gmail.com`,
      `STATUS:CONFIRMED`,
      `DTSTART:${selectedDate.replace(/-/g, '')}T170000Z`,
      `DTEND:${selectedDate.replace(/-/g, '')}T174500Z`,
      'LOCATION:Google Meet (Link will be sent to email)',
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');

    const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', `Mantin-Lu-Consultation-${selectedDate}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setFormData({
      serviceType: 'keynote',
      fullName: '',
      email: '',
      phone: '',
      organization: '',
      eventDate: '',
      timeSlot: '10:00 AM PST',
      eventFormat: 'in-person',
      audienceSize: '100 - 500 attendees',
      location: '',
      estimatedBudget: '$15,000 - $30,000',
      message: '',
    });
  };

  return (
    <section id="booking" className="py-20 lg:py-28 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EFE9DF] text-[#8C5E22] text-xs font-bold tracking-widest uppercase mb-3">
            <CalendarIcon className="w-3.5 h-3.5" />
            Client Booking & Availability
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#161B22] tracking-tight leading-tight mb-4">
            Reserve Mantin for Your Stage or Executive Team
          </h2>
          <p className="text-base sm:text-lg text-[#554D41]">
            Select your engagement type, pick a preferred discovery slot, or connect directly through Cal.com for instant scheduling.
          </p>
        </div>

        {/* Direct Cal.com Quick Link Bar */}
        <div className="max-w-4xl mx-auto mb-8 p-4 rounded-xl bg-white border border-[#DDD5C7] shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#FAF4EA] border border-[#E0D3C1] flex items-center justify-center shrink-0">
              <CalendarIcon className="w-5 h-5 text-[#C28E47]" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#161B22]">Prefer Instant Live Calendar Booking?</div>
              <div className="text-xs text-[#7A6F62]">
                Check real-time openings directly on Mantin's verified Cal.com schedule
              </div>
            </div>
          </div>

          <a
            id="calcom-direct-link"
            href={MANTIN_BIO.links.calCom}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#1E232A] hover:bg-[#C28E47] text-white text-xs font-bold transition-all shadow-xs shrink-0"
          >
            <span>Open Cal.com/mantin</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Main Booking Container */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-[#DDD5C7] shadow-xl overflow-hidden">
          
          {/* Engagement Category Switcher */}
          <div className="p-4 sm:p-6 bg-[#F6F2EA] border-b border-[#DDD5C7]">
            <label className="text-xs font-bold uppercase tracking-wider text-[#7A6F62] block mb-3">
              Step 1: Select Service / Engagement Type
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5">
              {[
                { id: 'keynote', label: 'Keynote Talk', subtitle: 'Conferences & Summits' },
                { id: 'workshop', label: 'Team Workshop', subtitle: 'Half/Full-Day Immersion' },
                { id: 'executive_coaching', label: 'C-Suite Advisory', subtitle: '1:1 Executive Mentorship' },
                { id: 'family_coaching', label: 'Family Coaching', subtitle: 'Neurodiversity & SDP' },
              ].map((service) => (
                <button
                  key={service.id}
                  id={`service-select-${service.id}`}
                  type="button"
                  onClick={() => setSelectedCategory(service.id as any)}
                  className={`p-3 rounded-xl text-left transition-all border ${
                    selectedCategory === service.id
                      ? 'bg-[#1E232A] text-white border-[#1E232A] shadow-md ring-2 ring-[#C28E47]'
                      : 'bg-white text-[#22272E] border-[#DDD5C7] hover:border-[#C28E47] hover:bg-[#FAF8F5]'
                  }`}
                >
                  <div className="font-bold text-xs sm:text-sm">{service.label}</div>
                  <div className={`text-[11px] leading-tight mt-0.5 ${
                    selectedCategory === service.id ? 'text-[#C28E47]' : 'text-[#7A6F62]'
                  }`}>
                    {service.subtitle}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Form Body or Success State */}
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="p-6 sm:p-8 lg:p-10 space-y-8">
              
              {/* Step 2: Date & Time Picker */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-[#7A6F62] block mb-3">
                  Step 2: Choose Preferred Discovery Call Slot
                </label>

                {/* Available Date Chips */}
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mb-4">
                  {availableDates.map((item) => (
                    <button
                      key={item.dateStr}
                      type="button"
                      onClick={() => setSelectedDate(item.dateStr)}
                      className={`p-2.5 rounded-lg border text-center transition-all ${
                        selectedDate === item.dateStr
                          ? 'bg-[#1E232A] text-white border-[#1E232A] shadow-xs'
                          : 'bg-[#FAF8F5] text-[#1E232A] border-[#DDD5C7] hover:bg-white hover:border-[#C28E47]'
                      }`}
                    >
                      <div className="text-[10px] uppercase font-semibold text-[#8C5E22]">
                        {item.dayName}
                      </div>
                      <div className="text-sm font-bold mt-0.5">
                        {item.display}
                      </div>
                    </button>
                  ))}
                </div>

                {/* Time Slot & Timezone */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <div className="flex-1 flex flex-wrap gap-2">
                    {timeSlots.map((slot) => (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setSelectedTimeSlot(slot)}
                        className={`px-3 py-2 rounded-md text-xs font-semibold border transition-all ${
                          selectedTimeSlot === slot
                            ? 'bg-[#C28E47] text-white border-[#C28E47] shadow-xs'
                            : 'bg-[#FAF8F5] text-[#554D41] border-[#DDD5C7] hover:border-[#C28E47]'
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>

                  <div className="sm:w-48">
                    <select
                      value={timezone}
                      onChange={(e) => setTimezone(e.target.value)}
                      className="w-full text-xs font-semibold p-2 rounded-md border border-[#DDD5C7] bg-[#FAF8F5] text-[#1E232A]"
                    >
                      <option value="PST (Pacific Time)">PST (Pacific Time)</option>
                      <option value="EST (Eastern Time)">EST (Eastern Time)</option>
                      <option value="CST (Central Time)">CST (Central Time)</option>
                      <option value="GMT / London">GMT / London</option>
                      <option value="SGT / Singapore">SGT / Singapore</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Step 3: Event & Contact Details Form */}
              <div className="pt-6 border-t border-[#EAE4D8]">
                <label className="text-xs font-bold uppercase tracking-wider text-[#7A6F62] block mb-4">
                  Step 3: Contact & Event Specifications
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#1E232A] mb-1.5">
                      Your Full Name *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-[#7A6F62] absolute left-3 top-3" />
                      <input
                        id="booking-input-name"
                        type="text"
                        required
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="e.g. Katherine Shaw"
                        className="w-full pl-9 pr-3 py-2.5 text-sm rounded-lg border border-[#DDD5C7] bg-[#FAF8F5] text-[#161B22] focus:outline-none focus:ring-2 focus:ring-[#C28E47] focus:bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#1E232A] mb-1.5">
                      Business Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-[#7A6F62] absolute left-3 top-3" />
                      <input
                        id="booking-input-email"
                        type="email"
                        required
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="katherine@enterprise.com"
                        className="w-full pl-9 pr-3 py-2.5 text-sm rounded-lg border border-[#DDD5C7] bg-[#FAF8F5] text-[#161B22] focus:outline-none focus:ring-2 focus:ring-[#C28E47] focus:bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#1E232A] mb-1.5">
                      Organization / Company / Event Name *
                    </label>
                    <div className="relative">
                      <Building className="w-4 h-4 text-[#7A6F62] absolute left-3 top-3" />
                      <input
                        id="booking-input-org"
                        type="text"
                        required
                        name="organization"
                        value={formData.organization}
                        onChange={handleInputChange}
                        placeholder="e.g. Acme Health or Global Tech Summit"
                        className="w-full pl-9 pr-3 py-2.5 text-sm rounded-lg border border-[#DDD5C7] bg-[#FAF8F5] text-[#161B22] focus:outline-none focus:ring-2 focus:ring-[#C28E47] focus:bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#1E232A] mb-1.5">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-[#7A6F62] absolute left-3 top-3" />
                      <input
                        id="booking-input-phone"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+1 (555) 000-0000"
                        className="w-full pl-9 pr-3 py-2.5 text-sm rounded-lg border border-[#DDD5C7] bg-[#FAF8F5] text-[#161B22] focus:outline-none focus:ring-2 focus:ring-[#C28E47] focus:bg-white"
                      />
                    </div>
                  </div>

                  {/* Category-Specific Fields */}
                  {selectedCategory === 'keynote' || selectedCategory === 'workshop' ? (
                    <>
                      <div>
                        <label className="block text-xs font-bold text-[#1E232A] mb-1.5">
                          Estimated Audience Size
                        </label>
                        <div className="relative">
                          <Users className="w-4 h-4 text-[#7A6F62] absolute left-3 top-3" />
                          <select
                            name="audienceSize"
                            value={formData.audienceSize}
                            onChange={handleInputChange}
                            className="w-full pl-9 pr-3 py-2.5 text-sm rounded-lg border border-[#DDD5C7] bg-[#FAF8F5] text-[#161B22] focus:outline-none focus:ring-2 focus:ring-[#C28E47] focus:bg-white"
                          >
                            <option value="Under 50 attendees">Under 50 attendees (Executive Session)</option>
                            <option value="50 - 200 attendees">50 - 200 attendees (Leadership Summit)</option>
                            <option value="200 - 1,000 attendees">200 - 1,000 attendees (Conference)</option>
                            <option value="1,000+ attendees">1,000+ attendees (Arena / Global Summit)</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#1E232A] mb-1.5">
                          Event Format & Location
                        </label>
                        <div className="relative">
                          <MapPin className="w-4 h-4 text-[#7A6F62] absolute left-3 top-3" />
                          <input
                            type="text"
                            name="location"
                            value={formData.location}
                            onChange={handleInputChange}
                            placeholder="e.g. In-Person (San Francisco, CA) or Virtual"
                            className="w-full pl-9 pr-3 py-2.5 text-sm rounded-lg border border-[#DDD5C7] bg-[#FAF8F5] text-[#161B22] focus:outline-none focus:ring-2 focus:ring-[#C28E47] focus:bg-white"
                          />
                        </div>
                      </div>
                    </>
                  ) : null}

                </div>

                {/* Message / Objectives */}
                <div className="mt-4">
                  <label className="block text-xs font-bold text-[#1E232A] mb-1.5">
                    What are the key goals, dates, or challenges you’d like Mantin to address?
                  </label>
                  <textarea
                    id="booking-input-message"
                    rows={3}
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Provide any details regarding event dates, audience profile, specific themes, or family coaching questions..."
                    className="w-full p-3 text-sm rounded-lg border border-[#DDD5C7] bg-[#FAF8F5] text-[#161B22] focus:outline-none focus:ring-2 focus:ring-[#C28E47] focus:bg-white"
                  />
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-[#7A6F62]">
                  Mantin's executive team responds within <strong>24 business hours</strong>.
                </div>

                <button
                  id="booking-submit-btn"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-sm font-bold text-white bg-[#1E232A] hover:bg-[#C28E47] rounded-lg transition-all shadow-md hover:shadow-lg disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin text-[#E6C687]" />
                      <span>Securing Slot...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-[#E6C687]" />
                      <span>Confirm Appointment Request</span>
                    </>
                  )}
                </button>
              </div>

            </form>
          ) : (
            /* Confirmation Screen */
            <div id="booking-confirmation-view" className="p-8 sm:p-12 text-center">
              <div className="w-16 h-16 rounded-full bg-[#FAF3E8] border-2 border-[#C28E47] flex items-center justify-center text-[#C28E47] mx-auto mb-5 shadow-sm">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <span className="text-xs font-bold uppercase tracking-widest text-[#8C5E22]">
                Booking Request Received
              </span>
              
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#161B22] mt-1 mb-3">
                Thank You, {formData.fullName || 'Client'}!
              </h3>

              <p className="text-sm text-[#554D41] max-w-lg mx-auto mb-6">
                Your consultation request has been reserved with reference{' '}
                <strong className="text-[#161B22] font-mono bg-[#F2ECE2] px-2 py-0.5 rounded">
                  {bookingReference}
                </strong>
                . A calendar invitation and briefing materials have been routed to{' '}
                <span className="font-semibold text-[#161B22]">{formData.email}</span>.
              </p>

              {/* Summary Receipt Box */}
              <div className="max-w-md mx-auto p-4 rounded-xl bg-[#FAF8F5] border border-[#DDD5C7] text-left text-xs text-[#4A433A] mb-8 space-y-2">
                <div className="flex justify-between py-1 border-b border-[#EAE4D8]">
                  <span className="font-semibold text-[#7A6F62]">Engagement:</span>
                  <span className="font-bold text-[#161B22] capitalize">
                    {selectedCategory.replace('_', ' ')}
                  </span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#EAE4D8]">
                  <span className="font-semibold text-[#7A6F62]">Reserved Date:</span>
                  <span className="font-bold text-[#161B22]">{selectedDate}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#EAE4D8]">
                  <span className="font-semibold text-[#7A6F62]">Time Slot:</span>
                  <span className="font-bold text-[#161B22]">{selectedTimeSlot} ({timezone})</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="font-semibold text-[#7A6F62]">Organization:</span>
                  <span className="font-bold text-[#161B22]">{formData.organization || 'Private Executive'}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  id="booking-download-ics"
                  onClick={downloadICS}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#C28E47] hover:bg-[#A87635] text-white font-bold text-xs transition-colors shadow-xs"
                >
                  <Download className="w-4 h-4" />
                  <span>Download .ICS Calendar File</span>
                </button>

                <button
                  onClick={resetForm}
                  className="w-full sm:w-auto px-5 py-3 rounded-lg bg-[#F2ECE2] hover:bg-[#EAE4D8] text-[#1E232A] font-semibold text-xs transition-colors"
                >
                  Submit Another Inquiry
                </button>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
};
