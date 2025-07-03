import { useQuery } from '@tanstack/react-query';
import { getCurrentUser } from '../../services/apiAuth';

export function useUser() {
  const { data: user, isLoading: isLoadingUser } = useQuery({
    queryKey: ['user'],

    queryFn: getCurrentUser,
  });

  const isAuthenticated = !isLoadingUser && user?.role === 'authenticated';

  return {
    user,
    isLoadingUser,
    isAuthenticated,
  };
}
