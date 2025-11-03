import type { Mentor } from '../types';

const mentors: Mentor[] = [
  {
    id: 'mentor-1',
    name: 'Aanya Sharma',
    title: 'Lead Yoga Instructor',
    specialties: ['Vinyasa Flow', 'Pranayama', 'Meditation'],
    experienceYears: 12,
    bio: 'Aanya has been guiding students for over a decade, focusing on the connection between breath and movement to foster inner peace and strength.',
    image: 'https://images.unsplash.com/photo-1552196563-55cd4e45efb3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    socialLinks: {
      instagram: '#',
      linkedin: '#',
    },
  },
  {
    id: 'mentor-2',
    name: 'Rohan Verma',
    title: 'Ashtanga & Hatha Expert',
    specialties: ['Ashtanga', 'Hatha Yoga', 'Alignment'],
    experienceYears: 8,
    bio: 'Rohan\'s classes are a blend of disciplined practice and mindful movement, helping students build a strong foundation and deeper body awareness.',
    image: 'https://plus.unsplash.com/premium_photo-1736781419736-d440fb08f906?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470',
    socialLinks: {
      instagram: '#',
      linkedin: '#',
    },
  },
  {
    id: 'mentor-3',
    name: 'Priya Mehta',
    title: 'Restorative & Yin Yoga Guide',
    specialties: ['Yin Yoga', 'Restorative Yoga', 'Mindfulness'],
    experienceYears: 10,
    bio: 'Priya creates a nurturing space for students to unwind and release tension, focusing on slow, deep stretches to improve flexibility and calm the mind.',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    socialLinks: {
      instagram: '#',
      linkedin: '#',
    },
  },
];

export default mentors;