import Slider from "@/page/user/sliderHeader/slider";

export default function Home() {
  return (
    <div>
      hi im index
      <Slider/>
    </div>
  )
}
Home.getLayout = function PageLayout(page: any) {
  return <> {page}</>;
};