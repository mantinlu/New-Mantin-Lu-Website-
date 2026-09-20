import { Keynote, Testimonial, CoachingProgram, BookInfo } from '../types';

export const MANTIN_BIO = {
  name: 'Mantin Lu',
  headline: '2026 Overall Speaker of the Year • 2x TEDx Speaker • Amazon #1 Bestselling Author',
  subheadline: 'Stop Fixing the Person. Start Changing the Game.',
  shortBio: 'Mantin Lu is an internationally acclaimed keynote speaker, author of the #1 Amazon bestseller "Raise Your Dragon Slayer," and founder of Success Spectrum Strategies. Drawing on 20+ years as a senior executive in the gaming industry and his journey raising an autistic child, Mantin reveals why human motivation fails under fragile willpower—and how game design mechanics unlock elite executive function and collaborative leadership.',
  fullBio: `Mantin Lu has spent over two decades at the highest levels of the global gaming industry, architecting complex interactive systems and understanding the precise psychology of human motivation, engagement, and focus.

When his daughter was diagnosed with autism and severe executive dysfunction, Mantin confronted the heartbreaking limits of traditional discipline and brute-force willpower. Applying the same diagnostic structural mechanics that make games deeply engaging and conquerable, he cracked the code on human friction: you do not fix the player—you redesign the game.

Today, as the 2026 Overall Speaker of the Year and a two-time TEDx speaker, Mantin travels globally to keynotes at enterprise summits, tech conferences, leadership retreats, and family symposiums. He has advised Fortune 500 executives, startup founders, school districts, and hundreds of families through his "SLAY the Dragon" framework. He also serves as a certified Independent Facilitator for California's Self-Determination Program, helping neurodivergent individuals and their families navigate systemic barriers and thrive.`,
  achievements: [
    { number: '2026', label: 'Overall Speaker of the Year', icon: 'Trophy' },
    { number: '2x', label: 'TEDx Stage Speaker', icon: 'Mic' },
    { number: '#1', label: 'Amazon Bestselling Author', icon: 'BookOpen' },
    { number: '20+', label: 'Years Gaming Industry Exec', icon: 'Gamepad2' },
    { number: '50k+', label: 'Leaders & Families Impacted', icon: 'Users' },
  ],
  links: {
    linkedin: 'https://linkedin.com/in/mantin',
    website: 'https://mantinlu.com',
    calCom: 'https://cal.com/mantin',
    amazonBook: 'https://www.amazon.com/dp/B0DJ7FBN1Y', // Direct Amazon search / book link
    email: 'mantin@gmail.com',
  }
};

