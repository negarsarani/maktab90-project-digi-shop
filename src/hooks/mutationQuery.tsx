import { useMutation } from '@tanstack/react-query';

const useMutationQuery = (postData) => {
  const {mutate ,} = useMutation(postData);

  return [mutation.mutate, mutation.isLoading, mutation.isError];
};

export default useMutationQuery;
