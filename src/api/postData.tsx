import request from '@/utility/intanceAxios';
const postData = async ( endpoint:string ,item: any ) => {
  const response = await request.post(endpoint, item);
  return response.data;
};

export default postData;
