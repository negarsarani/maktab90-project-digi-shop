import { Linkouter } from '@/components';
import { LayoutChildrenAdminType } from '@/types/type';
import { Bars3Icon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { useRouter } from 'next/router';

const HeaderAdmin = ({
  setMobileMenuOpen,
  mobileMenuOpen,
}: LayoutChildrenAdminType) => {
  const { asPath } = useRouter();
  const slicePath = asPath.split('/')[2];
  console.log(slicePath);
  var parts = slicePath?.split('?')[0].split(' ');
  var firstWord = parts?.[parts?.length - 1];
  console.log(firstWord);

  let spanTitle: string;
  if (firstWord) {
    firstWord == 'prices&inventory'
      ? (spanTitle = 'مدیریت موجودی و قیمت ها')
      : firstWord == 'orders'
      ? (spanTitle = ' مدیریت سفارش ها')
      : firstWord == 'products'
      ? (spanTitle = ' مدیریت کالا ها')
      : firstWord == 'users'
      ? (spanTitle = 'مدیریت کاربران')
      : (spanTitle = 'روت نامشخص');
  } else {
    spanTitle = 'صفحه اصلی';
  }
  return (
    <div className=" grid grid-cols-2 sm:grid-cols-3 ">
      <nav className="  py-3 flex gap-2 px-2 lg:px-5" aria-label="Global">
        <div className=" items-center justify-center gap-2 hidden lg:flex">
          <Image
            src="/icons/user.svg"
            className="lg:flex hidden"
            width={40}
            height={40}
            alt="ادمین"
          />

          <span>ادمین عزیز خوش آمدید 👋</span>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon
              className={`h-6 w-6 ${mobileMenuOpen ? 'hidden' : 'flex'}`}
              aria-hidden="true"
              onClick={() => setMobileMenuOpen(true)}
            />
          </button>
        </div>
        <div className="flex lg:flex-1">
          <Linkouter href="/admin" className="-m-1.5 p-1.5">
            <Image
              className="h-8 w-auto lg:hidden"
              src={'/logo light.svg'}
              alt={'دیجی شاپ'}
              width={30}
              height={30}
            />
          </Linkouter>
        </div>
      </nav>
      <span className=" flex-1 items-center flex justify-center font-semibold">
        {spanTitle}{' '}
      </span>
    </div>
  );
};

export default HeaderAdmin;
