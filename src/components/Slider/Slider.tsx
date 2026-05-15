import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ReactNode } from "react";
import styles from "./Slider.module.scss";
import "swiper/css/navigation";
import "swiper/css";

type SliderProps = {
  className?: string;
  slides: ReactNode[];
};

const Slider = (props: SliderProps) => {
  const { className, slides } = props;

  return (
    <Swiper
      className={`${styles.slider} ${className ?? ""}`}
      slidesPerView={1.2}
      spaceBetween={20}
      centeredSlides
      navigation
      modules={[Navigation]}
    >
      {slides.map((slide, index) => (
        <SwiperSlide className={styles.swiperSlide} key={`slide-${index}`}>
          <div className={styles.slideInner}>{slide}</div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
