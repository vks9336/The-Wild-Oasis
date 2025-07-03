import { useMutation, useQueryClient } from '@tanstack/react-query';
import { logout as logoutApi } from '../../services/apiAuth';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

export function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: logout, isLoading: isLoggingOut } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      toast.success('User Successfully logged out');
      navigate('/login', { replace: true });
      queryClient.removeQueries();
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { logout, isLoggingOut };
}
