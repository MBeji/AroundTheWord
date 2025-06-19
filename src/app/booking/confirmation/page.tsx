'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { 
  CheckCircle, 
  Calendar, 
  MapPin, 
  Users, 
  CreditCard,
  Shield,
  Download,
  Share2
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function BookingConfirmationPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  // Mock booking data
  const bookingData = {
    bookingId: 'ATW-2025-001234',
    itinerary: {
      title: 'Magical Japan: Tokyo to Kyoto Adventure',
      image: '/api/placeholder/400/250',
      duration: '7 days',
      location: 'Tokyo & Kyoto, Japan',
      dates: '2025-04-10 to 2025-04-17'
    },
    creator: {
      name: 'Yuki Tanaka',
      avatar: '/api/placeholder/50/50',
      phone: '+81-90-1234-5678',
      email: 'yuki.tanaka@email.com'
    },
    booking: {
      guests: 2,
      totalPrice: 2598,
      bookingFee: 78,
      finalTotal: 2676,
      paymentMethod: '**** 4242',
      status: 'confirmed'
    },
    meetingPoint: {
      name: 'Tokyo Station Central Exit',
      address: '1 Chome Marunouchi, Chiyoda City, Tokyo 100-0005, Japan',
      time: '09:00 AM JST'
    }
  };

  const handleDownloadItinerary = () => {
    // Mock download functionality
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      alert('Itinerary PDF downloaded!');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Success Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Booking Confirmed!</h1>
          <p className="text-lg text-gray-600">
            Your amazing adventure awaits. We've sent confirmation details to your email.
          </p>
        </div>

        {/* Booking Details Card */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden mb-6">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Booking Details</h2>
              <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                Confirmed
              </span>
            </div>
            <div className="text-sm text-gray-600">
              Booking ID: <span className="font-mono font-medium">{bookingData.bookingId}</span>
            </div>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Itinerary Info */}
              <div>
                <h3 className="font-semibold mb-4">Your Adventure</h3>
                <div className="flex gap-4">
                  <div className="relative w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src={bookingData.itinerary.image}
                      alt={bookingData.itinerary.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900 mb-2">
                      {bookingData.itinerary.title}
                    </h4>
                    <div className="space-y-1 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        {bookingData.itinerary.dates}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2" />
                        {bookingData.itinerary.location}
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-2" />
                        {bookingData.booking.guests} guests
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment Info */}
              <div>
                <h3 className="font-semibold mb-4">Payment Summary</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Itinerary ({bookingData.booking.guests} guests)</span>
                    <span>${bookingData.booking.totalPrice}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Service fee</span>
                    <span>${bookingData.booking.bookingFee}</span>
                  </div>
                  <div className="border-t pt-2 flex justify-between font-semibold">
                    <span>Total paid</span>
                    <span>${bookingData.booking.finalTotal}</span>
                  </div>
                  <div className="flex items-center text-gray-600 mt-2">
                    <CreditCard className="h-4 w-4 mr-2" />
                    <span>Paid with {bookingData.booking.paymentMethod}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Creator Contact Card */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
          <h3 className="font-semibold mb-4">Your Guide</h3>
          <div className="flex items-center gap-4 mb-4">
            <Image
              src={bookingData.creator.avatar}
              alt={bookingData.creator.name}
              width={50}
              height={50}
              className="rounded-full"
            />
            <div>
              <h4 className="font-medium">{bookingData.creator.name}</h4>
              <p className="text-sm text-gray-600">Your local expert guide</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-gray-600">Phone:</span>
              <br />
              <span className="font-medium">{bookingData.creator.phone}</span>
            </div>
            <div>
              <span className="text-gray-600">Email:</span>
              <br />
              <span className="font-medium">{bookingData.creator.email}</span>
            </div>
          </div>
        </div>

        {/* Meeting Point Card */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
          <h3 className="font-semibold mb-4">Meeting Point</h3>
          <div className="space-y-3">
            <div>
              <h4 className="font-medium text-gray-900">{bookingData.meetingPoint.name}</h4>
              <p className="text-sm text-gray-600">{bookingData.meetingPoint.address}</p>
            </div>
            <div className="flex items-center text-sm">
              <Calendar className="h-4 w-4 mr-2 text-gray-400" />
              <span className="text-gray-600">
                Meet on {bookingData.itinerary.dates.split(' to ')[0]} at {bookingData.meetingPoint.time}
              </span>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
              <p className="text-sm text-blue-800">
                <Shield className="h-4 w-4 inline mr-1" />
                Your guide will contact you 24 hours before the trip with final details.
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Button 
            onClick={handleDownloadItinerary}
            disabled={isLoading}
            className="flex items-center justify-center"
          >
            <Download className="h-4 w-4 mr-2" />
            {isLoading ? 'Generating...' : 'Download Itinerary'}
          </Button>
          <Button variant="outline" className="flex items-center justify-center">
            <Share2 className="h-4 w-4 mr-2" />
            Share Trip
          </Button>
          <Button 
            variant="outline" 
            onClick={() => router.push('/dashboard')}
            className="flex items-center justify-center"
          >
            View My Bookings
          </Button>
        </div>

        {/* Important Information */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
          <h3 className="font-semibold text-amber-900 mb-3">Important Information</h3>
          <ul className="space-y-2 text-sm text-amber-800">
            <li>• Please arrive at the meeting point 15 minutes early</li>
            <li>• Bring a valid passport and comfortable walking shoes</li>
            <li>• Weather-appropriate clothing is recommended</li>
            <li>• Free cancellation up to 48 hours before the trip</li>
            <li>• Emergency contact: +1-800-ATW-HELP (24/7)</li>
          </ul>
        </div>

        {/* Next Steps */}
        <div className="text-center mt-8">
          <h3 className="font-semibold mb-4">What's Next?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                <span className="font-semibold text-blue-600">1</span>
              </div>
              <p className="text-gray-600">Your guide will contact you within 24 hours</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                <span className="font-semibold text-blue-600">2</span>
              </div>
              <p className="text-gray-600">Pack your bags and get ready for adventure</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                <span className="font-semibold text-blue-600">3</span>
              </div>
              <p className="text-gray-600">Meet at the designated location and enjoy!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
