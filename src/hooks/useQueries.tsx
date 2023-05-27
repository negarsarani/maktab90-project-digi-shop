import { useQuery , useMutation } from '@tanstack/react-query';
type key = [] | [string] | [string]
const useQueries = (fetchData: () => void, key: []) => {
  const { isLoading, data, error, refetch } = useQuery(key, fetchData, {
    // cacheTime: 5000,
    // staleTime: 5000,
    // refetchOnMount:true,
    // refetchOnWindowFocus: false,
    // refetchInterval:2000,
    // refetchIntervalInBackground:true,
    // enabled: false,
  });
  return [isLoading, data, error, refetch];
};
export default useQueries;
