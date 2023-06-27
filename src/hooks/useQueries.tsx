import { useQuery } from '@tanstack/react-query';

function useQueries(fetchData: () => void, key: string[] | []): [boolean, any, boolean, () => void] {
  const { isLoading, data, refetch, isError   } = useQuery(key, fetchData, {});
  return [isLoading, data, isError, refetch];
}
export default useQueries;
