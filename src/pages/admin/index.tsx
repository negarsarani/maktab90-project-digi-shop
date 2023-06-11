import React from 'react';

const index = () => {
    return (
        <div>
            I am admin
        </div>
    );
};

export default index;
index.getLayout = function PageLayout(page: any) {
    return <>{page}</>;
  };
  