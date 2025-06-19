'use client'

import { Star, MapPin, Clock, Users, Heart } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

// Mock data - in a real app, this would come from your API
const featuredItineraries = [
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
    difficulty: 'Easy'
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
    difficulty: 'Moderate'
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
    difficulty: 'Hard'
  }
]

export function FeaturedItineraries() {
  const [favorites, setFavorites] = useState<string[]>([])

  const toggleFavorite = (id: string) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(fav => fav !== id)
        : [...prev, id]
    )
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Experiences
            </h2>
            <p className="text-lg text-gray-600">
              Hand-picked by our community of travel experts
            </p>
          </div>
          <Link href="/itineraries" className="hidden md:block btn-secondary">
            View All
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredItineraries.map((itinerary) => (
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
                <div className="absolute bottom-3 left-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    itinerary.category === 'CULTURE' ? 'bg-purple-100 text-purple-700' :
                    itinerary.category === 'RELAX' ? 'bg-cyan-100 text-cyan-700' :
                    'bg-green-100 text-green-700'
                  }`}>
                    {itinerary.category}
                  </span>
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

        <div className="text-center mt-12 md:hidden">
          <Link href="/itineraries" className="btn-secondary">
            View All Experiences
          </Link>
        </div>
      </div>
    </section>
  )
}
