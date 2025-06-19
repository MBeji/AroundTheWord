'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Calendar, CreditCard, Lock, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface BookingFlowProps {
  itinerary: {
    id: string;
    title: string;
    price: number;
    image: string;
  };
  isOpen: boolean;
  onClose: () => void;
}

export function BookingFlow({ itinerary, isOpen, onClose }: BookingFlowProps) {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    selectedDate: '',
    guests: 1,
    totalPrice: itinerary.price,
    paymentMethod: '',
    cardNumber: '',
    cardExpiry: '',
    cardCvc: '',
    billingName: '',
    billingEmail: '',
    specialRequests: ''
  });

  const [isProcessing, setIsProcessing] = useState(false);

  const handleDateSelect = (date: string) => {
    setBookingData({
      ...bookingData,
      selectedDate: date,
      totalPrice: itinerary.price * bookingData.guests
    });
  };

  const handleGuestChange = (guests: number) => {
    setBookingData({
      ...bookingData,
      guests,
      totalPrice: itinerary.price * guests
    });
  };

  const handlePayment = async () => {
    setIsProcessing(true);
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      router.push('/booking/confirmation');
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">Book Your Adventure</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 text-2xl"
            >
              ×
            </button>
          </div>
          
          {/* Progress Indicator */}
          <div className="flex items-center mt-4 space-x-4">
            <div className={`flex items-center ${step >= 1 ? 'text-blue-600' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                step >= 1 ? 'bg-blue-600 text-white' : 'bg-gray-200'
              }`}>
                1
              </div>
              <span className="ml-2 text-sm">Details</span>
            </div>
            <div className="flex-1 h-px bg-gray-200"></div>
            <div className={`flex items-center ${step >= 2 ? 'text-blue-600' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                step >= 2 ? 'bg-blue-600 text-white' : 'bg-gray-200'
              }`}>
                2
              </div>
              <span className="ml-2 text-sm">Payment</span>
            </div>
            <div className="flex-1 h-px bg-gray-200"></div>
            <div className={`flex items-center ${step >= 3 ? 'text-blue-600' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                step >= 3 ? 'bg-blue-600 text-white' : 'bg-gray-200'
              }`}>
                3
              </div>
              <span className="ml-2 text-sm">Confirm</span>
            </div>
          </div>
        </div>

        <div className="p-6">
          {/* Step 1: Booking Details */}
          {step === 1 && (
            <div className="space-y-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-lg">{itinerary.title}</h3>
                <p className="text-gray-600">${itinerary.price} per person</p>
              </div>

              <div>
                <label htmlFor="select-date" className="block text-sm font-medium text-gray-700 mb-2">
                  Select Date
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <input
                    id="select-date"
                    type="date"
                    value={bookingData.selectedDate}
                    onChange={(e) => handleDateSelect(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="select-guests" className="block text-sm font-medium text-gray-700 mb-2">
                  Number of Guests
                </label>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <select
                    id="select-guests"
                    value={bookingData.guests}
                    onChange={(e) => handleGuestChange(parseInt(e.target.value))}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                      <option key={num} value={num}>{num} guest{num > 1 ? 's' : ''}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="special-requests" className="block text-sm font-medium text-gray-700 mb-2">
                  Special Requests (Optional)
                </label>
                <textarea
                  id="special-requests"
                  value={bookingData.specialRequests}
                  onChange={(e) => setBookingData({ ...bookingData, specialRequests: e.target.value })}
                  rows={3}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Dietary restrictions, accessibility needs, etc."
                />
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex justify-between items-center font-semibold">
                  <span>Total: ${bookingData.totalPrice}</span>
                  <span className="text-sm text-gray-600">
                    ({bookingData.guests} × ${itinerary.price})
                  </span>
                </div>
              </div>

              <Button 
                onClick={() => setStep(2)}
                disabled={!bookingData.selectedDate}
                className="w-full bg-blue-600 hover:bg-blue-700"
              >
                Continue to Payment
              </Button>
            </div>
          )}

          {/* Step 2: Payment */}
          {step === 2 && (
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="billing-name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    id="billing-name"
                    type="text"
                    value={bookingData.billingName}
                    onChange={(e) => setBookingData({ ...bookingData, billingName: e.target.value })}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="billing-email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    id="billing-email"
                    type="email"
                    value={bookingData.billingEmail}
                    onChange={(e) => setBookingData({ ...bookingData, billingEmail: e.target.value })}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="card-number" className="block text-sm font-medium text-gray-700 mb-2">
                  Card Number
                </label>
                <div className="relative">
                  <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <input
                    id="card-number"
                    type="text"
                    placeholder="1234 5678 9012 3456"
                    value={bookingData.cardNumber}
                    onChange={(e) => setBookingData({ ...bookingData, cardNumber: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="card-expiry" className="block text-sm font-medium text-gray-700 mb-2">
                    Expiry Date
                  </label>
                  <input
                    id="card-expiry"
                    type="text"
                    placeholder="MM/YY"
                    value={bookingData.cardExpiry}
                    onChange={(e) => setBookingData({ ...bookingData, cardExpiry: e.target.value })}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="card-cvc" className="block text-sm font-medium text-gray-700 mb-2">
                    CVC
                  </label>
                  <input
                    id="card-cvc"
                    type="text"
                    placeholder="123"
                    value={bookingData.cardCvc}
                    onChange={(e) => setBookingData({ ...bookingData, cardCvc: e.target.value })}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center text-sm text-gray-600 mb-2">
                  <Lock className="h-4 w-4 mr-2" />
                  Your payment information is secure and encrypted
                </div>
                <div className="flex justify-between">
                  <span>Subtotal ({bookingData.guests} guests)</span>
                  <span>${bookingData.totalPrice}</span>
                </div>
                <div className="flex justify-between">
                  <span>Service fee</span>
                  <span>${Math.round(bookingData.totalPrice * 0.03)}</span>
                </div>
                <div className="border-t pt-2 flex justify-between font-semibold">
                  <span>Total</span>
                  <span>${bookingData.totalPrice + Math.round(bookingData.totalPrice * 0.03)}</span>
                </div>
              </div>

              <div className="flex gap-3">
                <Button 
                  onClick={() => setStep(1)}
                  variant="outline" 
                  className="flex-1"
                >
                  Back
                </Button>
                <Button 
                  onClick={handlePayment}
                  disabled={isProcessing || !bookingData.billingName || !bookingData.cardNumber}
                  className="flex-1 bg-blue-600 hover:bg-blue-700"
                >
                  {isProcessing ? 'Processing...' : 'Complete Booking'}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