export const KEYNOTE_TALKS: Keynote[] = [
  {
    id: 'slay-to-lead',
    title: 'SLAY to LEAD: How to Stop Fixing the Person and Start Changing the Game',
    subtitle: 'Overcoming Workplace Friction, Burnout, and Toxic Dynamics with Behavioral Architecture',
    tagline: 'When leaders stop blaming individual willpower and start engineering the operational environment, retention skyrockets and execution becomes effortless.',
    description: 'Most leadership paradigms attempt to fix people through pep talks, reprimands, or motivational seminars. Yet 80% of execution failures stem not from flawed people, but from poorly designed systems. In this signature keynote, Mantin Lu dissects the hidden "dragons" of the modern workplace—fog of ambiguity, task paralysis, and broken feedback loops—and presents the actionable SLAY framework to turn every team into an unstoppable squad.',
    outcomes: [
      'Shift from punitive policing to environmental engineering that eliminates team bottlenecks',
      'Deploy the "Dragon Matrix Diagnostic Tool" to audit organizational friction points in 15 minutes',
      'Replace vague accountability with visible, self-correcting game loops that foster deep psychological safety',
      'Retain high-performing neurodivergent and creative talent who often burn out under rigid corporate structures'
    ],
    targetAudience: ['C-Suite Executives', 'People & Culture Leaders', 'Enterprise Team Managers', 'Tech & Innovation Summits'],
    duration: '45 – 75 minutes (Customizable Keynote or Half-Day Immersion)',
    format: 'In-person Mainstage Keynote, Virtual Summit, or Executive Offsite',
    image: './images/mantin/stage-talk-1.png',
    featuredBadge: 'Signature Keynote'
  },
  {
    id: 'dragon-matrix',
    title: 'The Dragon Matrix: Gamifying High-Performance Leadership & Team Resilience',
    subtitle: 'Lessons from 20+ Years in AAA Gaming Applied to High-Stakes Enterprise Execution',
    tagline: 'Video games keep millions immersed in intense problem-solving for hours. Why does your quarterly sprint feel exhausting? Here is the cure.',
    description: 'Drawing from two decades leading high-velocity studios in the multi-billion-dollar gaming industry, Mantin reveals the exact behavioral loops that game designers use to create relentless engagement. Learn how to transform tedious milestones into clear questlines, calibrate difficulty curves so your top performers enter effortless flow states, and build a culture where failure is treated as critical telemetry rather than a catastrophe.',
    outcomes: [
      'Implement "Quest-Based Execution" to make ambiguous quarterly goals immediately tangible',
      'Calibrate the challenge-skill ratio to prevent both boredom and toxic stress across cross-functional units',
      'Master rapid feedback loops that accelerate decision-making velocity by up to 3x',
      'Cultivate resilient teams that proactively seek hard challenges instead of hiding behind defensive silos'
    ],
    targetAudience: ['Engineering & Product Leaders', 'Executive Offsites', 'Corporate Strategy Summits', 'Founders & Scale-up CEOs'],
    duration: '45 – 60 minutes',
    format: 'Keynote or Interactive Executive Masterclass',
    image: './images/mantin/stage-talk-2.png',
    featuredBadge: 'High-Demand'
  },
  {
    id: 'executive-function',
    title: 'Executive Function in the Age of Distraction: Conquering Cognitive Chaos',
    subtitle: 'Reclaiming Focus, Energy, and Purpose in a World Engineered to Fragment Your Attention',
    tagline: 'Willpower is an exhaustible battery. Systems are infinite dynamos. Learn to build your cognitive armor.',
    description: 'We are living in an era of unprecedented cognitive warfare. Between slack pings, endless context switching, and algorithmic stimulation, our brains are in chronic executive overload. Grounded in cutting-edge cognitive science and Mantin’s personal breakthrough raising a child with severe neurodivergent executive dysfunction, this talk equips audiences with immediate tactical anchors to protect their cognitive bandwidth and regain deep work mastery.',
    outcomes: [
      'Identify and neutralize the 4 "Cognitive Dragons" draining 3.2 hours of daily productive output',
      'The "Micro-Questing" protocol: How to bypass task initiation paralysis within 120 seconds',
      'Design personal cognitive guardrails that eliminate decision fatigue before noon',
      'Actionable strategies for neurodivergent professionals (ADHD, Autism) and their neurotypical peers to collaborate seamlessly'
    ],
    targetAudience: ['All-Hands Corporate Events', 'Association Conferences', 'Higher Education & Parents', 'Healthcare & Wellness Summits'],
    duration: '45 – 90 minutes',
    format: 'In-person Keynote or Interactive Workshop',
    image: './images/mantin/stage-talk-3.png',
    featuredBadge: 'Audience Favorite'
  }
];

