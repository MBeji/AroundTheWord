'use client';

import { useState } from 'react';
import Image from 'next/image';
import { 
  Plus, 
  Edit, 
  Eye, 
  Trash2, 
  Calendar, 
  MapPin, 
  Star, 
  DollarSign,
  Users,
  TrendingUp,
  MessageCircle,
  BarChart3
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const mockCreatorData = {
  totalEarnings: 12450,
  thisMonthEarnings: 2890,
  totalBookings: 47,
  averageRating: 4.8,
  totalReviews: 38,
  activeItineraries: 5
};

const mockItineraries = [
  {
    id: '1',
    title: 'Magical Japan: Tokyo to Kyoto Adventure',
    image: '/api/placeholder/300/200',
    location: 'Tokyo & Kyoto, Japan',
    price: 1299,
    duration: '7 days',
    rating: 4.9,
    bookings: 15,
    revenue: 19485,
    status: 'active',
    lastBooked: '2025-06-15'
  },
  {
    id: '2',
    title: 'Hidden Temples & Local Cuisine',
    image: '/api/placeholder/300/200',
    location: 'Kyoto, Japan',
    price: 849,
    duration: '4 days',
    rating: 4.7,
    bookings: 12,
    revenue: 10188,
    status: 'active',
    lastBooked: '2025-06-10'
  },
  {
    id: '3',
    title: 'Tokyo Nightlife & Food Tour',
    image: '/api/placeholder/300/200',
    location: 'Tokyo, Japan',
    price: 299,
    duration: '1 day',
    rating: 4.8,
    bookings: 32,
    revenue: 9568,
    status: 'active',
    lastBooked: '2025-06-18'
  },
  {
    id: '4',
    title: 'Mount Fuji Hiking Experience',
    image: '/api/placeholder/300/200',
    location: 'Mount Fuji, Japan',
    price: 599,
    duration: '2 days',
    rating: 4.6,
    bookings: 8,
    revenue: 4792,
    status: 'draft',
    lastBooked: null
  }
];

export default function CreatorDashboardPage() {
  const [activeTab, setActiveTab] = useState('overview');

  const renderOverview = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Creator Dashboard</h2>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Plus className="h-4 w-4 mr-2" />
          Create New Itinerary
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-600">Total Earnings</span>
            <DollarSign className="h-5 w-5 text-green-600" />
          </div>
          <div className="text-2xl font-bold text-gray-900">${mockCreatorData.totalEarnings}</div>
          <div className="text-sm text-green-600 mt-1">+12% from last month</div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-600">This Month</span>
            <TrendingUp className="h-5 w-5 text-blue-600" />
          </div>
          <div className="text-2xl font-bold text-gray-900">${mockCreatorData.thisMonthEarnings}</div>
          <div className="text-sm text-blue-600 mt-1">+8% vs last month</div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-600">Total Bookings</span>
            <Users className="h-5 w-5 text-purple-600" />
          </div>
          <div className="text-2xl font-bold text-gray-900">{mockCreatorData.totalBookings}</div>
          <div className="text-sm text-purple-600 mt-1">5 this week</div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-600">Average Rating</span>
            <Star className="h-5 w-5 text-yellow-500" />
          </div>
          <div className="text-2xl font-bold text-gray-900">{mockCreatorData.averageRating}</div>
          <div className="text-sm text-gray-600 mt-1">{mockCreatorData.totalReviews} reviews</div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
        <div className="space-y-4">
          <div className="flex items-center gap-4 p-4 bg-green-50 border border-green-200 rounded-lg">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
              <DollarSign className="h-5 w-5 text-green-600" />
            </div>
            <div className="flex-1">
              <p className="font-medium">New booking received</p>
              <p className="text-sm text-gray-600">Tokyo Nightlife & Food Tour - $299</p>
            </div>
            <span className="text-sm text-gray-500">2 hours ago</span>
          </div>
          
          <div className="flex items-center gap-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <Star className="h-5 w-5 text-blue-600" />
            </div>
            <div className="flex-1">
              <p className="font-medium">New 5-star review</p>
              <p className="text-sm text-gray-600">Japan Adventure - "Amazing experience!"</p>
            </div>
            <span className="text-sm text-gray-500">1 day ago</span>
          </div>
          
          <div className="flex items-center gap-4 p-4 bg-purple-50 border border-purple-200 rounded-lg">
            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
              <MessageCircle className="h-5 w-5 text-purple-600" />
            </div>
            <div className="flex-1">
              <p className="font-medium">New message from traveler</p>
              <p className="text-sm text-gray-600">Question about Kyoto itinerary</p>
            </div>
            <span className="text-sm text-gray-500">2 days ago</span>
          </div>
        </div>
      </div>
    </div>
  );

  const renderItineraries = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">My Itineraries</h2>
        <div className="flex gap-3">
          <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm">
            <option>All statuses</option>
            <option>Active</option>
            <option>Draft</option>
            <option>Paused</option>
          </select>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Plus className="h-4 w-4 mr-2" />
            New Itinerary
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {mockItineraries.map((itinerary) => (
          <div key={itinerary.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden">
            <div className="relative h-48">
              <Image
                src={itinerary.image}
                alt={itinerary.title}
                fill
                className="object-cover"
              />
              <div className="absolute top-3 right-3">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  itinerary.status === 'active' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-gray-100 text-gray-800'
                }`}>
                  {itinerary.status.charAt(0).toUpperCase() + itinerary.status.slice(1)}
                </span>
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="font-semibold text-lg mb-2">{itinerary.title}</h3>
              
              <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-4">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  {itinerary.location}
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  {itinerary.duration}
                </div>
                <div className="flex items-center">
                  <DollarSign className="h-4 w-4 mr-1" />
                  ${itinerary.price}
                </div>
                <div className="flex items-center">
                  <Star className="h-4 w-4 mr-1 fill-yellow-400 text-yellow-400" />
                  {itinerary.rating}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4 p-3 bg-gray-50 rounded-lg">
                <div>
                  <span className="text-sm text-gray-600">Bookings</span>
                  <div className="font-semibold">{itinerary.bookings}</div>
                </div>
                <div>
                  <span className="text-sm text-gray-600">Revenue</span>
                  <div className="font-semibold">${itinerary.revenue}</div>
                </div>
              </div>

              {itinerary.lastBooked && (
                <p className="text-sm text-gray-600 mb-4">
                  Last booked: {new Date(itinerary.lastBooked).toLocaleDateString()}
                </p>
              )}

              <div className="flex gap-2">
                <Button size="sm" variant="outline" className="flex-1">
                  <Eye className="h-4 w-4 mr-1" />
                  View
                </Button>
                <Button size="sm" variant="outline" className="flex-1">
                  <Edit className="h-4 w-4 mr-1" />
                  Edit
                </Button>
                <Button size="sm" variant="outline" className="px-3">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderAnalytics = () => (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Analytics</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h3 className="font-semibold mb-4">Revenue Trends</h3>
          <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
            <div className="text-center text-gray-500">
              <BarChart3 className="h-12 w-12 mx-auto mb-2" />
              <p>Revenue chart would go here</p>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h3 className="font-semibold mb-4">Booking Performance</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <span className="text-sm font-medium">Tokyo Nightlife Tour</span>
              <div className="text-right">
                <div className="font-semibold">32 bookings</div>
                <div className="text-xs text-gray-600">68% conversion</div>
              </div>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <span className="text-sm font-medium">Japan Adventure</span>
              <div className="text-right">
                <div className="font-semibold">15 bookings</div>
                <div className="text-xs text-gray-600">45% conversion</div>
              </div>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <span className="text-sm font-medium">Kyoto Temples</span>
              <div className="text-right">
                <div className="font-semibold">12 bookings</div>
                <div className="text-xs text-gray-600">52% conversion</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <h3 className="font-semibold mb-4">Monthly Performance</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { month: 'Mar 2025', bookings: 12, revenue: 3450 },
            { month: 'Apr 2025', bookings: 18, revenue: 4920 },
            { month: 'May 2025', bookings: 15, revenue: 4180 },
            { month: 'Jun 2025', bookings: 22, revenue: 6290 }
          ].map((data, index) => (
            <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-lg font-bold">{data.month}</div>
              <div className="text-sm text-gray-600 mt-1">{data.bookings} bookings</div>
              <div className="text-sm font-medium mt-1">${data.revenue}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Creator Hub</h1>
          <p className="text-gray-600 mt-1">Manage your itineraries and track your success</p>
        </div>

        {/* Navigation */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="flex space-x-8">
            <button
              onClick={() => setActiveTab('overview')}
              className={`py-2 border-b-2 font-medium text-sm ${
                activeTab === 'overview'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('itineraries')}
              className={`py-2 border-b-2 font-medium text-sm ${
                activeTab === 'itineraries'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              My Itineraries
            </button>
            <button
              onClick={() => setActiveTab('analytics')}
              className={`py-2 border-b-2 font-medium text-sm ${
                activeTab === 'analytics'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Analytics
            </button>
          </nav>
        </div>

        {/* Content */}
        {activeTab === 'overview' && renderOverview()}
        {activeTab === 'itineraries' && renderItineraries()}
        {activeTab === 'analytics' && renderAnalytics()}
      </div>
    </div>
  );
}
