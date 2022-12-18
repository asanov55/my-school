import { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import school from './images/school.webp';
import highSchool from './images/school2.jpg';
import ildar from './images/ildar.webp';
export const MySwiper = () => {
  return (
    <div>
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ dynamicBullets: true }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        spaceBetween={30}
      >
        <SwiperSlide>
          <img src={school} width={1400} height={500} alt="slide1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={highSchool} width={1400} height={500} alt="slide2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ildar} width={1400} height={500} alt="slide3" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
