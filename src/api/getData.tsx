import axios from 'axios';
import React from 'react';

const getData = async (endpoint: string) => {
  const response = await axios.get(`http://localhost:8000/api/${endpoint}`);
  return response.data;
};

export default getData;
