import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import "./style/carouselMusic.css";

export default class extends React.Component {
  render() {
    return (
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={100}
        isIntrinsicHeight={true}
        totalSlides={3}
        isPlaying={true}
        interval={5000}
        infinite={true}
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

          <Slide index={0}>
            <div>
              <a href="https://soundcloud.com/7yearsl8er/that-rain-feat-minh-son?si=4a5a129f60ff45e68847e33a9880b3c1&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing">
                <img
                  className="track_img"
                  src={
                    "https://i1.sndcdn.com/artworks-000422601753-qntsd4-t500x500.jpg"
                  }
                  alt="img"
                ></img>
              </a>
              <h2>That Rain</h2>
            </div>
          </Slide>
          <Slide index={1}>
            <div>
              <a href="https://soundcloud.com/aezu/power-mixtape-ep-1?si=aa58216ab7af4d1eb4d4fd3d4e72d819&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing">
                <img
                  className="track_img"
                  src={
                    "https://i1.sndcdn.com/artworks-000252521525-0nc2nh-t500x500.jpg"
                  }
                  alt="img"
                ></img>
              </a>
              <h2>Power Mixtape</h2>
            </div>
          </Slide>
          <Slide index={2}>
            <div>
              <a href="https://soundcloud.com/justkoos/koos-brosca-turn-it-up-ft-7yearsl8er?si=61a78b0092ba4b4283bf28d7eff2e0cc&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing">
                <img
                  className="track_img"
                  src={
                    "https://i1.sndcdn.com/artworks-000491056512-tiaido-t500x500.jpg"
                  }
                  alt="img"
                ></img>
              </a>
              <h2>Turn It Up</h2>
            </div>
          </Slide>
        </Slider>

        {/* <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext> */}
      </CarouselProvider>
    );
  }
}
