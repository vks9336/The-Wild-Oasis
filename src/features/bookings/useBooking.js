import { useQuery } from '@tanstack/react-query';
import { getBooking } from '../../services/apiBookings';
import { useParams } from 'react-router-dom';

export function useBooking() {
  const { bookingId } = useParams();

  const {
    isLoading,
    data: booking,
    error,
  } = useQuery({
    queryKey: ['bookings'],
    queryFn: () => getBooking(bookingId),
    retry: false,
  });

  if (error) {
    console.log(error);
    throw new Error('Booking data is not fetched.');
  }

  return { booking, isLoading };
}
