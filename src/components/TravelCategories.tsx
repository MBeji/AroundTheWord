'use client'

import { Mountain, Building, Waves, TreePine, Users, Gamepad2, Sparkles } from 'lucide-react'
import Link from 'next/link'

const categories = [
  {
    id: 'NATURE',
    name: 'Nature & Adventure',
    icon: TreePine,
    description: 'Hiking, wildlife, national parks',
    color: 'bg-green-500',
    count: '2.5K+ experiences'
  },
  {
    id: 'CITY',
    name: 'City Exploration',
    icon: Building,
    description: 'Urban adventures, landmarks, nightlife',
    color: 'bg-blue-500',
    count: '3.2K+ experiences'
  },
  {
    id: 'CULTURE',
    name: 'Cultural Immersion',
    icon: Users,
    description: 'Local traditions, festivals, art',
    color: 'bg-purple-500',
    count: '1.8K+ experiences'
  },
  {
    id: 'RELAX',
    name: 'Wellness & Relax',
    icon: Waves,
    description: 'Spas, beaches, yoga retreats',
    color: 'bg-cyan-500',
    count: '1.4K+ experiences'
  },
  {
    id: 'SPORT',
    name: 'Sports & Activities',
    icon: Gamepad2,
    description: 'Surfing, skiing, extreme sports',
    color: 'bg-orange-500',
    count: '900+ experiences'
  },
  {
    id: 'LUXURY',
    name: 'Luxury Travel',
    icon: Sparkles,
    description: 'Premium experiences, fine dining',
    color: 'bg-yellow-500',
    count: '750+ experiences'
  },
  {
    id: 'BUDGET',
    name: 'Budget Friendly',
    icon: Mountain,
    description: 'Backpacking, hostels, local food',
    color: 'bg-gray-500',
    count: '2.1K+ experiences'
  },
  {
    id: 'FAMILY',
    name: 'Family Adventures',
    icon: Users,
    description: 'Family-friendly activities',
    color: 'bg-pink-500',
    count: '1.2K+ experiences'
  }
]

export function TravelCategories() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Explore by Category
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find the perfect travel experience that matches your interests and style
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => {
            const IconComponent = category.icon
            return (
              <Link
                key={category.id}
                href={`/explore?category=${category.id}`}
                className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 p-6"
              >
                <div className="flex flex-col items-center text-center">
                  <div className={`${category.color} p-4 rounded-full mb-4 group-hover:scale-110 transition-transform`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {category.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    {category.description}
                  </p>
                  <span className="text-xs text-gray-500 font-medium">
                    {category.count}
                  </span>
                </div>
              </Link>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Link href="/explore" className="btn-primary">
            View All Categories
          </Link>
        </div>
      </div>
    </section>
  )
}
