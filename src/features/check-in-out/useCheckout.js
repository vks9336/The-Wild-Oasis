import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateBooking } from '../../services/apiBookings';
import toast from 'react-hot-toast';
import { getToday } from '../../utils/helpers';

export function useCheckout() {
  const queryClient = useQueryClient();

  const { mutate: checkout, isLoading: isCheckingOut } = useMutation({
    mutationFn: ({ bookingId }) => {
      updateBooking(bookingId, {
        status: 'checked-out',
        endDate: getToday(),
      });
      queryClient.invalidateQueries({
        queryKey: ['bookings'],
      });
    },

    onSuccess: (data) => {
      toast.success(`Booking #${data.id} successfully checked out`);
      queryClient.invalidateQueries({ active: true });
    },

    onError: () => {
      toast.error(`There was an error while checking out`);
    },
  });

  return { checkout, isCheckingOut };
}
