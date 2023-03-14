import { picketsType } from "@/types";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box } from "@chakra-ui/react";

const Carousel = ({ pickets }: picketsType) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    draggable: false,
  };
  return (
    <div className={"carousel"}>
      <Slider {...settings}>
        {pickets.map((e, i) => (
          <Box key={i}>
            <Image
              src={e.picket_image_url}
              alt={"피켓 이미지"}
              width={"1200"}
              height={"160"}
              //   fill={true}
              style={{ objectFit: "cover" }}
            />
          </Box>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
