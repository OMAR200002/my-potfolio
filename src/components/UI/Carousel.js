import "./Carousel.css";
import { useState } from "react";
import Slider from "react-slick";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

const images = [img1, img2, img3, img4];

function Carousel() {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaAngleRight size={40} />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaAngleLeft size={40} />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <div className="carousel">
      <Slider {...settings}>
        {images.map((img, idx) => (
          <div
            className={idx === imageIndex ? "slide activeSlide" : "slide"}
            key={idx}
          >
            <div className="image-container">
              <img src={img} alt={img} />
              <button>Learn More</button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Carousel;
