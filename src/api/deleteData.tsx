import request from '@/utility/intanceAxios';

const deleteData = async (endpoint: string) => {
  const response = await request.delete(endpoint);
  
  return response?.data
};

export default deleteData;
