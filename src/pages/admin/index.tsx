import React from 'react';

const index = () => {
    return (
        <div>
            I am admin HIi
        </div>
    );
};

export default index;
index.getLayout = function PageLayout(page: any) {
    return <>{page}</>;
  };
  