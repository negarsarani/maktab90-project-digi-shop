import React from 'react';

import NavbarTable from '../shared/NavbarTable';
import ButtonOrange from '../shared/ButtonOrange';
const NavbarTableProduct = () => {
  return (
    <div className="flex flex-col sm:flex-row  gap-5  sm:gap-0 items-center sm:justify-between w-full">
      <div className="flex items-center justify-end  gap-4 w-full">
        <NavbarTable>
          <ButtonOrange name="افزودن کالا" src="/icons/plus.svg" />
        </NavbarTable>
      </div>
    </div>
  );
};

export default NavbarTableProduct;
