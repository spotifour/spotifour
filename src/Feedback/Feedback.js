import React from "react";
import "./feedback.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import MemberFeedback from "./MemberFeedback";
import { MemberFeedbacks } from '../const';

function Feedback() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 2,
  };

  return (
    <div id='feedback'>
      <h2 className="sectionName">Feedback</h2>
      <Slider {...settings}>
        {
          MemberFeedbacks.map((item) => (
            <MemberFeedback name={item.name} feedback={item.feedback} image={item.image} />
          ))
        }
      </Slider>
    </div>
  );
}

export default Feedback;
