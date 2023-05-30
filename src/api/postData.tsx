import axios from 'axios';
const postData = async (item:any) => {
  const response = await axios.post(`http://localhost:8000/api/auth/login` , item);
  return response.data;
};

export default postData;
