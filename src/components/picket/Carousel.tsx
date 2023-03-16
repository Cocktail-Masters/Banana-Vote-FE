import { picketsType } from "@/types";
import Image from "next/image";
import Slider from "react-slick";
import "./slick.css";
import "./slick-theme.css";
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
    <Box className={"carousel"}>
      <Slider {...settings}>
        {pickets.map((e, i) => (
          <Box key={i} height="200px" width={{ base: "350px", lg: "1200px" }}>
            <Image
              src={e.picket_image_url}
              alt={"피켓 이미지"}
              height={"200"}
              width={"1200"}
              style={{
                margin: "auto",
                width: "auto",
                maxWidth: "1200px",
                height: "200px",
                objectFit: "contain",
              }}
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default Carousel;
