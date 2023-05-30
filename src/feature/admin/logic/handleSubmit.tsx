import postData from '@/api/postData';
import useMutationQuery from '@/hooks/mutationQuery';
import useQueries from '@/hooks/useQueries';

const handleSubmitAdmin = (event: React.FormEvent) => {
  event.preventDefault();

  const [mutatePost, isLoading, isError] = useMutationQuery(
    postData({
      username: 'admin',
      password: 'admin1234',
    })
  );

  mutatePost(postData);
  return console.log([mutate, isLoading, isError]);
};

export default handleSubmitAdmin;
