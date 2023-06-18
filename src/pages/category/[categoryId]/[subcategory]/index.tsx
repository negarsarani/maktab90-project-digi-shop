import React from 'react';
interface props {
  id:string
}
const Index = ({id}:props) => {
    return (
        <div>
            {id}
        </div>
    );
};

export default Index;
export   const getServerSideProps = async ({params}) => {
    const id = params.subcategory
  return  {props:{
    id: id
  }}
    
}
Index.getLayout = function PageLayout(page: any) {
  return <> {page}</>;
};