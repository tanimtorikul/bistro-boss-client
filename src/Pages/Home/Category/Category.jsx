import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";

const Category = () => {
  return (
    <Swiper
      autoplay={{ delay: 1000 }} // 
      slidesPerView={4}
      spaceBetween={30}
      centeredSlides={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        <div className="swiper-image-container">
          <img src={slide1} alt="" />
          <h3 className="text-[32px] uppercase text-center -mt-12 text-white ">Salads</h3>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper-image-container">
          <img src={slide2} alt="" />
          <h3 className="text-[32px] uppercase text-center -mt-12 text-white ">Pizzas</h3>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper-image-container">
          <img src={slide3} alt="" />
          <h3 className="text-[32px] uppercase text-center -mt-12 text-white ">Soups</h3>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper-image-container">
          <img src={slide4} alt="" />
          <h3 className="text-[32px] uppercase text-center -mt-12 text-white ">Desserts</h3>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper-image-container">
          <img src={slide5} alt="" />
          <h3 className="text-[32px] uppercase text-center -mt-12 text-white ">Vegetables</h3>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Category;
