import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper';
import Image from 'next/image';
import { ImageMagnifier } from '@/page/user/shared';

interface props {
  thumbsSwiper: any;
  images: [];
}
const MainSlider = ({ thumbsSwiper, images }: props) => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <div className="relative  ">
      <div className="relative">
        <button
          className="bg-zinc-400 bg-opacity-50 z-10 p-2 rounded-full absolute top-1/2 transform -translate-y-1/2 right-5"
          ref={navigationPrevRef}
        >
          <Image
            src={'/icons/user/arrowright.svg'}
            alt="قبل"
            width={20}
            height={20}
          />
        </button>
        <button
          className="bg-zinc-400 bg-opacity-50 z-10 p-2 rounded-full absolute top-1/2 transform -translate-y-1/2 left-5"
          ref={navigationNextRef}
        >
          <Image
            src={'/icons/user/arrowleft.svg'}
            alt="بعد"
            width={20}
            height={20}
          />
        </button>

        <Swiper
          spaceBetween={10}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2"
        >
          {images.map((item) => (
            <SwiperSlide key={item}>
              <div className=" bg-white rounded-lg ">
                <div className="bg-white p-4 rounded-lg ">
                  <div>
                    <div className="relative">
                      <ImageMagnifier
                        src={`http://localhost:8000/images/products/images/${item}`}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default MainSlider;
