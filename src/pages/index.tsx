import { WatchCategory , AccessoriesCategory , LaptopCategory ,MobileCategory , TabletCategory   } from '@/page/user';
import Slider from '@/page/user/Home/sliderHeader/slider';

export default function Home() {
  return (
    <div>
      <Slider />
     <WatchCategory/>
     <AccessoriesCategory/>
     <TabletCategory/>
     <MobileCategory/>
     <LaptopCategory/>
    </div>
  );
}
Home.getLayout = function PageLayout(page: any) {
  return <> {page}</>;
};
