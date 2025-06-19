'use client';

import { useState } from 'react';
import Image from 'next/image';
import { 
  MapPin, 
  Calendar, 
  Clock, 
  Star, 
  Heart, 
  Share2, 
  Users, 
  MessageCircle,
  CheckCircle,
  ArrowLeft
} from 'lucide-react';
import { BookingFlow } from '@/components/BookingFlow';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

// Mock data for individual itinerary
const mockItinerary = {
  id: '1',
  title: 'Magical Japan: Tokyo to Kyoto Adventure',
  description: 'Experience the perfect blend of modern Tokyo and traditional Kyoto in this carefully crafted 7-day journey through Japan\'s cultural heart.',
  fullDescription: `This comprehensive itinerary takes you through Japan's most iconic destinations, combining the bustling energy of Tokyo with the serene beauty of Kyoto. 

You'll explore ancient temples, witness the famous cherry blossoms (seasonal), experience authentic Japanese cuisine, and immerse yourself in both traditional and contemporary Japanese culture.

The journey includes visits to iconic landmarks like Senso-ji Temple, Tokyo Skytree, Fushimi Inari Shrine, and the bamboo groves of Arashiyama. Each day is carefully planned to maximize your experience while allowing flexibility for personal exploration.`,
  images: [
    '/api/placeholder/800/400',
    '/api/placeholder/400/300',
    '/api/placeholder/400/300',
    '/api/placeholder/400/300'
  ],
  price: 1299,
  originalPrice: 1599,
  duration: '7 days',
  location: 'Tokyo & Kyoto, Japan',
  category: '🏙️ City Exploration',
  rating: 4.9,
  reviewCount: 127,
  creator: {
    name: 'Yuki Tanaka',
    avatar: '/api/placeholder/50/50',
    rating: 4.8,
    experience: '5+ years',
    location: 'Tokyo, Japan',
    verified: true,
    languages: ['Japanese', 'English', 'Korean']
  },
  highlights: [
    'Visit iconic Tokyo landmarks including Shibuya Crossing',
    'Traditional tea ceremony in Kyoto',
    'Explore hidden local neighborhoods',
    'Authentic ramen and sushi experiences',
    'Cherry blossom viewing (seasonal)',
    'Traditional ryokan stay experience'
  ],
  included: [
    '7 nights accommodation (mix of hotel & ryokan)',
    'All transportation between cities',
    'Daily breakfast',
    'Professional local guide',
    'Entrance fees to all attractions',
    'Traditional dinner experiences'
  ],
  itinerary: [
    {
      day: 1,
      title: 'Arrival in Tokyo',
      activities: [
        'Airport pickup and hotel check-in',
        'Welcome dinner in Shibuya',
        'Evening walk through Harajuku'
      ]
    },
    {
      day: 2,
      title: 'Modern Tokyo',
      activities: [
        'Tokyo Skytree and observation deck',
        'Senso-ji Temple in Asakusa',
        'Traditional lunch in historic district',
        'Shopping in Ginza'
      ]
    },
    {
      day: 3,
      title: 'Tokyo Culture',
      activities: [
        'Tsukiji Outer Market food tour',
        'Imperial Palace East Gardens',
        'Traditional craft workshop',
        'Kabuki performance (evening)'
      ]
    },
    {
      day: 4,
      title: 'Journey to Kyoto',
      activities: [
        'Shinkansen bullet train experience',
        'Kyoto arrival and ryokan check-in',
        'Philosopher\'s Path walk',
        'Traditional kaiseki dinner'
      ]
    },
    {
      day: 5,
      title: 'Sacred Kyoto',
      activities: [
        'Fushimi Inari Shrine hike',
        'Traditional tea ceremony',
        'Gion district geisha spotting',
        'Kiyomizu-dera Temple visit'
      ]
    },
    {
      day: 6,
      title: 'Arashiyama & Bamboo',
      activities: [
        'Bamboo Grove morning walk',
        'Tenryu-ji Temple gardens',
        'Traditional pottery class',
        'Farewell dinner with group'
      ]
    },
    {
      day: 7,
      title: 'Departure',
      activities: [
        'Final temple visit',
        'Souvenir shopping',
        'Airport transfer'
      ]
    }
  ],
  maxGroupSize: 12,
  availability: [
    { date: '2025-03-15', spots: 3 },
    { date: '2025-04-10', spots: 5 },
    { date: '2025-05-20', spots: 2 },
    { date: '2025-06-15', spots: 8 }
  ]
};

