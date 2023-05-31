import NavbarTable from '../components/NavbarTable';
import ButtonOrange from '../components/ButtonOrange';
const NavbarTableOrders = () => {
  return (
    <div className="flex flex-col sm:flex-row  gap-5  sm:gap-0 items-center sm:justify-between w-full">
      <div className="flex items-center justify-end  gap-4 w-full">
        <NavbarTable>
          <ButtonOrange name="ریفرش" src="/icons/refresh.svg" />
        </NavbarTable>
      </div>
    </div>
  );
};

export default NavbarTableOrders;
