import categoryData, { orderedCategory } from '@/data/shared';
import Slider from '@/page/user/Home/sliderHeader/slider';

export default function Home() {
  console.log( categoryData());
  console.log( orderedCategory().then (res => console.log(res)
  ));
  
 
  return (
    <div>
      <Slider />
    </div>
  );
}
Home.getLayout = function PageLayout(page: any) {
  return <> {page}</>;
};
