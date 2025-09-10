import type { Facility } from '../schema/facility';

export const dummyFacilities: Facility[] = [
  {
    id: 'facility-001',
    name: 'Downtown Sports Complex',
    sportTypes: ['basketball', 'volleyball'],
    amenities: [
      { name: 'Parking', icon: 'Car' },
      { name: 'Shower facilities', icon: 'Shower' },
      { name: 'Equipment rental', icon: 'Basketball' },
      { name: 'Pro shop', icon: 'ShoppingBag' },
      { name: 'Café', icon: 'Coffee' }
    ],
    pictures: [
      'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800',
      'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=800',
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800'
    ],
    location: '123 Ayala Avenue, Makati City, Metro Manila',
    description: 'State-of-the-art indoor sports complex featuring multiple basketball courts and volleyball courts. Perfect for leagues, tournaments, and casual play.',
    openingTime: '06:00',
    closingTime: '23:00',
    status: 'popular',
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-01-15')
  },
  {
    id: 'facility-002',
    name: 'Riverside Tennis Club',
    sportTypes: ['tennis'],
    amenities: [
      { name: 'Tennis courts (clay & hard)', icon: 'Tennis' },
      { name: 'Ball machine rental', icon: 'Bot' },
      { name: 'Pro lessons', icon: 'GraduationCap' },
      { name: 'Clubhouse', icon: 'Home' },
      { name: 'Restaurant', icon: 'Utensils' },
      { name: 'Swimming pool', icon: 'Swimming' }
    ],
    pictures: [
      'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=800',
      'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=800',
      'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800'
    ],
    location: '456 Roxas Boulevard, Manila City, Metro Manila',
    description: 'Premium tennis facility with 12 courts, professional coaching, and a luxurious clubhouse. Hosts regional tournaments and offers membership packages.',
    openingTime: '07:00',
    closingTime: '22:00',
    status: 'top',
    createdAt: new Date('2024-01-20'),
    updatedAt: new Date('2024-01-20')
  },
  {
    id: 'facility-003',
    name: 'Community Pickleball Center',
    sportTypes: ['pickleball'],
    amenities: [
      { name: '8 indoor courts', icon: 'TableTennis' },
      { name: 'Equipment rental', icon: 'TableTennis' },
      { name: 'Beginner lessons', icon: 'BookOpen' },
      { name: 'Social events', icon: 'PartyPopper' },
      { name: 'Refreshments', icon: 'GlassWater' }
    ],
    pictures: [
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800',
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800',
      'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=800',
      'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=800'
    ],
    location: '789 Quezon Avenue, Quezon City, Metro Manila',
    description: 'Dedicated pickleball facility with indoor courts, perfect for all skill levels. Regular social events and beginner-friendly environment.',
    openingTime: '08:00',
    closingTime: '21:00',
    status: 'near',
    createdAt: new Date('2024-01-25'),
    updatedAt: new Date('2024-01-25')
  },
  {
    id: 'facility-004',
    name: 'Elite Badminton Academy',
    sportTypes: ['badminton'],
    amenities: [
      { name: '6 professional courts', icon: 'Badminton' },
      { name: 'Coaching programs', icon: 'Target' },
      { name: 'Tournament hosting', icon: 'Trophy' },
      { name: 'Equipment shop', icon: 'ShoppingCart' },
      { name: 'Fitness center', icon: 'Dumbbell' }
    ],
    pictures: [
      'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=800',
      'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=800',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800',
      'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800'
    ],
    location: '321 Bonifacio Global City, Taguig City, Metro Manila',
    description: 'Professional badminton facility with Olympic-standard courts. Offers coaching for all levels and hosts national competitions.',
    openingTime: '06:30',
    closingTime: '23:30',
    status: 'top',
    createdAt: new Date('2024-02-01'),
    updatedAt: new Date('2024-02-01')
  },
  {
    id: 'facility-005',
    name: 'Multi-Sport Arena',
    sportTypes: ['basketball', 'volleyball', 'pickleball', 'tennis', 'badminton'],
    amenities: [
      { name: 'Multiple sport courts', icon: 'Stadium' },
      { name: 'Olympic pool', icon: 'Swimming' },
      { name: 'Fitness center', icon: 'Dumbbell' },
      { name: 'Spa services', icon: 'Spa' },
      { name: 'Restaurant', icon: 'Utensils' },
      { name: 'Hotel', icon: 'Building' }
    ],
    pictures: [
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800',
      'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=800',
      'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800',
      'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=800'
    ],
    location: '555 SM Mall of Asia Complex, Pasay City, Metro Manila',
    description: 'World-class multi-sport facility featuring courts for all major racket sports, basketball, and volleyball. Complete resort experience.',
    openingTime: '05:00',
    closingTime: '01:00',
    status: 'top',
    createdAt: new Date('2024-02-05'),
    updatedAt: new Date('2024-02-05')
  },
  {
    id: 'facility-006',
    name: 'University Sports Center',
    sportTypes: ['basketball', 'volleyball', 'tennis'],
    amenities: [
      { name: 'Student discounts', icon: 'GraduationCap' },
      { name: 'Academic programs', icon: 'BookOpen' },
      { name: 'Research facilities', icon: 'Microscope' },
      { name: 'Sports medicine', icon: 'Stethoscope' },
      { name: 'Library access', icon: 'Library' }
    ],
    pictures: [
      'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800',
      'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=800',
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800'
    ],
    location: '100 University of the Philippines, Diliman, Quezon City, Metro Manila',
    description: 'University sports facility open to students and public. Features basketball courts, volleyball courts, and tennis courts with academic integration.',
    openingTime: '07:00',
    closingTime: '22:00',
    status: 'near',
    createdAt: new Date('2024-02-10'),
    updatedAt: new Date('2024-02-10')
  },
  {
    id: 'facility-007',
    name: 'Parkside Recreation Center',
    sportTypes: ['pickleball', 'tennis', 'badminton'],
    amenities: [
      { name: 'Outdoor courts', icon: 'Tree' },
      { name: 'Indoor courts', icon: 'Home' },
      { name: 'Picnic areas', icon: 'Basket' },
      { name: 'Walking trails', icon: 'Footprints' },
      { name: 'Children\'s playground', icon: 'Baby' }
    ],
    pictures: [
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800',
      'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=800',
      'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=800',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800'
    ],
    location: '200 Rizal Park, Manila City, Metro Manila',
    description: 'Family-friendly recreation center with both indoor and outdoor courts. Perfect for casual play and community events.',
    openingTime: '08:00',
    closingTime: '20:00',
    status: 'popular',
    createdAt: new Date('2024-02-15'),
    updatedAt: new Date('2024-02-15')
  },
  {
    id: 'facility-008',
    name: 'Professional Basketball Academy',
    sportTypes: ['basketball'],
    amenities: [
      { name: 'Full-size courts', icon: 'Basketball' },
      { name: 'Training equipment', icon: 'Dumbbell' },
      { name: 'Video analysis', icon: 'Video' },
      { name: 'Strength training', icon: 'Dumbbell' },
      { name: 'Recovery room', icon: 'Bed' },
      { name: 'Nutritionist', icon: 'Apple' }
    ],
    pictures: [
      'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800',
      'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800',
      'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=800'
    ],
    location: '777 Araneta Coliseum Complex, Quezon City, Metro Manila',
    description: 'Elite basketball training facility with professional coaching, advanced analytics, and comprehensive player development programs.',
    openingTime: '06:00',
    closingTime: '23:00',
    status: 'top',
    createdAt: new Date('2024-02-20'),
    updatedAt: new Date('2024-02-20')
  },
  {
    id: 'facility-009',
    name: 'Volleyball Excellence Center',
    sportTypes: ['volleyball'],
    amenities: [
      { name: 'Beach volleyball courts', icon: 'Umbrella' },
      { name: 'Indoor courts', icon: 'Volleyball' },
      { name: 'Sand training area', icon: 'Umbrella' },
      { name: 'Beach access', icon: 'Waves' },
      { name: 'Pro shop', icon: 'ShoppingBag' },
      { name: 'Beach café', icon: 'Coffee' }
    ],
    pictures: [
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800',
      'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800',
      'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=800'
    ],
    location: '888 Manila Bay Area, Manila City, Metro Manila',
    description: 'Premier volleyball facility with both indoor and beach courts. Hosts international tournaments and offers professional training.',
    openingTime: '07:00',
    closingTime: '22:00',
    status: 'popular',
    createdAt: new Date('2024-02-25'),
    updatedAt: new Date('2024-02-25')
  },
  {
    id: 'facility-010',
    name: 'Racket Sports Hub',
    sportTypes: ['tennis', 'badminton', 'pickleball'],
    amenities: [
      { name: 'All-weather courts', icon: 'Cloud' },
      { name: 'Equipment rental', icon: 'Tennis' },
      { name: 'Pro coaching', icon: 'GraduationCap' },
      { name: 'Tournament facilities', icon: 'Trophy' },
      { name: 'Social lounge', icon: 'Sofa' },
      { name: 'Equipment repair', icon: 'Wrench' }
    ],
    pictures: [
      'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=800',
      'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=800',
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800'
    ],
    location: '999 Marikina Sports Complex, Marikina City, Metro Manila',
    description: 'Comprehensive racket sports facility specializing in tennis, badminton, and pickleball. All-weather courts and professional instruction available.',
    openingTime: '06:00',
    closingTime: '23:00',
    status: 'near',
    createdAt: new Date('2024-03-01'),
    updatedAt: new Date('2024-03-01')
  }
];
