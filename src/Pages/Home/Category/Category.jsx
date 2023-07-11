// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <section>
      <SectionTitle
        heading={"Order Online"}
        subHeading={"From 11.00am to 10.00pm"}
      ></SectionTitle>
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper mb-24"
      >
        <SwiperSlide>
          <img src={slide1} className="w-full" alt="" />
          <h3 className="text-4xl uppercase text-center -mt-16 text-white">
            Salad
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={slide2} className="w-full" alt="" />
          <h3 className="text-4xl uppercase text-center -mt-16 text-white">
            Pizza
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={slide3} className="w-full" alt="" />
          <h3 className="text-4xl uppercase text-center -mt-16 text-white">
            Shoop
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={slide4} className="w-full" alt="" />
          <h3 className="text-4xl uppercase text-center -mt-16 text-white">
            Desert
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={slide5} className="w-full" alt="" />
          <h3 className="text-4xl uppercase text-center -mt-16 text-white">
            Salad
          </h3>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
