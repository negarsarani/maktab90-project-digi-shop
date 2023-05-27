import React from 'react';

const home = () => {
    return (
        <div className='bg-violet-200'>
            sss
        </div>
    );
};

export default home;
home.getLayout = function PageLayout(page: any) {
    return <> {page}</>;
  };