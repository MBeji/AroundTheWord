'use client';

import { useState } from 'react';
import { Search, MapPin, Calendar, Users, Filter } from 'lucide-react';
import { Button } from './ui/button';

interface SearchFilters {
  destination: string;
  dates: string;
  guests: number;
  category: string;
  priceRange: [number, number];
  duration: string;
}

export function SearchBar() {
  const [filters, setFilters] = useState<SearchFilters>({
    destination: '',
    dates: '',
    guests: 1,
    category: '',
    priceRange: [0, 5000],
    duration: ''
  });
  
  const [showAdvanced, setShowAdvanced] = useState(false);

  const categories = [
    '🏔️ Nature & Adventure',
    '🏙️ City Exploration',
    '🎭 Cultural Immersion',
    '🧘 Wellness & Relax',
    '⚽ Sports & Activities',
    '✨ Luxury Travel',
    '💰 Budget Friendly',
    '👨‍👩‍👧‍👦 Family Adventures'
  ];

  const durations = [
    '1-2 days',
    '3-5 days',
    '1 week',
    '2 weeks',
    '1+ month'
  ];

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
      {/* Basic Search */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
        <div className="relative">
          <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <input
            type="text"
            placeholder="Where to?"
            value={filters.destination}
            onChange={(e) => setFilters({ ...filters, destination: e.target.value })}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        
        <div className="relative">
          <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <input
            type="date"
            value={filters.dates}
            onChange={(e) => setFilters({ ...filters, dates: e.target.value })}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        
        <div className="relative">
          <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <select
            value={filters.guests}
            onChange={(e) => setFilters({ ...filters, guests: parseInt(e.target.value) })}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
              <option key={num} value={num}>{num} guest{num > 1 ? 's' : ''}</option>
            ))}
          </select>
        </div>
        
        <Button className="bg-blue-600 hover:bg-blue-700 py-3">
          <Search className="h-4 w-4 mr-2" />
          Search
        </Button>
      </div>

      {/* Advanced Filters Toggle */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => setShowAdvanced(!showAdvanced)}
          className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900"
        >
          <Filter className="h-4 w-4" />
          Advanced Filters
        </button>
        {(filters.category || filters.duration || filters.priceRange[0] > 0 || filters.priceRange[1] < 5000) && (
          <button
            onClick={() => setFilters({
              ...filters,
              category: '',
              duration: '',
              priceRange: [0, 5000]
            })}
            className="text-sm text-blue-600 hover:text-blue-700"
          >
            Clear Filters
          </button>
        )}
      </div>

      {/* Advanced Filters */}
      {showAdvanced && (
        <div className="mt-4 pt-4 border-t border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Category */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
              <select
                value={filters.category}
                onChange={(e) => setFilters({ ...filters, category: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">All Categories</option>
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            {/* Duration */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Duration</label>
              <select
                value={filters.duration}
                onChange={(e) => setFilters({ ...filters, duration: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Any Duration</option>
                {durations.map(duration => (
                  <option key={duration} value={duration}>{duration}</option>
                ))}
              </select>
            </div>

            {/* Price Range */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Price Range: ${filters.priceRange[0]} - ${filters.priceRange[1]}
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="range"
                  min="0"
                  max="5000"
                  step="100"
                  value={filters.priceRange[0]}
                  onChange={(e) => setFilters({ 
                    ...filters, 
                    priceRange: [parseInt(e.target.value), filters.priceRange[1]] 
                  })}
                  className="flex-1"
                />
                <input
                  type="range"
                  min="0"
                  max="5000"
                  step="100"
                  value={filters.priceRange[1]}
                  onChange={(e) => setFilters({ 
                    ...filters, 
                    priceRange: [filters.priceRange[0], parseInt(e.target.value)] 
                  })}
                  className="flex-1"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
