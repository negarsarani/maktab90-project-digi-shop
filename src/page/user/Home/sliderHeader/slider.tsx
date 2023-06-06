import { useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { dataSlider } from '@/data/user/sliderHeader';
import Image from 'next/image';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      loop: true,
      initial: 0,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setLoaded(true);
      },
    },
    [
      (slider) => {
        let timeout: string | number | NodeJS.Timeout | undefined;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on('created', () => {
          slider.container.addEventListener('mouseover', () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener('mouseout', () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on('dragStarted', clearNextTimeout);
        slider.on('animationEnded', nextTimeout);
        slider.on('updated', nextTimeout);
      },
    ]
  );

  return (
    <>
      <div className="navigation-wrapper">
        <div ref={sliderRef} className="keen-slider">
          {dataSlider.map((item, index) => (
            <div key={index} className="keen-slider__slide number-slide1">
              <Image
                src={item.img}
                alt={item.name}
                className="w-full h-full"
                width={100}
                height={100}
              />
            </div>
          ))}
          {loaded && instanceRef.current && (
            <div className="flex absolute lg:bottom-5 lg:right-10 bottom-2 right-5 gap-2">
              <div className=" bg-white rounded-full md:p-2 p-1 flex items-center justify-center ">
                <Arrow
                  onClick={(e: { stopPropagation: () => any }) =>
                    e.stopPropagation() || instanceRef.current?.next()
                  }
                  disabled={
                    currentSlide ===
                    instanceRef.current.track.details.slides.length - 1
                  }
                  left={undefined}
                />
              </div>

              <div className="bg-white rounded-full md:p-2  p-1 flex items-center justify-center ">
                <Arrow
                  left
                  onClick={(e: { stopPropagation: () => any }) =>
                    e.stopPropagation() || instanceRef.current?.prev()
                  }
                  disabled={currentSlide === 0}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

function Arrow(props: {
  disabled: any;
  onClick: React.MouseEventHandler<SVGSVGElement> | undefined;
  left: any;
}) {
  const disabeld = props.disabled ? ' arrow--disabled' : '';
  return (
    <svg
      onClick={props.onClick}
      className={`arrow h-4 w-4 ${
        props.left ? 'arrow--left' : 'arrow--right'
      } ${disabeld}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  );
}
export default Slider;
