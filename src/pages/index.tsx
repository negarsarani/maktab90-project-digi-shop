import { WatchCategory } from '@/page/user';
import Slider from '@/page/user/Home/sliderHeader/slider';

export default function Home() {
  return (
    <div>
      <Slider />
     <WatchCategory/>
    </div>
  );
}
Home.getLayout = function PageLayout(page: any) {
  return <> {page}</>;
};
