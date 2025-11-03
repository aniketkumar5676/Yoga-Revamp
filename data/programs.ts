import type { Program } from '../types';

const programs: Program[] = [
  {
    id: 'home-yoga',
    title: 'Home Yoga',
    shortDescription: 'Personalized yoga sessions in the comfort of your home.',
    detailedDescription: 'Our Home Yoga programme brings certified instructors to your living space. Sessions are tailored for beginners, working professionals, or family groups.',
    image: 'https://images.unsplash.com/photo-1626026397008-3316047db4fc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=3343',
    benefits: ['Convenience at home', 'Customized plan', 'Flexible schedule'],
    pricingPlans: [
      { plan: 'Silver', price: '₹1499/month', features: ['3 sessions/week', 'Group of up to 4'] },
      { plan: 'Gold', price: '₹2499/month', features: ['5 sessions/week', 'Personal session'] },
      { plan: 'Platinum', price: '₹3499/month', features: ['Unlimited sessions', 'Family inclusive'] }
    ],
    faq: [
      { question: 'Do I need yoga mats?', answer: 'Yes, please provide a mat or we can provide one at additional cost.' },
      { question: 'Are online sessions possible?', answer: 'Yes, we provide Zoom or Google Meet link if you prefer remote.' }
    ]
  },
  {
    id: 'online-yoga',
    title: 'Online Yoga',
    shortDescription: 'Live, interactive yoga classes from anywhere in the world.',
    detailedDescription: 'Join our vibrant online community and practice yoga with expert instructors in real-time. Our classes cater to all levels, from absolute beginners to advanced practitioners.',
    image: 'https://images.unsplash.com/photo-1758599880805-3f000f47fa46?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1632',
     schedule: [
      { day: 'Monday - Friday', time: '7:00 AM - 8:00 AM', level: 'All Levels' },
      { day: 'Monday, Wednesday, Friday', time: '6:00 PM - 7:00 PM', level: 'Intermediate' },
      { day: 'Saturday', time: '9:00 AM - 10:30 AM', level: 'Advanced Workshop' }
    ],
    benefits: ["Practice Anywhere", "Expert Guidance", "Community Support"],
    pricingPlans: [
      { plan: 'Drop-in', price: '₹299/class', features: ['Single class access'] },
      { plan: 'Monthly', price: '₹1999/month', features: ['Unlimited classes', 'Access to recordings'] }
    ],
    faq: [
      { question: 'What platform do you use?', answer: 'We use Zoom for all our live online classes.' },
      { question: 'What if I miss a class?', answer: 'All classes are recorded and available to monthly subscribers.' }
    ]
  },
  {
    id: 'corporate-yoga',
    title: 'Corporate Yoga',
    shortDescription: 'Wellness programs to boost employee productivity.',
    detailedDescription: 'Introduce the benefits of yoga to your workplace. Our corporate programs are designed to reduce stress, improve focus, and promote a healthy work-life balance.',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80',
    benefits: ["Stress Reduction", "Improved Focus", "Team Building"],
    pricingPlans: [
      { plan: 'On-site Session', price: '₹4999/session', features: ['Up to 20 employees', '60-minute class'] },
      { plan: 'Virtual Session', price: '₹2999/session', features: ['Unlimited employees', '45-minute class'] }
    ],
    faq: [
      { question: 'Can sessions be customized?', answer: 'Yes, we tailor all corporate sessions to meet the specific needs and goals of your team.' },
    ]
  },
  {
    id: 'therapy-yoga',
    title: 'Therapy Yoga',
    shortDescription: 'Healing through gentle, restorative yoga practices.',
    detailedDescription: 'Our therapy yoga sessions are designed to address specific physical or emotional needs, providing a safe and supportive environment for healing and recovery.',
    image: 'https://images.unsplash.com/photo-1542651061-6c70005d9f62?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1469',
    benefits: ["Pain Management", "Injury Recovery", "Mental Well-being"],
    pricingPlans: [
      { plan: 'Individual Session', price: '₹1200/session', features: ['Personalized assessment', 'Custom routine'] },
    ],
    faq: [
       { question: 'Is this suitable for beginners?', answer: 'Absolutely. Therapy yoga is gentle and adapted to your specific condition, making it ideal for all levels.' },
    ]
  },
  {
    id: 'meditation',
    title: 'Meditation',
    shortDescription: 'Cultivate inner peace and mindfulness.',
    detailedDescription: 'Learn various meditation techniques to calm your mind, reduce anxiety, and improve focus. Our guided sessions are perfect for both beginners and experienced practitioners.',
    image: 'https://images.unsplash.com/photo-1593811167563-5c4a7008558f?auto=format&fit=crop&w=800&q=80',
    benefits: ["Stress Reduction", "Improved Concentration", "Emotional Balance"],
    pricingPlans: [
      { plan: 'Group Session', price: '₹499/session', features: ['Guided meditation', 'Community support'] },
    ],
    faq: [
       { question: 'Do I need any prior experience?', answer: 'No experience is necessary. Our classes are designed to be accessible to everyone.' },
    ]
  },
  {
    id: 'yoga-camp',
    title: 'Yoga Camp',
    shortDescription: 'Immersive yoga retreats and workshops.',
    detailedDescription: 'Join our weekend yoga camps to deepen your practice, connect with nature, and rejuvenate your mind, body, and soul. An unforgettable experience awaits.',
    image: 'https://images.unsplash.com/photo-1562772390-2c75a3406796?auto=format&fit=crop&w=800&q=80',
    benefits: ["Deepen Practice", "Connect with Nature", "Community Bonding"],
    pricingPlans: [
      { plan: 'Weekend Retreat', price: '₹8999/person', features: ['All-inclusive stay', 'Multiple yoga sessions', 'Workshops'] },
    ],
    faq: [
      { question: 'What should I bring?', answer: 'We will provide a detailed packing list upon registration, which typically includes comfortable clothing, a yoga mat, and personal items.' },
    ]
  }
];

export default programs;