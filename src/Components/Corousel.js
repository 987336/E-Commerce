import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function EnhancedCarousel() {
  const carouselItemStyle = {
    height: "500px",
    objectFit: "cover",
    filter: "brightness(80%)",
  };

  const captionStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    borderRadius: "10px",
    padding: "10px 20px",
    color: "#fff",
  };

  const headingStyle = {
    fontSize: "2rem",
    fontWeight: "bold",
    textShadow: "1px 1px 4px rgba(0, 0, 0, 0.8)",
    color: "#fff",
  };

  const paragraphStyle = {
    fontSize: "1rem",
    fontWeight: "400",
    textShadow: "1px 1px 3px rgba(0, 0, 0, 0.7)",
    color: "#f8f8f8",
  };

  return (
    <Carousel style={{ color: "#fff" }} data-bs-theme="dark">
      <Carousel.Item>
        <img
          style={carouselItemStyle}
          className="d-block w-100"
          src="https://media.istockphoto.com/id/1467976868/photo/the-convenience-of-shopping-online.webp?a=1&b=1&s=612x612&w=0&k=20&c=CnMJ1e0JH7cLLXEtvwATrbp82JkIig0piAOkIrrgnko="
          alt="First slide"
        />
        <Carousel.Caption style={captionStyle}>
          <h5 style={headingStyle}>Convenience at Your Fingertips</h5>
          <p style={paragraphStyle}>Shop anytime, anywhere with ease and reliability.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          style={carouselItemStyle}
          className="d-block w-100"
          src="https://media.istockphoto.com/id/1767592571/photo/christmas-online-shopping-sales-and-discounts-promotions-during-winter-holidays-online.webp?a=1&b=1&s=612x612&w=0&k=20&c=YzKIr3IPXmkHEYDVZh1KYs93xeoDTIDb2O6LlCubS-U="
          alt="Second slide"
        />
        <Carousel.Caption style={captionStyle}>
          <h5 style={headingStyle}>Seasonal Offers Just for You</h5>
          <p style={paragraphStyle}>Enjoy exclusive discounts during festive seasons.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          style={carouselItemStyle}
          className="d-block w-100"
          src="https://media.istockphoto.com/id/1754234402/photo/woman-small-business-and-thinking-with-tablet-in-storage-management-supply-chain-or-inventory.webp?a=1&b=1&s=612x612&w=0&k=20&c=UJhlDsswKjRK7VfV77U0ylmTnKXBcWwns7RPHdIFvOY="
          alt="Third slide"
        />
        <Carousel.Caption style={captionStyle}>
          <h5 style={headingStyle}>Empowering Small Businesses</h5>
          <p style={paragraphStyle}>Helping you grow with smarter inventory solutions.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default EnhancedCarousel;