'use client';

import { useState } from 'react';
import Image from 'next/image';
import { 
  Calendar, 
  MapPin, 
  Star, 
  MessageCircle, 
  Download, 
  Edit,
  Plus,
  User,
  CreditCard,
  Bell,
  Settings,
  LogOut,
  Eye,
  Heart,
  DollarSign
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const mockUser = {
  id: '1',
  name: 'Sarah Johnson',
  email: 'sarah.johnson@email.com',
  avatar: '/api/placeholder/100/100',
  location: 'San Francisco, CA',
  joinDate: '2024-01-15',
  credits: 150,
  rating: 4.8,
  totalBookings: 12,
  totalReviews: 8
};

const mockBookings = [
  {
    id: '1',
    itinerary: {
      title: 'Magical Japan: Tokyo to Kyoto Adventure',
      image: '/api/placeholder/300/200',
      creator: 'Yuki Tanaka',
      duration: '7 days',
      location: 'Japan'
    },
    dates: '2025-04-10 to 2025-04-17',
    status: 'confirmed',
    price: 1299,
    guests: 2
  },
  {
    id: '2',
    itinerary: {
      title: 'Bali Hidden Gems & Temples',
      image: '/api/placeholder/300/200',
      creator: 'Made Wijaya',
      duration: '5 days',
      location: 'Bali, Indonesia'
    },
    dates: '2025-06-15 to 2025-06-20',
    status: 'pending',
    price: 899,
    guests: 1
  },
  {
    id: '3',
    itinerary: {
      title: 'Tuscany Wine Country Escape',
      image: '/api/placeholder/300/200',
      creator: 'Marco Rossi',
      duration: '4 days',
      location: 'Tuscany, Italy'
    },
    dates: '2024-09-20 to 2024-09-24',
    status: 'completed',
    price: 1150,
    guests: 2
  }
];

const mockWishlist = [
  {
    id: '4',
    title: 'Northern Lights & Ice Hotels',
    image: '/api/placeholder/300/200',
    creator: 'Erik Andersen',
    location: 'Lapland, Finland',
    price: 1890,
    rating: 4.9
  },
  {
    id: '5',
    title: 'Safari & Wildlife Photography',
    image: '/api/placeholder/300/200',
    creator: 'Amara Okafor',
    location: 'Kenya',
    price: 2340,
    rating: 4.7
  }
];

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('bookings');

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'completed': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const renderBookings = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">My Bookings</h2>
        <div className="flex gap-2">
          <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm">
            <option>All bookings</option>
            <option>Upcoming</option>
            <option>Past</option>
            <option>Cancelled</option>
          </select>
        </div>
      </div>

      {mockBookings.map((booking) => (
        <div key={booking.id} className="bg-white border border-gray-200 rounded-xl p-6">
          <div className="flex items-start gap-4">
            <div className="relative w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
              <Image
                src={booking.itinerary.image}
                alt={booking.itinerary.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="font-semibold text-lg">{booking.itinerary.title}</h3>
                  <p className="text-gray-600">by {booking.itinerary.creator}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(booking.status)}`}>
                  {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                </span>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600 mb-4">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  {booking.dates}
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  {booking.itinerary.location}
                </div>
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-1" />
                  {booking.guests} guest{booking.guests > 1 ? 's' : ''}
                </div>
                <div className="flex items-center">
                  <DollarSign className="h-4 w-4 mr-1" />
                  ${booking.price}
                </div>
              </div>
              <div className="flex gap-2">
                <Button size="sm" variant="outline">
                  <Eye className="h-4 w-4 mr-1" />
                  View Details
                </Button>
                <Button size="sm" variant="outline">
                  <MessageCircle className="h-4 w-4 mr-1" />
                  Contact Guide
                </Button>
                {booking.status === 'confirmed' && (
                  <Button size="sm" variant="outline">
                    <Download className="h-4 w-4 mr-1" />
                    Itinerary
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderWishlist = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">My Wishlist</h2>
        <span className="text-sm text-gray-500">{mockWishlist.length} saved</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {mockWishlist.map((item) => (
          <div key={item.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden">
            <div className="relative h-48">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
              <button className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur rounded-full">
                <Heart className="h-4 w-4 fill-red-500 text-red-500" />
              </button>
            </div>
            <div className="p-4">
              <h3 className="font-semibold mb-1">{item.title}</h3>
              <p className="text-gray-600 text-sm mb-2">by {item.creator}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-600">
                  <MapPin className="h-4 w-4 mr-1" />
                  {item.location}
                </div>
                <div className="flex items-center">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                  <span className="text-sm">{item.rating}</span>
                </div>
              </div>
              <div className="flex items-center justify-between mt-3">
                <span className="font-semibold">${item.price}</span>
                <Button size="sm">Book Now</Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderProfile = () => (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Profile Settings</h2>
      
      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <div className="flex items-start gap-6 mb-6">
          <div className="relative">
            <Image
              src={mockUser.avatar}
              alt={mockUser.name}
              width={80}
              height={80}
              className="rounded-full"
            />
            <button className="absolute bottom-0 right-0 bg-blue-600 text-white p-2 rounded-full">
              <Edit className="h-4 w-4" />
            </button>
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-1">{mockUser.name}</h3>
            <p className="text-gray-600 mb-2">{mockUser.email}</p>
            <p className="text-gray-600 mb-4">{mockUser.location}</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div>
                <span className="text-gray-600">Credits</span>
                <div className="font-semibold">{mockUser.credits}</div>
              </div>
              <div>
                <span className="text-gray-600">Rating</span>
                <div className="font-semibold flex items-center">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                  {mockUser.rating}
                </div>
              </div>
              <div>
                <span className="text-gray-600">Trips</span>
                <div className="font-semibold">{mockUser.totalBookings}</div>
              </div>
              <div>
                <span className="text-gray-600">Reviews</span>
                <div className="font-semibold">{mockUser.totalReviews}</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold mb-3">Personal Information</h4>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  defaultValue={mockUser.name}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  defaultValue={mockUser.email}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                <input
                  type="text"
                  defaultValue={mockUser.location}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2"
                />
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3">Preferences</h4>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Languages</label>
                <input
                  type="text"
                  placeholder="English, Spanish, French"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Travel Style</label>
                <select className="w-full border border-gray-300 rounded-lg px-3 py-2">
                  <option>Adventure</option>
                  <option>Cultural</option>
                  <option>Luxury</option>
                  <option>Budget</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
                <textarea
                  rows={3}
                  placeholder="Tell others about yourself..."
                  className="w-full border border-gray-300 rounded-lg px-3 py-2"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-end mt-6">
          <Button>Save Changes</Button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-6">
                <Image
                  src={mockUser.avatar}
                  alt={mockUser.name}
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div>
                  <h3 className="font-semibold">{mockUser.name}</h3>
                  <p className="text-sm text-gray-600">Traveler since {new Date(mockUser.joinDate).getFullYear()}</p>
                </div>
              </div>
              
              <nav className="space-y-2">
                <button
                  onClick={() => setActiveTab('bookings')}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left ${
                    activeTab === 'bookings' ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <Calendar className="h-4 w-4" />
                  My Bookings
                </button>
                <button
                  onClick={() => setActiveTab('wishlist')}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left ${
                    activeTab === 'wishlist' ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <Heart className="h-4 w-4" />
                  Wishlist
                </button>
                <button
                  onClick={() => setActiveTab('profile')}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left ${
                    activeTab === 'profile' ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <User className="h-4 w-4" />
                  Profile
                </button>
                <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left text-gray-700 hover:bg-gray-50">
                  <CreditCard className="h-4 w-4" />
                  Payment Methods
                </button>
                <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left text-gray-700 hover:bg-gray-50">
                  <Bell className="h-4 w-4" />
                  Notifications
                </button>
                <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left text-gray-700 hover:bg-gray-50">
                  <Settings className="h-4 w-4" />
                  Settings
                </button>
                <hr className="my-2" />
                <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left text-red-600 hover:bg-red-50">
                  <LogOut className="h-4 w-4" />
                  Sign Out
                </button>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {activeTab === 'bookings' && renderBookings()}
            {activeTab === 'wishlist' && renderWishlist()}
            {activeTab === 'profile' && renderProfile()}
          </div>
        </div>
      </div>
    </div>
  );
}
