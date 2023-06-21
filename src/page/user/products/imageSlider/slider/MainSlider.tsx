import { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper';
import Image from 'next/image';
import imageZoom from '@/page/user/shared/zoom';
interface props{
  thumbsSwiper:string
  images:[]
}
const MainSlider = ({ thumbsSwiper , images }:props) => {
  const [zoomedIn, setZoomedIn] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const imgRef = useRef(null);
  const lensRef = useRef(null);
  const resultRef = useRef(null);
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  useEffect(() => {
    if (zoomedIn) {
      imageZoom(imgRef.current, lensRef.current, resultRef.current);
    }
  }, [zoomedIn]);

  const handleMouseMove = (e:any) => {
    setZoomedIn(true);
    setPosition({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
  };

  const handleMouseLeave = () => {
    setZoomedIn(false);
  };

  return (
    <div className="relative bg-red-300 ">
      <div className="relative">
        <button
          className="bg-zinc-400 bg-opacity-5 z-20 p-2  rounded-full absolute left-0"
          ref={navigationPrevRef}
        >
          <Image
            src={'/icons/user/arrowleft.svg'}
            alt=""
            width={20}
            height={20}
          />{' '}
        </button>
        <button
          className="bg-zinc-400 bg-opacity-50 z-20  p-2 rounded-full absolute right-0"
          ref={navigationNextRef}
        >
          <Image
            src={'/icons/user/arrowright.svg'}
            alt="بعدی"
            width={20}
            height={20}
          />
        </button>
        <button
          className="bg-zinc-400 bg-opacity-5 z-20 p-2  rounded-full absolute left-0"
          ref={navigationPrevRef}
        >
          <Image
            src={'/icons/user/arrowleft.svg'}
            alt="بعدی"
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
          {images?.map(item => {
          return   <SwiperSlide key={item.name}>
            <div className="bg-zinc-300 p-3 rounded-md ">
              <div>
                <div
                  className="relative"
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                >
                  <img
                    ref={imgRef}
                    src={'https://swiperjs.com/demos/images/nature-1.jpg'}
                    alt="Girl"
                  />
                  <div
                    ref={lensRef}
                    className="img-zoom-lens"
                    style={{
                      position: 'absolute',
                      width: '40px',
                      height: '40px',
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          })}
         
        </Swiper>
      </div>
      {zoomedIn && (
        <div
          ref={resultRef}
          className="absolute z-40 sm:top-0  sm:right-full rounded-md p-10 bg-white w-[300px] h-[300px] sm:mr-5"
        >
          <div ref={resultRef} className=""></div>
        </div>
      )}
    </div>
  );
};

export default MainSlider;
