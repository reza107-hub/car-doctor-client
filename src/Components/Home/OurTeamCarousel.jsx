/* eslint-disable react/prop-types */
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

// eslint-disable-next-line react/prop-types
export default function OurTeamCarousel({ teams }) {
  // eslint-disable-next-line react/prop-types

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {teams.map((team) => (
          <SwiperSlide key={team._id}>
            <div className="card  p-6 rounded-md border border-solid border-[#E8E8E8]">
              <figure className="bg-[#F3F3F3]">
                <img className="h-36" src={team.img} alt="" />
              </figure>
              <div className="card-body items-center mt-5 p-0">
                <h2 className="card-title font-bold">{team.title}</h2>
                <p className="text-primary font-bold">{team.expert}</p>
                <div className="flex items-center justify-center gap-3">
                  <BsFacebook className="text-[#395185]"/> <AiFillTwitterCircle className="text-[#55ACEE]"/> <AiFillLinkedin className="text-[#0A66C2]"/>{" "}
                  <FaInstagram className="instagram"/>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
