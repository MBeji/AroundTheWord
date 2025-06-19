'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Star, MapPin, Clock, Users, Heart, Filter } from 'lucide-react'
import { Button } from '@/components/ui/button'

// Expanded mock data
const mockItineraries = [
  {
    id: '1',
    title: '7-Day Magical Japan Experience',
    destination: 'Tokyo & Kyoto, Japan',
    author: {
      name: 'Yuki Tanaka',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b151db67?w=150',
      verified: true
    },
    price: 1299,
    duration: 7,
    groupSize: 8,
    rating: 4.9,
    reviewCount: 127,
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=500',
    category: 'CULTURE',
    highlights: ['Traditional temples', 'Cherry blossoms', 'Local cuisine', 'Bullet train'],
    difficulty: 'Easy',
    featured: true
  },
  {
    id: '2',
    title: 'Bali Adventure & Wellness Retreat',
    destination: 'Ubud & Canggu, Bali',
    author: {
      name: 'Made Sutrisna',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
      verified: true
    },
    price: 899,
    duration: 10,
    groupSize: 6,
    rating: 4.8,
    reviewCount: 89,
    image: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=500',
    category: 'RELAX',
    highlights: ['Yoga sessions', 'Rice terraces', 'Volcanic hiking', 'Spa treatments'],
    difficulty: 'Moderate',
    featured: true
  },
  {
    id: '3',
    title: 'Swiss Alps Photography Adventure',
    destination: 'Zermatt & Grindelwald, Switzerland',
    author: {
      name: 'Hans Mueller',
      avatar: 'https://images.unsplash.com/photo-1472099607330-df3330a80fd5?w=150',
      verified: true
    },
    price: 1599,
    duration: 5,
    groupSize: 4,
    rating: 5.0,
    reviewCount: 43,
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500',
    category: 'NATURE',
    highlights: ['Mountain photography', 'Cable car rides', 'Alpine lakes', 'Local cuisine'],
    difficulty: 'Hard',
    featured: false
  },
  {
    id: '4',
    title: 'Barcelona Food & Art Tour',
    destination: 'Barcelona, Spain',
    author: {
      name: 'Elena Rodriguez',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
      verified: true
    },
    price: 699,
    duration: 4,
    groupSize: 10,
    rating: 4.7,
    reviewCount: 156,
    image: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=500',
    category: 'CULTURE',
    highlights: ['Tapas tours', 'Gaudí architecture', 'Local markets', 'Flamenco shows'],
    difficulty: 'Easy',
    featured: false
  },
  {
    id: '5',
    title: 'Iceland Northern Lights Adventure',
    destination: 'Reykjavik & South Coast, Iceland',
    author: {
      name: 'Erik Johansson',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150',
      verified: true
    },
    price: 1199,
    duration: 6,
    groupSize: 8,
    rating: 4.9,
    reviewCount: 72,
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500',
    category: 'NATURE',
    highlights: ['Northern lights', 'Blue Lagoon', 'Waterfalls', 'Glacier hiking'],
    difficulty: 'Moderate',
    featured: false
  },
  {
    id: '6',
    title: 'Thailand Island Hopping',
    destination: 'Phuket, Phi Phi, Krabi',
    author: {
      name: 'Siriporn Chai',
      avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150',
      verified: true
    },
    price: 799,
    duration: 8,
    groupSize: 12,
    rating: 4.6,
    reviewCount: 203,
    image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=500',
    category: 'RELAX',
    highlights: ['Beach hopping', 'Snorkeling', 'Thai cooking', 'Sunset cruises'],
    difficulty: 'Easy',
    featured: false
  }
]

