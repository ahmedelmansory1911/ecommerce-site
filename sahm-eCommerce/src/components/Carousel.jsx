import Carousel from "react-multi-carousel";

export default function CarouselSwiper({
  children,
  carouselRef,
  responsive,
  isModalOpen,
}) {
  return (
    <Carousel
      responsive={responsive}
      arrows={false}
      ref={carouselRef}
      infinite
      autoPlay={!isModalOpen} // Stop autoPlay when modal is open
      autoPlaySpeed={3000}
      className="mt-3"
    >
      {children}
    </Carousel>
  );
}
