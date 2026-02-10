import { Experience } from '@/types/experience';

export const experiences: Experience[] = [
    {
    id: 'exp-1',
    company: 'Paycom',
    role: 'Software Development Engineer in Test',
    period: 'May 2025 - Aug 2025',
    startDate: '2025-05-01',
    endDate: '2025-08-31',
    current: false,
    description: [
      'Sole intern contributor to IWant, Paycom\'s new AI automation product, performing automation of preliminary testing on 100+ test cases, ensuring a successful launch',
      'Built and maintained automated regression tests using internal tools, improving test efficiency and contributing to faster, more reliable software releases and hotfix turnarounds',
      'Designed thorough test plans after conducting research on new features and modules, validating expected behaviors across several modules',
    ],
    technologies: ['Selenium', 'Test Automation', 'QA', 'AI'],
  },
  {
    id: 'exp-2',
    company: 'University of Oklahoma',
    role: 'Undergraduate Teaching Assistant',
    period: 'Jan 2026 - Present',
    startDate: '2026-01-01',
    current: true,
    description: [
      'Collaborate with the course professor to organize course materials, plan assignments, and grade coursework and coding assessments for CS 2813: Discrete Structures',
      'Hold office hours to support students in mastering discrete mathematics topics, reinforcing problem-solving and conceptual understanding',
    ],
    technologies: ['Discrete Mathematics', 'Computer Science', 'Education'],
  },
  {
    id: 'exp-3',
    company: 'University of Oklahoma Math Department',
    role: 'Math Center Student Tutor',
    period: 'Sep 2025 - Present',
    startDate: '2025-09-01',
    current: true,
    description: [
      'Provide one-on-one and group tutoring in College Algebra, Pre-Calculus & Trigonometry, Introductory Algebra, and Calculus, reinforcing vital mathematical concepts and problem solving skills',
      'Adapt explanations to diverse learning styles, enabling a safe and prosperous learning environment across varying levels of proficiency',
    ],
    technologies: ['Mathematics', 'Tutoring', 'Education'],
  },
  {
    id: 'exp-4',
    company: 'University of Oklahoma Athletics Department',
    role: 'Athletics Student Tutor',
    period: 'Jan 2025 - Present',
    startDate: '2025-01-01',
    current: true,
    description: [
      'Provide individualized and group tutoring to student-athletes in Developmental Math, College Algebra, Calculus I & II, and Discrete Math, reinforcing core concepts and problem-solving techniques',
      'Collaborate with academic advisors and coaching staff to track student progress, ensuring NCAA compliance and maintaining eligibility through structured math support',
    ],
    technologies: ['Mathematics', 'Tutoring', 'NCAA Compliance'],
  },
];
