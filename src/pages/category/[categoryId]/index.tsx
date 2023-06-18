import React from 'react';
interface props {
    id:string
}
const Index = ({id}:props) => {
    return (
        <div>
            {`category ${id}` }
        </div>
    );
};

export default Index;
export   const getServerSideProps = async ({params}) => {
    const id = params.categoryId
  return  {props:{
    id: id
  }} 
}