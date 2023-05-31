import request from '@/utility/intanceAxios';
const postData = async (item: any) => {
  const response = await request.post('auth/login', item);
  return response.data;
};

export default postData;
