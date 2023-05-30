import React from 'react';

const orders = () => {
  return <div>orders</div>;
};

export default orders;
orders.getLayout = function PageLayout(page: any) {
  return <> {page}</>;
};
