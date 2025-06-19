'use client'

import { useState } from 'react'
import { Search, MapPin, Calendar, Users } from 'lucide-react'
import Link from 'next/link'

export function Hero() {
  const [searchQuery, setSearchQuery] = useState('')
  const [destination, setDestination] = useState('')
  const [dates, setDates] = useState('')
  const [travelers, setTravelers] = useState('1')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle search logic here
    console.log({ searchQuery, destination, dates, travelers })
  }

  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-purple-700 text-white">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
        }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Discover Authentic Travel
            <span className="block text-yellow-400">Experiences</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90 animate-fade-in">
            Connect with local experts and seasoned travelers for unique, personalized adventures around the world
          </p>
        </div>

        {/* Search Form */}
        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSearch} className="bg-white rounded-2xl shadow-2xl p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {/* Destination */}
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Where to?
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="text"
                    placeholder="Destination"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                  />
                </div>
              </div>

              {/* Dates */}
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  When?
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="date"
                    value={dates}
                    onChange={(e) => setDates(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                  />
                </div>
              </div>

              {/* Travelers */}
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Travelers
                </label>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <select
                    value={travelers}
                    onChange={(e) => setTravelers(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                      <option key={num} value={num}>{num} {num === 1 ? 'Traveler' : 'Travelers'}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Search Button */}
              <div className="flex items-end">
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <Search className="h-5 w-5" />
                  <span>Search</span>
                </button>
              </div>
            </div>

            {/* Quick Search Tags */}
            <div className="flex flex-wrap gap-2">
              <span className="text-sm text-gray-600">Popular:</span>
              {['Paris', 'Tokyo', 'Bali', 'New York', 'Iceland'].map((tag) => (
                <button
                  key={tag}
                  onClick={() => setDestination(tag)}
                  className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full text-sm transition-colors"
                >
                  {tag}
                </button>
              ))}
            </div>
          </form>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center">
          <div className="animate-fade-in">
            <div className="text-3xl md:text-4xl font-bold mb-2">10K+</div>
            <div className="text-sm md:text-base opacity-80">Itineraries</div>
          </div>
          <div className="animate-fade-in">
            <div className="text-3xl md:text-4xl font-bold mb-2">50K+</div>
            <div className="text-sm md:text-base opacity-80">Travelers</div>
          </div>
          <div className="animate-fade-in">
            <div className="text-3xl md:text-4xl font-bold mb-2">200+</div>
            <div className="text-sm md:text-base opacity-80">Countries</div>
          </div>
          <div className="animate-fade-in">
            <div className="text-3xl md:text-4xl font-bold mb-2">4.8★</div>
            <div className="text-sm md:text-base opacity-80">Average Rating</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <Link href="/explore" className="btn-primary bg-white text-blue-600 hover:bg-gray-100 text-center">
            Explore Experiences
          </Link>
          <Link href="/create" className="btn-secondary border-white text-white hover:bg-white hover:text-blue-600 text-center">
            Share Your Experience
          </Link>
        </div>
      </div>
    </section>
  )
}
