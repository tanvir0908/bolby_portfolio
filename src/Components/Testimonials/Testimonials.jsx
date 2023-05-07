import React from "react";
import "./Testimonials.css";
import Image1 from "../../Assets/avatar-1.svg";
import Image3 from "../../Assets/avatar-3.svg";

// import Swiper core and required modules
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    id: 1,
    image: Image1,
    title: "John Doe",
    subtitle: "Product designer at Dribble",
    comment:
      "I enjoy working with the theme and learn so much. You       guys make the process fun and interesting. Good luck! 👍",
  },
  {
    id: 2,
    image: Image3,
    title: "John Doe",
    subtitle: "Product designer at Dribble",
    comment:
      "I enjoy working with the theme and learn so much. You       guys make the process fun and interesting. Good luck! 👍",
  },
];

export default function Testimonials() {
  return (
    <>
      <section className="testimonials container section">
        <h2 className="section_title">Clients & Reviews</h2>
        <Swiper
          className="testimonials_container grid"
          // install Swiper modules
          modules={[Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          grabCursor={true}
          pagination={{ clickable: true }}
        >
          {data.map(({ id, image, title, subtitle, comment }) => {
            return (
              <SwiperSlide className="testimonials_item" key={id}>
                <div className="thumb">
                  <img src={image} alt="" />
                </div>
                <h3 className="textimonials_title">{title}</h3>
                <span className="subtitle">{subtitle}</span>
                <div className="comment">{comment}</div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </>
  );
}
