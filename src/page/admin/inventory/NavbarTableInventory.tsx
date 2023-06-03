
import {NavbarTable , ButtonOrange} from '@/page/admin';
const NavbarTableProduct = () => {
  return (
    <div className="flex flex-col sm:flex-row  gap-5  sm:gap-0 items-center sm:justify-between w-full">
      <div className="flex items-center justify-end  gap-4 w-full">
        <NavbarTable>
          <ButtonOrange name="ذخیره" src="/icons/save.svg" />
        </NavbarTable>
      </div>
    </div>
  );
};

export default NavbarTableProduct;