export const BOOK_DETAILS: BookInfo = {
  title: 'Raise Your Dragon Slayer',
  subtitle: 'Equip Your Child to SLAY the Dragons of Executive Dysfunction and Reclaim Your Family’s Joy',
  author: 'Mantin Lu',
  badge: 'Amazon #1 Bestseller',
  rating: 4.9,
  reviewsCount: 148,
  amazonUrl: 'https://www.amazon.com/dp/B0DJ7FBN1Y',
  coverImage: './images/mantin/photo-with-book.png',
  photoWithBook: './images/mantin/photo-with-book.png',
  overview: 'When executive dysfunction strikes—whether manifested as chronic procrastination, emotional meltdowns, forgotten homework, or morning chaos—parents often feel helpless, exhausted, and isolated. In "Raise Your Dragon Slayer," Mantin Lu translates twenty years of game design principles and his battle-tested experience parenting an autistic child into a compassionate, game-based framework. Rather than fighting your child, you learn how to team up and slay the real enemy: the dragons of distraction, inertia, and cognitive overload.',
  frameworkSummary: [
    {
      letter: 'S',
      word: 'Structure the Quest',
      explanation: 'Break down intimidating, ambiguous demands into microscopic, bite-sized tasks with unmistakable completion triggers.'
    },
    {
      letter: 'L',
      word: 'Leverage the Environment',
      explanation: 'Remove the friction that invites failure; design visual queues, checkpoints, and low-friction launchpads.'
    },
    {
      letter: 'A',
      word: 'Activate Real-Time Feedback',
      explanation: 'Replace delayed consequences with immediate progress indicators, celebratory micro-wins, and scorekeeping.'
    },
    {
      letter: 'Y',
      word: 'Yield Joy & Autonomy',
      explanation: 'Shift from micromanagement to co-op play, empowering the individual with authentic ownership and pride.'
    }
  ],
  chapters: [
    { number: 1, title: 'The Dragon That Stole Our Peace', summary: 'Understanding executive dysfunction through the lens of cognitive load rather than moral failure.' },
    { number: 2, title: 'The Willpower Myth', summary: 'Why telling someone to "just try harder" exacerbates burnout, and what game designers know about sustainable momentum.' },
    { number: 3, title: 'Mapping the Battleground', summary: 'The Dragon Matrix: Diagnosing task initiation paralysis, working memory dropouts, and emotional dysregulation.' },
    { number: 4, title: 'Designing the Quest Board', summary: 'How to convert daily friction routines (mornings, homework, bedtimes) into collaborative missions.' },
    { number: 5, title: 'Power-Ups and Checkpoints', summary: 'Engineering external environmental scaffolds that take the burden off fragile working memory.' },
    { number: 6, title: 'From Resentment to Co-Op Play', summary: 'Rebuilding the parent-child and leader-team emotional connection through non-punitive accountability.' },
    { number: 7, title: 'The Boss Level: Lifelong Self-Determination', summary: 'Transitioning from assisted scaffolds to self-advocacy, autonomy, and unstoppable confidence.' }
  ],
  takeaways: [
    'How to stop morning battles and homework tears without shouting or bribery',
    'The neuroscience of dopamine in neurodivergent brains explained in plain English',
    'Practical print-and-play quest templates you can tape on your fridge or office desk tonight',
    'A proven communication script that defuses meltdowns and invites instant cooperation'
  ],
  sampleExcerpt: {
    title: 'Chapter 2 Excerpt: The Willpower Myth',
    content: [
      '"If you only cared enough, you would have remembered."',
      'How many times have you said that—or had it said to you? For years, I treated my daughter\'s forgotten assignments and emotional freezes as a question of effort. I believed what modern hustle culture preached: that willpower is a muscle, and if she stumbled, the remedy was stricter discipline.',
      'Then, late one night after a brutal two-hour meltdown over a single paragraph of writing, I sat at my computer. As a video game executive, I had spent the past fifteen years analyzing why millions of players voluntarily spend four hours grinding through a grueling raid dungeon without quitting, while my daughter couldn\'t endure four minutes of writing.',
      'The revelation hit me like a physical blow: A player in a game doesn\'t quit because they lack character. They quit when the game design is broken—when the goals are opaque, the feedback is absent, and the difficulty spike is unfair.',
      'My daughter didn\'t need a stricter warden. She needed a better game designer. And that designer had to be me.'
    ]
  }
};

