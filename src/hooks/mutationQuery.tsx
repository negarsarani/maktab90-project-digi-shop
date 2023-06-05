import { useMutation, UseMutationResult } from '@tanstack/react-query';

const useMutationCustom = (
  fetchData: (x:any) => Promise<any> ,
): UseMutationResult<any> => {
  const mutation: UseMutationResult<any> = useMutation(fetchData);

  return mutation;
};

export default useMutationCustom;
