'use client'

import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    location: 'New York, USA',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b151db67?w=150',
    rating: 5,
    text: 'AroundTheWorld connected me with an amazing local guide in Thailand. The experience was so authentic and personalized - something I could never get from a traditional tour company.',
    experience: '2-Week Thailand Adventure',
    savings: '$400'
  },
  {
    id: 2,
    name: 'Marcus Chen',
    location: 'London, UK',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
    rating: 5,
    text: 'As a solo traveler, I was nervous about exploring Iceland alone. The itinerary I found here was perfect, and the local recommendations made all the difference.',
    experience: 'Iceland Solo Journey',
    savings: '$300'
  },
  {
    id: 3,
    name: 'Elena Rodriguez',
    location: 'Barcelona, Spain',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
    rating: 5,
    text: "I've been sharing my travel expertise on this platform for a year now. It's amazing to help fellow travelers while earning extra income from my passion.",
    experience: 'Local Expert Provider',
    earnings: '$2,400'
  }
]

export function Testimonials() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Community Says
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of travelers who have discovered authentic experiences and local experts
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-xl shadow-md p-6 relative">
              <Quote className="absolute top-4 right-4 h-8 w-8 text-gray-200" />
              
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>

              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-700 mb-4 italic">
                "{testimonial.text}"
              </p>

              <div className="border-t pt-4">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600">{testimonial.experience}</span>
                  {testimonial.savings && (
                    <span className="text-green-600 font-medium">
                      Saved {testimonial.savings}
                    </span>
                  )}
                  {testimonial.earnings && (
                    <span className="text-blue-600 font-medium">
                      Earned {testimonial.earnings}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">4.9/5</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-600 mb-2">98%</div>
            <div className="text-gray-600">Customer Satisfaction</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-600 mb-2">50K+</div>
            <div className="text-gray-600">Happy Travelers</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
            <div className="text-gray-600">Customer Support</div>
          </div>
        </div>
      </div>
    </section>
  )
}
