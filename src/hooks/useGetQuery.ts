import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import { useEffect, useState } from 'react';

const useGetQuery = () => {
  const router = useRouter();
  const [queries, setQueries] = useState<ParsedUrlQuery>({});
  useEffect(() => {
    if (router.query) {
      setQueries(router.query);
    }
  }, [router.query]);
  return queries;
};

export default useGetQuery;
