import { useRef, useState } from 'react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import MainSlider from './slider/mainslider/MainSlider';
import ThumbnailSlider from './slider/ThumbnailSlider';
interface props {
  images: [];
}
export default function Index({ images }: props) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="w-full lg:col-span-3 md:col-span-4 col-span-full
      ">
      <MainSlider thumbsSwiper={thumbsSwiper} images={images} />
      <ThumbnailSlider setThumbsSwiper={setThumbsSwiper} images={images} />
    </div>
  );
}