export const COACHING_PROGRAMS: CoachingProgram[] = [
  {
    id: 'executive-advisory',
    title: 'C-Suite & Executive Leadership Mentorship',
    subtitle: 'Private 1:1 Strategic Advisory for Founders & Senior Executives',
    description: 'High-stakes leaders face intense cognitive drag, decision fatigue, and organizational friction. Mantin works 1-on-1 with senior executives to audit their operational rhythm, optimize personal executive functioning, and restructure team mechanics for sustainable high velocity.',
    target: 'CEOs, VPs, Directors, and High-Impact Founders',
    deliverables: [
      'Bi-weekly 60-minute private strategy & accountability intensives',
      'Dragon Matrix Diagnostic of your leadership team and operating cadence',
      'Direct asynchronous voice/message access for real-time crisis triage',
      'Tailored cognitive architecture blueprint to eliminate decision burnout'
    ],
    format: 'Virtual (via Zoom/Meet) or In-Person Executive Intensives',
    commitment: '3-Month or 6-Month Engagements',
    badge: 'Limited to 6 Executives per Quarter',
    recommendedFor: 'Leaders scaling complex organizations through rapid growth'
  },
  {
    id: 'team-alignment',
    title: 'Corporate Culture & High-Performance Team Workshops',
    subtitle: 'Half-Day & Full-Day Interactive Immersions for Enterprise Teams',
    description: 'Bring the "SLAY to LEAD" framework directly inside your organization. Mantin facilitates deep diagnostic work with your core leadership or cross-functional units to dismantle communication silos, eradicate toxic friction, and install game-mechanic operating habits.',
    target: 'Corporate Teams, Department Heads, and Product/Engineering Units',
    deliverables: [
      'Pre-workshop team diagnostic survey and friction heat-mapping',
      'Interactive 3 to 6-hour hands-on tactical workshop session',
      'Customized "Quest Playbook" tailored specifically to your company OKRs',
      '30-day post-workshop follow-up session to ensure habit stickiness'
    ],
    format: 'On-site at Client Headquarters or Offsite Retreat',
    commitment: 'Half-Day or Full-Day Immersion',
    badge: 'High Organizational ROI',
    recommendedFor: 'Departments experiencing burnout, turnover, or execution stalls'
  },
  {
    id: 'family-coaching',
    title: 'Neurodiversity & Family Executive Function Coaching',
    subtitle: 'Empowering Parents & Families with Autistic / ADHD Children',
    description: 'Grounding the principles of "Raise Your Dragon Slayer" in your living room. As a certified Independent Facilitator for California\'s Self-Determination Program and an autism father, Mantin guides parents through evidence-based scaffolding, self-determination budget planning, and conflict-free household operating systems.',
    target: 'Parents, Guardians, and Caregivers of Neurodivergent Youth',
    deliverables: [
      'Weekly personalized family coaching calls with step-by-step game plans',
      'Customized Visual Quest Systems for home, morning, and school routines',
      'Self-Determination Program (SDP) roadmap and budget navigation support',
      'De-escalation and emotional regulation scripts for meltdowns'
    ],
    format: 'Virtual Private Sessions + Resource Vault',
    commitment: '8-Week Family Transformation Intensive',
    badge: 'Deeply Authentic & Transformative',
    recommendedFor: 'Parents exhausted by daily friction who want joy back in their homes'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    quote: 'Mantin Lu was the undisputed highlight of our annual leadership summit. He completely disrupted the stale "motivational speech" cliché by giving our 1,200 global directors a concrete mathematical system for diagnosing team burnout. People are still quoting the "Stop Fixing the Player" principle six months later.',
    author: 'Sarah Jenkins, Ph.D.',
    title: 'Chief People Officer',
    organization: 'Apex Global Technologies',
    category: 'corporate',
    rating: 5,
    highlight: 'Disrupted the stale motivational speech cliché'
  },
  {
    id: 'test-2',
    quote: 'Being awarded 2026 Overall Speaker of the Year is no coincidence. When Mantin steps on stage, the entire room is captivated. His storytelling as a gaming executive turned autism champion brings tears, laughs, and most importantly, an overwhelming sense of agency. A true master of his craft.',
    author: 'Marcus Vance',
    title: 'Executive Conference Chair',
    organization: 'Global Keynote Association & Leadership Forum',
    category: 'conference',
    rating: 5,
    highlight: 'Captivated 1,200+ leaders with tears, laughter, and actionable clarity'
  },
  {
    id: 'test-3',
    quote: '"Raise Your Dragon Slayer" literally saved our family from drowning. We had tried every chore chart, therapist, and behavioral reward system for our son with ADHD, only to end in tears every evening. Mantin taught us how to redesign the environment into an adventurous quest. Within three weeks, morning fights were gone.',
    author: 'Elena & David Rostova',
    title: 'Parents & Entrepreneurs',
    organization: 'San Francisco, CA',
    category: 'coaching',
    rating: 5,
    highlight: 'Saved our family from daily morning meltdowns'
  },
  {
    id: 'test-4',
    quote: 'Mantin’s 1:1 executive coaching was pivotal during our Series B transition. As a technical founder, I was constantly getting bogged down in micromanagement. Mantin’s game-design framework taught me how to architect autonomous teams that thrive without me in the room.',
    author: 'Jason Chen',
    title: 'Founder & CEO',
    organization: 'Synapse Data Systems',
    category: 'corporate',
    rating: 5,
    highlight: 'Helped me transition from micromanagement to autonomous scaling'
  },
  {
    id: 'test-5',
    quote: 'His TEDx talk was extraordinary, but having him in person for our 2-day executive retreat was a watershed moment. His Dragon Matrix diagnostic illuminated toxic bottlenecks that had silently cost us millions in stalled projects. He is worth 10x his speaking fee.',
    author: 'Dr. Evelyn Morales',
    title: 'VP of Strategy & Operations',
    organization: 'Vanguard Health Alliance',
    category: 'conference',
    rating: 5,
    highlight: 'Illuminated silent bottlenecks costing us millions'
  },
  {
    id: 'test-6',
    quote: 'Mantin’s ability to bridge high-stakes gaming analytics with neurodiversity and family leadership is completely unmatched in the industry. Warm, deeply authentic, and ruthlessly practical. You leave his sessions with zero fluff and 100% clarity.',
    author: 'Robert Sterling',
    title: 'Program Director',
    organization: 'California Self-Determination & Family Network',
    category: 'coaching',
    rating: 5,
    highlight: 'Warm, deeply authentic, and ruthlessly practical'
  }
];

