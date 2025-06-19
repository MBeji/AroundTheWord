'use client'

import { Search, MessageCircle, CreditCard, Star } from 'lucide-react'

const steps = [
  {
    step: 1,
    title: 'Discover & Connect',
    description: 'Browse unique itineraries and local experiences. Connect with verified travelers and local experts.',
    icon: Search,
    color: 'bg-blue-100 text-blue-600'
  },
  {
    step: 2,
    title: 'Chat & Negotiate',
    description: 'Message providers to customize your experience. Negotiate prices and get personalized recommendations.',
    icon: MessageCircle,
    color: 'bg-green-100 text-green-600'
  },
  {
    step: 3,
    title: 'Book & Pay Securely',
    description: 'Secure your booking with our trusted payment system. Your money is protected until completion.',
    icon: CreditCard,
    color: 'bg-purple-100 text-purple-600'
  },
  {
    step: 4,
    title: 'Experience & Review',
    description: 'Enjoy your authentic travel experience and share your feedback to help the community grow.',
    icon: Star,
    color: 'bg-yellow-100 text-yellow-600'
  }
]

export function HowItWorks() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of travelers who have discovered authentic experiences through our community-driven platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon
            return (
              <div key={step.step} className="relative">
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gray-200 -translate-x-1/2 z-0">
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                      <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                    </div>
                  </div>
                )}

                <div className="text-center relative z-10">
                  <div className={`inline-flex p-4 rounded-full ${step.color} mb-6`}>
                    <IconComponent className="h-8 w-8" />
                  </div>
                  
                  <div className="mb-4">
                    <span className="inline-flex items-center justify-center w-8 h-8 bg-gray-900 text-white rounded-full text-sm font-semibold mb-4">
                      {step.step}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Features Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <div className="text-2xl font-bold text-blue-600 mb-2">100% Secure</div>
            <p className="text-gray-600">Your payments are protected with bank-level security</p>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <div className="text-2xl font-bold text-green-600 mb-2">Verified Experts</div>
            <p className="text-gray-600">All providers are verified with ID and reviews validation</p>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <div className="text-2xl font-bold text-purple-600 mb-2">24/7 Support</div>
            <p className="text-gray-600">Get help whenever you need it during your journey</p>
          </div>
        </div>
      </div>
    </section>
  )
}
