import { ReactNode } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

interface props {
  children: ReactNode;
  className?: string;
}
const Slider = ({ children }: props) => {
  return (
    <Swiper 
      slidesPerView={1}
      spaceBetween={0}
      className="swiper-wrapper"
      breakpoints={{
        670: {
          slidesPerView: 2,
          spaceBetween: 0,
        },
        928: {
          slidesPerView: 3,
          spaceBetween: 0,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 0,
        },
        1210: {
          slidesPerView: 4,
          spaceBetween: 0,
        },
      }}
    >
      {children}
    </Swiper>
  );
}

export default Slider;
