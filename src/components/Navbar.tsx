'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useSession, signIn, signOut } from 'next-auth/react'
import { Menu, X, Globe, User, PlusCircle, MessageCircle, Search } from 'lucide-react'

export function Navbar() {
  const { data: session, status } = useSession()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Globe className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-gray-900">AroundTheWorld</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/explore" className="text-gray-700 hover:text-primary transition-colors">
              Explore
            </Link>
            <Link href="/itineraries" className="text-gray-700 hover:text-primary transition-colors">
              Itineraries
            </Link>
            <Link href="/packages" className="text-gray-700 hover:text-primary transition-colors">
              Local Packages
            </Link>
            <Link href="/how-it-works" className="text-gray-700 hover:text-primary transition-colors">
              How it Works
            </Link>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search destinations, experiences..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
          </div>

          {/* User Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {status === 'loading' ? (
              <div className="h-8 w-8 bg-gray-200 rounded-full animate-pulse" />
            ) : session ? (
              <>
                <Link href="/create" className="btn-primary flex items-center space-x-2">
                  <PlusCircle className="h-4 w-4" />
                  <span>Create</span>
                </Link>
                <Link href="/messages" className="p-2 text-gray-600 hover:text-primary transition-colors">
                  <MessageCircle className="h-5 w-5" />
                </Link>
                <div className="relative group">
                  <button className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 transition-colors">
                    {session.user?.image ? (
                      <img src={session.user.image} alt="Profile" className="h-8 w-8 rounded-full" />
                    ) : (
                      <User className="h-8 w-8 p-1 bg-gray-200 rounded-full" />
                    )}
                  </button>
                  
                  {/* Dropdown Menu */}
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="py-2">
                      <Link href="/dashboard" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                        Dashboard
                      </Link>
                      <Link href="/creator" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                        Creator Hub
                      </Link>
                      <Link href="/bookings" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                        My Bookings
                      </Link>
                      <Link href="/earnings" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                        Earnings
                      </Link>
                      <Link href="/settings" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                        Settings
                      </Link>
                      <hr className="my-2" />
                      <button
                        onClick={() => signOut()}
                        className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        Sign Out
                      </button>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => signIn()}
                  className="text-gray-700 hover:text-primary transition-colors"
                >
                  Sign In
                </button>
                <button
                  onClick={() => signIn()}
                  className="btn-primary"
                >
                  Sign Up
                </button>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-3 space-y-3">
            {/* Mobile Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search destinations..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            
            {/* Mobile Navigation Links */}
            <div className="space-y-2">
              <Link href="/explore" className="block py-2 text-gray-700 hover:text-primary transition-colors">
                Explore
              </Link>
              <Link href="/itineraries" className="block py-2 text-gray-700 hover:text-primary transition-colors">
                Itineraries
              </Link>
              <Link href="/packages" className="block py-2 text-gray-700 hover:text-primary transition-colors">
                Local Packages
              </Link>
              <Link href="/how-it-works" className="block py-2 text-gray-700 hover:text-primary transition-colors">
                How it Works
              </Link>
            </div>

            {/* Mobile User Actions */}
            <div className="pt-4 border-t">
              {session ? (
                <div className="space-y-2">
                  <Link href="/create" className="block py-2 text-primary font-medium">
                    Create Experience
                  </Link>
                  <Link href="/dashboard" className="block py-2 text-gray-700">
                    Dashboard
                  </Link>
                  <Link href="/creator" className="block py-2 text-gray-700">
                    Creator Hub
                  </Link>
                  <Link href="/bookings" className="block py-2 text-gray-700">
                    My Bookings
                  </Link>
                  <button
                    onClick={() => signOut()}
                    className="block w-full text-left py-2 text-gray-700"
                  >
                    Sign Out
                  </button>
                </div>
              ) : (
                <div className="space-y-2">
                  <button
                    onClick={() => signIn()}
                    className="block w-full text-left py-2 text-gray-700"
                  >
                    Sign In
                  </button>
                  <button
                    onClick={() => signIn()}
                    className="block w-full text-left py-2 text-primary font-medium"
                  >
                    Sign Up
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