export default function ItinerariesPage() {
  const [favorites, setFavorites] = useState<string[]>([])
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sortBy, setSortBy] = useState('featured')

  const toggleFavorite = (id: string) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(fav => fav !== id)
        : [...prev, id]
    )
  }

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'CULTURE', name: 'Culture' },
    { id: 'NATURE', name: 'Nature' },
    { id: 'RELAX', name: 'Relax' },
    { id: 'CITY', name: 'City' },
    { id: 'SPORT', name: 'Sport' },
    { id: 'LUXURY', name: 'Luxury' },
    { id: 'BUDGET', name: 'Budget' },
    { id: 'FAMILY', name: 'Family' }
  ]

  const filteredItineraries = mockItineraries.filter(itinerary => 
    selectedCategory === 'all' || itinerary.category === selectedCategory
  )

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Travel Itineraries
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover carefully crafted travel experiences from our community of expert travelers
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 text-sm bg-white"
            >
              <option value="featured">Featured First</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
              <option value="duration">Duration</option>
            </select>
            
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              More Filters
            </Button>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            {filteredItineraries.length} itineraries found
            {selectedCategory !== 'all' && (
              <span className="ml-2 text-sm">
                in <span className="font-medium">{categories.find(c => c.id === selectedCategory)?.name}</span>
              </span>
            )}
          </p>
        </div>

        {/* Itineraries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItineraries.map((itinerary) => (
            <div key={itinerary.id} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={itinerary.image} 
                  alt={itinerary.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <button
                  onClick={() => toggleFavorite(itinerary.id)}
                  className="absolute top-3 right-3 p-2 bg-white/80 hover:bg-white rounded-full transition-colors"
                >
                  <Heart 
                    className={`h-5 w-5 transition-colors ${
                      favorites.includes(itinerary.id) 
                        ? 'text-red-500 fill-current' 
                        : 'text-gray-600'
                    }`} 
                  />
                </button>
                <div className="absolute bottom-3 left-3 flex gap-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    itinerary.category === 'CULTURE' ? 'bg-purple-100 text-purple-700' :
                    itinerary.category === 'RELAX' ? 'bg-cyan-100 text-cyan-700' :
                    itinerary.category === 'NATURE' ? 'bg-green-100 text-green-700' :
                    'bg-blue-100 text-blue-700'
                  }`}>
                    {itinerary.category}
                  </span>
                  {itinerary.featured && (
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-medium">
                      Featured
                    </span>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <div className="flex items-center text-yellow-400">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="ml-1 text-sm font-medium text-gray-900">
                      {itinerary.rating}
                    </span>
                  </div>
                  <span className="text-sm text-gray-500 ml-1">
                    ({itinerary.reviewCount} reviews)
                  </span>
                  <div className={`ml-auto px-2 py-1 rounded text-xs font-medium ${
                    itinerary.difficulty === 'Easy' ? 'bg-green-100 text-green-700' :
                    itinerary.difficulty === 'Moderate' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {itinerary.difficulty}
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
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

                {/* Highlights */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {itinerary.highlights.slice(0, 3).map((highlight, index) => (
                    <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                      {highlight}
                    </span>
                  ))}
                  {itinerary.highlights.length > 3 && (
                    <span className="text-xs text-gray-400">
                      +{itinerary.highlights.length - 3} more
                    </span>
                  )}
                </div>

                {/* Author */}
                <div className="flex items-center mb-4">
                  <img 
                    src={itinerary.author.avatar} 
                    alt={itinerary.author.name}
                    className="w-8 h-8 rounded-full mr-2"
                  />
                  <div>
                    <div className="flex items-center">
                      <span className="text-sm font-medium text-gray-900">
                        {itinerary.author.name}
                      </span>
                      {itinerary.author.verified && (
                        <div className="ml-1 w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                          <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Price and CTA */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-gray-900">
                      ${itinerary.price}
                    </span>
                    <span className="text-gray-500 text-sm ml-1">per person</span>
                  </div>
                  <Link 
                    href={`/itineraries/${itinerary.id}`}
                    className="btn-primary text-sm px-4 py-2"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Itineraries
          </Button>
        </div>
      </div>
    </div>
  )
}
