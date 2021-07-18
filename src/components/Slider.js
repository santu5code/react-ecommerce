import Carousel from 'react-bootstrap/Carousel'
import React from "react";
import { Container } from "react-bootstrap";
import Slider1 from "../assets/slider2.jpg";
import Slider2 from "../assets/slider1.jpg";
import Slider3 from "../assets/slider3.jpg";


const Slider = () => {
  return (
    <>
    <Container>
    <Carousel fade >
  <Carousel.Item >
    <img
      className="d-block w-100 slider-image"
      src={Slider1}
      alt="First slide"
    />
    <Carousel.Caption className="text-dark" >
      <h3 >First slide label</h3>
      <p >Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 slider-image"
      src={Slider2}
      alt="Second slide"
    />

    <Carousel.Caption className="text-dark">
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 slider-image"
      src={Slider3}
      alt="Third slide"
    />

    <Carousel.Caption className="text-dark">
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
      </Container>
    </>
  );
};

export default Slider;
