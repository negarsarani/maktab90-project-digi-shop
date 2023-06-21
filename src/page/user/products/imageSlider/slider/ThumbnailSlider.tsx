// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper';
interface props {
  setThumbsSwiper: React.Dispatch<React.SetStateAction<null>>;
  images: [];
}
const ThumbnailSlider = ({ setThumbsSwiper, images }: props) => {
  console.log(images);
  
  return (
    <div className="py-5">
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {images?.map((item) => (
          <SwiperSlide key={item}>
            <div className="bg-zinc-300 p-[.35rem] rounded-md">
              <img
                className="rounded-md"
                src={`http://localhost:8000/images/products/images/${item}`}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ThumbnailSlider;
