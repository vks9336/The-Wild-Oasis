import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { createEditCabin } from '../../services/apiCabins';

export function useCreateCabin() {
  const queryClient = useQueryClient();

  const { isLoading: isAdding, mutate: createCabin } = useMutation({
    mutationFn: (newCabinData) => createEditCabin(newCabinData),
    onSuccess: () => {
      toast.success('New Cabin created successfully.');
      queryClient.invalidateQueries({
        queryKey: ['cabins'],
      });
    },

    onError: (err) => toast.error(err.message),
  });

  return { isAdding, createCabin };
}