export default function ItineraryDetailPage() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Button */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/itineraries" className="inline-flex items-center text-gray-600 hover:text-gray-900">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Itineraries
          </Link>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="lg:col-span-2">
              <div className="relative aspect-[16/9] rounded-xl overflow-hidden">
                <Image
                  src={mockItinerary.images[selectedImage]}
                  alt={mockItinerary.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex gap-2 mt-4">
                {mockItinerary.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 ${
                      selectedImage === index ? 'border-blue-500' : 'border-gray-200'
                    }`}
                  >
                    <Image src={image} alt={`View ${index + 1}`} fill className="object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Booking Card */}
            <div className="lg:col-span-1">
              <div className="bg-white border border-gray-200 rounded-xl p-6 sticky top-4">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-2xl font-bold text-gray-900">${mockItinerary.price}</span>
                    <span className="text-sm text-gray-500 line-through ml-2">${mockItinerary.originalPrice}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setIsLiked(!isLiked)}
                      className={`p-2 rounded-full border ${isLiked ? 'bg-red-50 border-red-200' : 'bg-gray-50 border-gray-200'}`}
                    >
                      <Heart className={`h-4 w-4 ${isLiked ? 'fill-red-500 text-red-500' : 'text-gray-400'}`} />
                    </button>
                    <button className="p-2 rounded-full border bg-gray-50 border-gray-200">
                      <Share2 className="h-4 w-4 text-gray-400" />
                    </button>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="h-4 w-4 mr-2" />
                    {mockItinerary.duration}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="h-4 w-4 mr-2" />
                    {mockItinerary.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="h-4 w-4 mr-2" />
                    Max {mockItinerary.maxGroupSize} people
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <Button 
                    onClick={() => setShowBookingModal(true)}
                    className="w-full bg-blue-600 hover:bg-blue-700"
                  >
                    Book Now
                  </Button>
                  <Button variant="outline" className="w-full">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Contact Creator
                  </Button>
                </div>

                <div className="text-center text-sm text-gray-500">
                  Free cancellation up to 48 hours before
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Header */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm font-medium bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                  {mockItinerary.category}
                </span>
                <div className="flex items-center">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium ml-1">{mockItinerary.rating}</span>
                  <span className="text-sm text-gray-500 ml-1">({mockItinerary.reviewCount} reviews)</span>
                </div>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{mockItinerary.title}</h1>
              <p className="text-lg text-gray-600">{mockItinerary.description}</p>
            </div>

            {/* Creator Info */}
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4">About Your Guide</h3>
              <div className="flex items-start gap-4">
                <div className="relative">
                  <Image
                    src={mockItinerary.creator.avatar}
                    alt={mockItinerary.creator.name}
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  {mockItinerary.creator.verified && (
                    <CheckCircle className="absolute -bottom-1 -right-1 h-5 w-5 text-blue-600 bg-white rounded-full" />
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-semibold">{mockItinerary.creator.name}</h4>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm ml-1">{mockItinerary.creator.rating}</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{mockItinerary.creator.experience} • {mockItinerary.creator.location}</p>
                  <div className="flex flex-wrap gap-1">
                    {mockItinerary.creator.languages.map((lang) => (
                      <span key={lang} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4">About This Experience</h3>
              <div className="prose prose-gray max-w-none">
                {mockItinerary.fullDescription.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="mb-4 text-gray-600 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Highlights */}
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4">Experience Highlights</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {mockItinerary.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* What's Included */}
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4">What's Included</h3>
              <div className="space-y-3">
                {mockItinerary.included.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Daily Itinerary */}
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-6">Daily Itinerary</h3>
              <div className="space-y-6">
                {mockItinerary.itinerary.map((day) => (
                  <div key={day.day} className="border-l-2 border-blue-200 pl-6 relative">
                    <div className="absolute -left-2 w-4 h-4 bg-blue-600 rounded-full"></div>
                    <div className="mb-2">
                      <span className="text-sm font-medium text-blue-600">Day {day.day}</span>
                      <h4 className="text-lg font-semibold text-gray-900">{day.title}</h4>
                    </div>
                    <ul className="space-y-2">
                      {day.activities.map((activity, index) => (
                        <li key={index} className="text-gray-600 flex items-start gap-2">
                          <Clock className="h-4 w-4 text-gray-400 mt-0.5 flex-shrink-0" />
                          {activity}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Available Dates */}
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4">Available Dates</h3>
              <div className="space-y-3">
                {mockItinerary.availability.map((slot, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                    <div>
                      <div className="font-medium">{new Date(slot.date).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric', 
                        year: 'numeric' 
                      })}</div>
                      <div className="text-sm text-gray-500">{slot.spots} spots left</div>
                    </div>
                    <Button size="sm" variant="outline">Select</Button>
                  </div>
                ))}
              </div>
            </div>

            {/* Safety & Trust */}
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4">Safety & Trust</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-sm text-gray-700">Verified creator</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-sm text-gray-700">Secure payments</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-sm text-gray-700">24/7 support</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-sm text-gray-700">Travel insurance included</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>      {/* Booking Modal */}
      <BookingFlow
        itinerary={{
          id: mockItinerary.id,
          title: mockItinerary.title,
          price: mockItinerary.price,
          image: mockItinerary.images[0]
        }}
        isOpen={showBookingModal}
        onClose={() => setShowBookingModal(false)}
      />
    </div>
  );
}
