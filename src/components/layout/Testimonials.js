import React from "react";
import "./Testimonials.css";
import MainTitle from "../UI/MainTitle";
import Wave from "../UI/Wave";
import Card from "../UI/Card";
import { FaStar, FaRegStar } from "react-icons/fa";
import avatar1 from "../../assets/Avatars/avatar-01.png";
import avatar2 from "../../assets/Avatars/avatar-02.png";
import avatar3 from "../../assets/Avatars/avatar-03.png";

const testimonials = [
  {
    image: avatar1,
    name: "Amaya Bouvet",
  },
  {
    image: avatar2,
    name: "Owen Bonilla",
  },
  {
    image: avatar3,
    name: "John Doe",
  },
  {
    image: avatar2,
    name: "Devan Gillespie",
  },
  {
    image: avatar3,
    name: "Taylor Farrell",
  },
  {
    image: avatar1,
    name: "Adriana Landry",
  },
];

const Testimonials = () => {
  return (
    <div className="testimonials" id="testimonials">
      <MainTitle title="Testimonials" />
      <Card className="container">
        {testimonials.map((testimonial, index) => (
          <div className="box" key={index}>
            <div className="image">
              <img src={testimonial.image} alt={testimonial.name} />
            </div>
            <h3>{testimonial.name}</h3>
            <div className="rate">
              <FaStar className="solid" />
              <FaStar className="solid" />
              <FaStar className="solid" />
              <FaStar className="solid" />
              <FaRegStar className="regular" />
            </div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
          </div>
        ))}
      </Card>
      <Wave fill="#011936" />
    </div>
  );
};

export default Testimonials;
