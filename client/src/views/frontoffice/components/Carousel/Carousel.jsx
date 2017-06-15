import React, { Component } from 'react';
import Slider from 'react-slick';
import root from 'window-or-global';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.css';

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.updateDimensions = this.updateDimensions.bind(this);
    this.state = {
      isMobile: true,
    };
  }

  componentDidMount() {
    this.updateDimensions();
    root.addEventListener('resize', this.updateDimensions);
  }

  componentWillUnmount() {
    root.removeEventListener('resize', this.updateDimensions);
  }

  updateDimensions() {
    const width = root.outerWidth;
    this.setState({
      isMobile: width <= 870,
    });
  }

  render() {
    const settings = {
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
      centerMode: true,
    };

    const imgMobile = 'http://placehold.it/870x300';
    const imgDesktop = 'http://placehold.it/1920x376';

    return (
      <div className="carousel clearfix relative">
        <a className="crs-brand" href="/">
            Kondo APP
        </a>
        <div className="crs-inner">
          <Slider {...settings}>
            <a href="/" className="slick-item">
              <img
                className="crs-img img-responsive"
                src={this.state.isMobile ? imgMobile : imgDesktop}
                alt="Lorem ipsum"
              />
            </a>
            <a href="/" className="slick-item">
              <img
                className="crs-img img-responsive"
                src={this.state.isMobile ? imgMobile : imgDesktop}
                alt="Lorem ipsum"
              />
            </a>
            <a href="/" className="slick-item">
              <img
                className="crs-img img-responsive"
                src={this.state.isMobile ? imgMobile : imgDesktop}
                alt="Lorem ipsum"
              />
            </a>
          </Slider>
        </div>
      </div>
    );
  }
}

export default Carousel;
