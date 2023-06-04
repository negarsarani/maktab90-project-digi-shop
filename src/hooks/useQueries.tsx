import { useQuery, useMutation } from '@tanstack/react-query';
type key = [] | [string] | [string];

function useQueries(fetchData: () => void, key: string[]): [boolean, any, boolean, () => void] {
  const { isLoading, data, refetch, isError } = useQuery(key, fetchData, {});
  return [isLoading, data, isError, refetch];
}
export default useQueries;