export const FAQS = [
  {
    question: 'How far in advance should we book Mantin for a keynote speaking engagement?',
    answer: 'Mantin typically books 3 to 9 months in advance for major international conferences, corporate annual meetings, and enterprise retreats. However, please reach out via the booking form as select dates open throughout the year, especially for virtual keynotes and high-priority regional events.'
  },
  {
    question: 'Can Mantin customize his keynote content to our company’s industry and theme?',
    answer: 'Yes, 100%. Every keynote engagement includes a dedicated pre-event discovery call between Mantin and your executive or planning committee. He tailors his case studies, game-design analogies, and diagnostic takeaways to align precisely with your organization’s immediate challenges and event theme.'
  },
  {
    question: 'What is the format of the 1:1 Executive Coaching?',
    answer: 'Mantin works with a maximum of 6 high-level executives concurrently to preserve deep focus and availability. Engagements consist of bi-weekly strategic deep-dive sessions, quarterly Dragon Matrix audits, and ongoing direct messaging access for high-stakes decision support.'
  },
  {
    question: 'How do we order bulk copies of "Raise Your Dragon Slayer" for conference attendees or our organization?',
    answer: 'Bulk orders (25+ copies) receive discounted rates and can be paired with signed bookplates, custom executive forewords, or a private VIP Q&A session with Mantin for your attendees. Please specify your desired quantity in the booking inquiry form.'
  }
];
