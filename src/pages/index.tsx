import {
  WatchCategory,
  AccessoriesCategory,
  LaptopCategory,
  MobileCategory,
  TabletCategory,
} from '@/page/user';
import Slider from '@/page/user/Home/sliderHeader/slider';

export default function Home() {
  return (
    <div>
      <Slider />
      <div className=" 2xl:container 2xl:mx-auto lg:px-10 px-5 pb-5">
        <MobileCategory />
        <LaptopCategory />
        <TabletCategory />
        <WatchCategory />
        <AccessoriesCategory />
      </div>
    </div>
  );
}
Home.getLayout = function PageLayout(page: any) {
  return <> {page}</>;
};
