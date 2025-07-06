import { useQuery } from '@tanstack/react-query';

import { useSearchParams } from 'react-router-dom';
import { getStaysAfterDate } from '../../services/apiBookings';
import { getToday } from '../../utils/helpers';

export function useRecentStays() {
  const [searchParams] = useSearchParams();

  const numDays = !searchParams.get('last')
    ? 7
    : Number(searchParams.get('last'));

  const queryDate = getToday({ daysAgo: numDays });

  const {
    isLoading: isLoadingStays,
    data: stays,
    error,
  } = useQuery({
    queryFn: () => getStaysAfterDate(queryDate),
    queryKey: ['stays', `last-${numDays}`],
  });

  const confirmedStays = stays?.filter(
    (stay) => stay.status === 'checked-in' || stay.status === 'checked-out',
  );

  return { isLoadingStays, stays, confirmedStays, error, numDays };
}
