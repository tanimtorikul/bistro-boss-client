import SectionTitle from "../../../components/sectionTitle/sectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className="my-20">
      <SectionTitle
        subHeading={"What Our Clients say"}
        heading={"Testimonials"}
      ></SectionTitle>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="md:m-24 flex flex-col items-center">
              <Rating
                className="mb-12"
                style={{ maxWidth: 180, color: "#CD9003" }}
                value={review.rating}
                readOnly
              />

              <FaQuoteLeft className="w-8 md:w-[100px] h-[100px] mb-[40px]" />

              <p>{review.details}</p>
              <h3 className="text-lg md:text-2xl text-[#CD9003] font-medium uppercase mt-4">
                {review.name}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
