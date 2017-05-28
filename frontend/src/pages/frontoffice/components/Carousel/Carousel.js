import React, { Component } from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.css';


class Carousel extends Component {
  render() {
    var settings = {
      lazyLoad: 'progressive',
      slidesToShow: 1,
      dots: true,
      arrows: false,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 5000,
      pauseOnHover: false,
      centerPadding: 0,
      centerMode: true
    };
    return (
      <div className="carousel clearfix relative">
        <a className="crs-brand" href="/">
            Kondo APP
        </a>
        <div className="crs-inner">
          <Slider {...settings}>
            <a href="/" className="slick-item">
              <img className="crs-img img-responsive" src="http://placehold.it/1575x675" alt="Lorem ipsum"/>
            </a>
            <a href="/" className="slick-item">
              <img className="crs-img img-responsive" src="http://placehold.it/1575x675" alt="Lorem ipsum"/>
            </a>
            <a href="/" className="slick-item">
              <img className="crs-img img-responsive" src="http://placehold.it/1575x675" alt="Lorem ipsum"/>
            </a>
          </Slider>
        </div>
      </div>
    );
  }
}

export default Carousel;
