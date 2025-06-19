'use client'

import { useState } from 'react'
import { MapPin, Star, Clock, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SearchBar } from '@/components/SearchBar'

// Mock data - replace with real API calls
const mockItineraries = [
  {
    id: '1',
    title: '10-Day Japan Cultural Journey',
    destination: 'Tokyo, Kyoto, Osaka',
    price: 1299,
    duration: 10,
    groupSize: 8,
    rating: 4.9,
    reviewCount: 127,
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=500',
    category: 'CULTURE',
    author: {
      name: 'Yuki Tanaka',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b151db67?w=150',
      verified: true
    }
  },
  {
    id: '2', 
    title: 'Bali Wellness Retreat',
    destination: 'Ubud, Canggu',
    price: 899,
    duration: 7,
    groupSize: 6,
    rating: 4.8,
    reviewCount: 89,
    image: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=500',
    category: 'RELAX',
    author: {
      name: 'Made Sutrisna',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
      verified: true
    }
  },
  // Add more mock data as needed
]

export default function ExplorePage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [priceRange, setPriceRange] = useState([0, 5000])

  const categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'NATURE', name: 'Nature & Adventure' },
    { id: 'CITY', name: 'City Exploration' },
    { id: 'CULTURE', name: 'Cultural Immersion' },
    { id: 'RELAX', name: 'Wellness & Relax' },
    { id: 'SPORT', name: 'Sports & Activities' },
    { id: 'LUXURY', name: 'Luxury Travel' },
    { id: 'BUDGET', name: 'Budget Friendly' },
    { id: 'FAMILY', name: 'Family Adventures' }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Explore Travel Experiences
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover unique itineraries and local experiences crafted by our community of travelers
            </p>
          </div>          {/* Search Bar */}
          <div className="max-w-4xl mx-auto">
            <SearchBar />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-4">
              <h3 className="font-semibold text-gray-900 mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-primary text-primary-foreground'
                        : 'hover:bg-gray-100 text-gray-700'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>

              <div className="mt-6">
                <h3 className="font-semibold text-gray-900 mb-4">Price Range</h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="5000"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-600">
                {mockItineraries.length} experiences found
              </p>
              <select className="border border-gray-300 rounded-md px-3 py-2 text-sm">
                <option>Sort by: Relevance</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Rating</option>
                <option>Duration</option>
              </select>
            </div>

            {/* Results Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockItineraries.map((itinerary) => (
                <div key={itinerary.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                  <div className="aspect-video relative overflow-hidden">
                    <img 
                      src={itinerary.image} 
                      alt={itinerary.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2 py-1 bg-white/90 text-xs font-medium rounded-full">
                        {itinerary.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <div className="flex items-center mb-2">
                      <div className="flex items-center text-yellow-400">
                        <Star className="h-4 w-4 fill-current" />
                        <span className="ml-1 text-sm font-medium text-gray-900">
                          {itinerary.rating}
                        </span>
                      </div>
                      <span className="text-sm text-gray-500 ml-1">
                        ({itinerary.reviewCount})
                      </span>
                    </div>

                    <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                      {itinerary.title}
                    </h3>

                    <div className="flex items-center text-gray-500 text-sm mb-3">
                      <MapPin className="h-4 w-4 mr-1" />
                      {itinerary.destination}
                    </div>

                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {itinerary.duration} days
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        Max {itinerary.groupSize}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-lg font-bold text-gray-900">
                          ${itinerary.price}
                        </span>
                        <span className="text-gray-500 text-sm ml-1">per person</span>
                      </div>
                      <Button size="sm">View Details</Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Load More Experiences
              </Button>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
