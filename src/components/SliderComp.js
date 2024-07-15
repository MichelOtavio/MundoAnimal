import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FullWidthBgImage } from "./FullWidthBgImage";
import { FiArrowRightCircle, FiArrowLeftCircle } from "react-icons/fi";
import { useResponsive } from "../useResponsive";
import { useRef } from "react";

export const SliderComp = ({
  data,
  label,
  heading,
  subheading,
  slideNum,
  autoplay,
  autoplaySpeed
}) => {
  const { screenType } = useResponsive();
  const sliderRef = useRef();
  const settings = {
    arrows: false,
    dots: true,
    swipeToSlide: true,
    infinite: true,
    autoplay: autoplay,
    autoplaySpeed: autoplaySpeed,
    slidesToShow: screenType === "MOBILE" ? 2 : slideNum,
    slidesToScroll: screenType === "MOBILE" ? 2 : slideNum
  };

  return (
    <>
      <div style={{ marginBottom: 20, marginLeft: 10 }}>
        <h1><center>{heading}</center></h1>
        <p><h2><center>{subheading}</center></h2></p><br></br>
      </div>
      <div className="container">
        <div className="wrapper">
          {screenType !== "MOBILE" && (
            <div onClick={() => sliderRef.current.slickPrev()} className="prev">
              <FiArrowLeftCircle style={{ fontSize: 24 }} />
            </div>
          )}

          <Slider {...settings} ref={sliderRef}>
            {data?.length > 0 &&
              data?.map((item, index) => (
                <a
                  href="https://blog-gray-zeta.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FullWidthBgImage
                    image={item.image}
                    text={item.title}
                    label={label}
                    borderRadius={"10px"}
                    height={"300px"}
                  />
                </a>
              ))}
          </Slider>
          {screenType !== "MOBILE" && (
            <div onClick={() => sliderRef.current.slickNext()} className="next">
              <FiArrowRightCircle style={{ fontSize: 24 }} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};
