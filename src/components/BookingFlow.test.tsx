import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import { useRouter } from 'next/navigation';
import { BookingFlow } from './BookingFlow';

// Mock next/navigation
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

const sampleItinerary = {
  id: 'paris-tour-123',
  title: 'Romantic Paris Getaway',
  price: 299,
  image: '/images/paris.jpg',
};

describe('BookingFlow Component', () => {
  let mockPush: jest.Mock;
  let mockOnClose: jest.Mock;

  beforeEach(() => {
    mockPush = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({ push: mockPush });
    mockOnClose = jest.fn();
    // Clear any previous timers
    jest.clearAllTimers();
  });

  // Use fake timers for tests involving setTimeout
  afterEach(() => {
    jest.useRealTimers();
  });

  test('does not render when isOpen is false', () => {
    render(<BookingFlow itinerary={sampleItinerary} isOpen={false} onClose={mockOnClose} />);
    expect(screen.queryByText('Book Your Adventure')).not.toBeInTheDocument();
  });

  test('renders correctly when isOpen is true', () => {
    render(<BookingFlow itinerary={sampleItinerary} isOpen={true} onClose={mockOnClose} />);
    expect(screen.getByText('Book Your Adventure')).toBeInTheDocument();
    expect(screen.getByText(sampleItinerary.title)).toBeInTheDocument();
    expect(screen.getByText(`$${sampleItinerary.price} per person`)).toBeInTheDocument();
    // Check if "Details" step is active (e.g. by checking class or a more specific attribute if available)
    // For simplicity, checking if the first step's content is visible
    expect(screen.getByLabelText('Select Date')).toBeInTheDocument();
  });

  test('date selection and guest change update price', () => {
    render(<BookingFlow itinerary={sampleItinerary} isOpen={true} onClose={mockOnClose} />);

    const dateInput = screen.getByLabelText('Select Date');
    fireEvent.change(dateInput, { target: { value: '2024-12-25' } });

    const guestSelect = screen.getByLabelText('Number of Guests');
    fireEvent.change(guestSelect, { target: { value: '2' } });

    expect(screen.getByText(`Total: $${sampleItinerary.price * 2}`)).toBeInTheDocument();
    expect(screen.getByText(`(${2} × $${sampleItinerary.price})`)).toBeInTheDocument();
  });

  test('"Continue to Payment" button is disabled if date is not selected', () => {
    render(<BookingFlow itinerary={sampleItinerary} isOpen={true} onClose={mockOnClose} />);
    const continueButton = screen.getByRole('button', { name: /continue to payment/i });
    expect(continueButton).toBeDisabled();

    const dateInput = screen.getByLabelText('Select Date');
    fireEvent.change(dateInput, { target: { value: '2024-12-25' } });
    expect(continueButton).toBeEnabled();
  });

  test('navigates to Payment step', () => {
    render(<BookingFlow itinerary={sampleItinerary} isOpen={true} onClose={mockOnClose} />);
    const dateInput = screen.getByLabelText('Select Date');
    fireEvent.change(dateInput, { target: { value: '2024-12-25' } });

    const continueButton = screen.getByRole('button', { name: /continue to payment/i });
    fireEvent.click(continueButton);

    // Check if "Payment" step is active. The component uses a div with text "Payment" and specific classes.
    // We'll look for form fields unique to payment step.
    expect(screen.getByLabelText('Card Number')).toBeInTheDocument();
    expect(screen.getByLabelText('Full Name')).toBeInTheDocument(); // Assuming this is the billing name field.
  });

  test('navigates back from Payment to Details step', () => {
    render(<BookingFlow itinerary={sampleItinerary} isOpen={true} onClose={mockOnClose} />);
    // Go to payment step
    const dateInput = screen.getByLabelText('Select Date');
    fireEvent.change(dateInput, { target: { value: '2024-12-25' } });
    fireEvent.click(screen.getByRole('button', { name: /continue to payment/i }));

    // Now on payment step, click "Back"
    const backButton = screen.getByRole('button', { name: /back/i });
    fireEvent.click(backButton);

    // Check if "Details" step is active again
    expect(screen.getByLabelText('Select Date')).toBeInTheDocument();
  });

  test('payment submission', async () => {
    jest.useFakeTimers(); // Use fake timers for setTimeout
    render(<BookingFlow itinerary={sampleItinerary} isOpen={true} onClose={mockOnClose} />);

    // Navigate to payment
    fireEvent.change(screen.getByLabelText('Select Date'), { target: { value: '2024-12-25' } });
    fireEvent.click(screen.getByRole('button', { name: /continue to payment/i }));

    // Fill payment form
    fireEvent.change(screen.getByLabelText('Full Name'), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText('Card Number'), { target: { value: '1234567812345678' } });
    // Add other required fields if any based on component logic for enabling the button
    fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByLabelText('Expiry Date'), { target: { value: '12/25' } });
    fireEvent.change(screen.getByLabelText('CVC'), { target: { value: '123' } });


    const completeBookingButton = screen.getByRole('button', { name: /complete booking/i });
    expect(completeBookingButton).toBeEnabled(); // Ensure it's enabled before click
    fireEvent.click(completeBookingButton);

    expect(screen.getByText('Processing...')).toBeInTheDocument();

    // Fast-forward timers
    act(() => {
      jest.advanceTimersByTime(2000);
    });

    await waitFor(() => {
      expect(mockPush).toHaveBeenCalledWith('/booking/confirmation');
    });
  });

  test('"Complete Booking" button is disabled if required payment fields are not filled', () => {
    render(<BookingFlow itinerary={sampleItinerary} isOpen={true} onClose={mockOnClose} />);
    // Navigate to payment
    fireEvent.change(screen.getByLabelText('Select Date'), { target: { value: '2024-12-25' } });
    fireEvent.click(screen.getByRole('button', { name: /continue to payment/i }));

    const completeBookingButton = screen.getByRole('button', { name: /complete booking/i });
    expect(completeBookingButton).toBeDisabled();

    fireEvent.change(screen.getByLabelText('Full Name'), { target: { value: 'Jane Doe' } });
    expect(completeBookingButton).toBeDisabled(); // Still disabled as card number is missing

    fireEvent.change(screen.getByLabelText('Card Number'), { target: { value: '1111222233334444' } });
     // Add other required fields if any based on component logic for enabling the button
    fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'jane@example.com' } });
    fireEvent.change(screen.getByLabelText('Expiry Date'), { target: { value: '11/26' } });
    fireEvent.change(screen.getByLabelText('CVC'), { target: { value: '321' } });

    // According to the component, only billingName and cardNumber are checked for disabled state.
    // Let's re-verify the component's disabled logic for the "Complete Booking" button.
    // The component has: disabled={isProcessing || !bookingData.billingName || !bookingData.cardNumber}
    // So filling billingName and cardNumber should enable it.
    expect(completeBookingButton).toBeEnabled();
  });

  test('onClose callback is called when close button is clicked', () => {
    render(<BookingFlow itinerary={sampleItinerary} isOpen={true} onClose={mockOnClose} />);
    // The close button is a '×' character
    const closeButton = screen.getByText('×');
    fireEvent.click(closeButton);
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  test('Special requests input updates state', () => {
    render(<BookingFlow itinerary={sampleItinerary} isOpen={true} onClose={mockOnClose} />);

    // Ensure we are on Step 1
    expect(screen.getByLabelText('Select Date')).toBeInTheDocument(); // A proxy for being on step 1

    const specialRequestsTextarea = screen.getByLabelText('Special Requests (Optional)');
    expect(specialRequestsTextarea).toBeInTheDocument();

    const testMessage = 'Please ensure a gluten-free meal.';
    fireEvent.change(specialRequestsTextarea, { target: { value: testMessage } });

    // @ts-ignore
    expect(specialRequestsTextarea.value).toBe(testMessage);
  });
});
