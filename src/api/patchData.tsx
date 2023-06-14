import request from '@/utility/intanceAxios';
const patchData = async ( endpoint:string ,item: any ) => {
  const response = await request.patch(endpoint, item);
  return response.data;
};

export default patchData;