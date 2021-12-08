import React from "react";
import "./ITTechnologies.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ITTechItem from "./ITTechItem";
import { ITTechs } from '../const';


function ITTechnologies() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 2,
  };

  return (
    <div id="ITTechnologies">
      <h2 className="sectionName">IT Technologies</h2>
      <Slider {...settings}>
        {
          ITTechs.map((item) => (
            <ITTechItem technology={item.technology} description={item.description} image={item.image} />
          ))
        }
      </Slider>
    </div>
  );
}

export default ITTechnologies;
