import { useQuery } from '@tanstack/react-query';
import { getCats } from './api/cats';

export const useCats = () => {
  const { isLoading, error, data, refetch, isRefetching } = useQuery(
    [`/cats/`],
    () => getCats(),
    {
      refetchOnWindowFocus: false,
      onError: (e) => console.error(`Error getting cats: ${e}`),
    },
  );

  return { isLoading, error, data: data, refetch, isRefetching };
};
