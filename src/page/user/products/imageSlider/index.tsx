import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper';
import MainSlider from './slider/MainSlider';
import ThumbnailSlider from './slider/ThumbnailSlider';

export default function Index() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="w-full">
      <MainSlider thumbsSwiper={thumbsSwiper} />
      <ThumbnailSlider setThumbsSwiper={setThumbsSwiper} />
    </div>
  );
}
