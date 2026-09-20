import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CredentialsBar } from './components/CredentialsBar';
import { KeynoteSection } from './components/KeynoteSection';
import { BookSection } from './components/BookSection';
import { CoachingSection } from './components/CoachingSection';
import { AboutSection } from './components/AboutSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { BookingSystem } from './components/BookingSystem';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { SpeakerKitModal } from './components/SpeakerKitModal';
import { StageReelModal } from './components/StageReelModal';

export default function App() {
  const [speakerKitOpen, setSpeakerKitOpen] = useState(false);
  const [stageReelOpen, setStageReelOpen] = useState(false);
  const [selectedVideoTitle, setSelectedVideoTitle] = useState('SLAY to LEAD Keynote Highlight Reel');
  const [preselectedBookingService, setPreselectedBookingService] = useState<string | undefined>(undefined);
  const [preselectedBookingTopic, setPreselectedBookingTopic] = useState<string | undefined>(undefined);

  const handleSelectKeynoteForBooking = (keynoteTitle: string) => {
    setPreselectedBookingService('Keynote Speaking');
    setPreselectedBookingTopic(keynoteTitle);
    const bookingEl = document.getElementById('booking');
    if (bookingEl) {
      bookingEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectCoachingProgram = (programTitle: string) => {
    setPreselectedBookingService(programTitle);
    setPreselectedBookingTopic(programTitle);
    const bookingEl = document.getElementById('booking');
    if (bookingEl) {
      bookingEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenBulkOrder = () => {
    setPreselectedBookingService('Keynote Speaking & Bulk Books');
    setPreselectedBookingTopic('Bulk copies of "Raise Your Dragon Slayer" + Keynote Speaking');
    const bookingEl = document.getElementById('booking');
    if (bookingEl) {
      bookingEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWatchVideo = (videoTitle: string) => {
    setSelectedVideoTitle(videoTitle);
    setStageReelOpen(true);
  };

  const scrollToBooking = () => {
    const bookingEl = document.getElementById('booking');
    if (bookingEl) {
      bookingEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#1E232A]">
      {/* Navigation */}
      <Navbar
        onOpenSpeakerKit={() => setSpeakerKitOpen(true)}
      />

      {/* Main Page Flow */}
      <main className="flex-grow">
        {/* Authority Hero Section */}
        <Hero
          onWatchReel={() => {
            setSelectedVideoTitle('Mantin Lu Keynote Stage Highlights');
            setStageReelOpen(true);
          }}
          onOpenBooking={scrollToBooking}
        />

        {/* Credentials & Metrics Bar */}
        <CredentialsBar />

        {/* Keynote Talks Showcase */}
        <KeynoteSection
          onSelectKeynoteForBooking={handleSelectKeynoteForBooking}
          onOpenSpeakerKit={() => setSpeakerKitOpen(true)}
          onWatchVideo={handleWatchVideo}
        />

        {/* Amazon #1 Bestseller Book Section */}
        <BookSection onOpenBulkOrder={handleOpenBulkOrder} />

        {/* Executive & Family Coaching Offerings */}
        <CoachingSection onSelectCoachingProgram={handleSelectCoachingProgram} />

        {/* Authentic Narrative & Story */}
        <AboutSection />

        {/* Testimonials & Praise */}
        <TestimonialsSection />

        {/* Interactive Client Booking & Scheduler System */}
        <BookingSystem
          preselectedService={preselectedBookingService}
          preselectedTopic={preselectedBookingTopic}
        />

        {/* Frequently Asked Questions */}
        <FaqSection />
      </main>

      {/* Polished Editorial Footer */}
      <Footer onOpenSpeakerKit={() => setSpeakerKitOpen(true)} />

      {/* Speaker One-Sheet & Media Kit Modal */}
      <SpeakerKitModal
        isOpen={speakerKitOpen}
        onClose={() => setSpeakerKitOpen(false)}
      />

      {/* Stage Highlight Reel Modal */}
      <StageReelModal
        isOpen={stageReelOpen}
        onClose={() => setStageReelOpen(false)}
        videoTitle={selectedVideoTitle}
        onBookNow={scrollToBooking}
      />
    </div>
  );
}
