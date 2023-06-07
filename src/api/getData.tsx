import request from '@/utility/intanceAxios';

const getData = async (endpoint: string) => {
  const response = await request.get(endpoint);
  
  return response.data
};

export default getData;
