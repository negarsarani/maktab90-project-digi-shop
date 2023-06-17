import  {  ReactNode } from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
interface props {
    children:ReactNode 
    className:string
}
const Slider = ({children , className}:props) => {
    const [sliderRef] = useKeenSlider({
        loop: true,
        rtl: true,
        slides: {
          perView: 3,
          spacing: 10,
        },
      })
    
      return (
        <div ref={sliderRef} className={`keen-slider ${className}`}>
          {/* <div className="keen-slider__slide number-slide1">1</div>
          <div className="keen-slider__slide number-slide2">2</div>
          <div className="keen-slider__slide number-slide3">3</div>
          <div className="keen-slider__slide number-slide4">4</div>
          <div className="keen-slider__slide number-slide5">5</div>
          <div className="keen-slider__slide number-slide6">6</div> */}
          {children}
        </div>
      )
};

export default Slider;