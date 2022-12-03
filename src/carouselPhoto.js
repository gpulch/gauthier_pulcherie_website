import React from "react";
import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import "./style/carouselPhoto.css";
import img1 from "./photoSliderImg/1.jpg";
import img2 from "./photoSliderImg/2.jpg";
import img3 from "./photoSliderImg/3.jpg";
import img4 from "./photoSliderImg/4.jpg";
import img5 from "./photoSliderImg/5.jpg";
import img6 from "./photoSliderImg/6.jpg";
// import img7 from "./photoSliderImg/7.jpg";

export default class extends React.Component {
  render() {
    return (
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={100}
        isIntrinsicHeight={true}
        totalSlides={6}
        isPlaying={true}
        interval={5000}
        step={1}
        lockOnWindowScroll={true}
        dragEnabled={true}
        touchEnabled={true}
        dragStep={1}
        visibleSlides={1}
        playDirection={"forward"}
        className={"carousel"}
      >
        <Slider>
          <a href="https://pulchproductions.pb.studio/wedding">
            <Slide index={0}>
              <div>
                <h2>Credit Suisse</h2>
                <h3>Geneve</h3>
                <img className="photo_img" src={img1} alt="img1"></img>
              </div>
            </Slide>

            <Slide index={1}>
              <div>
                <h2>Fog</h2>
                <h3>Lons-le-Saunier</h3>
                <img className="photo_img" src={img2} alt="img2"></img>
              </div>
            </Slide>

            <Slide index={2}>
              <div>
                <img className="photo_img" src={img3} alt="img3"></img>
                <h2>Fisherman Scene</h2>
                <h3>Geneve</h3>
              </div>
            </Slide>

            <Slide index={3}>
              <div>
                <img className="photo_img" src={img4} alt="img4"></img>
                <h2>Sky & Lake</h2>
                <h3>Nyon</h3>
              </div>
            </Slide>

            <Slide index={4}>
              <div>
                <img className="photo_img" src={img5} alt="img5"></img>
                <h2>Perfect Shade</h2>
                <h3>Metz</h3>
              </div>
            </Slide>

            <Slide index={5}>
              <div>
                <img className="photo_img" src={img6} alt="img6"></img>
                <h2>Wedding Dance</h2>
                <h3>Strasbourg</h3>
              </div>
            </Slide>
          </a>
        </Slider>

        {/* <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext> */}
      </CarouselProvider>
    );
  }
}
