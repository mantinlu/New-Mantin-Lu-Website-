export interface Keynote {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  description: string;
  outcomes: string[];
  targetAudience: string[];
  duration: string;
  format: string;
  image: string;
  featuredBadge?: string;
  videoPlaceholderText?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  title: string;
  organization: string;
  category: 'corporate' | 'conference' | 'coaching';
  avatar?: string;
  rating: number;
  highlight: string;
}

export interface CoachingProgram {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  target: string;
  deliverables: string[];
  format: string;
  commitment: string;
  badge: string;
  recommendedFor: string;
}

export interface BookInfo {
  title: string;
  subtitle: string;
  author: string;
  badge: string;
  rating: number;
  reviewsCount: number;
  amazonUrl: string;
  coverImage: string;
  photoWithBook: string;
  overview: string;
  frameworkSummary: {
    letter: string;
    word: string;
    explanation: string;
  }[];
  chapters: {
    number: number;
    title: string;
    summary: string;
  }[];
  takeaways: string[];
  sampleExcerpt: {
    title: string;
    content: string[];
  };
}

export interface BookingFormState {
  serviceType: 'keynote' | 'workshop' | 'executive_coaching' | 'family_coaching';
  fullName: string;
  email: string;
  phone: string;
  organization: string;
  eventDate: string;
  timeSlot: string;
  eventFormat: 'in-person' | 'virtual' | 'hybrid';
  audienceSize: string;
  location: string;
  estimatedBudget: string;
  message: string;
}

export interface BookingSlot {
  date: string;
  displayDate: string;
  slots: string[];
}
