import request from '@/utility/intanceAxios';

const getData = async (endpoint: string) => {
  const response = await request.get(endpoint);
  console.log(response);
  
  return response.data
};

export default getData;
