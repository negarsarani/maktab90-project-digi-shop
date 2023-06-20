import request from '@/utility/intanceAxios';

const getData = async (endpoint: string) => {
  try {
    const response = await request.get(endpoint);
    return response.data   
  } catch (error) {
    return error
  }
};

export default getData;
