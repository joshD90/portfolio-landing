// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "./swiper.scss";

import backendLogin from "../../assets/expandProj/bnw/backendLogin.png";
import bnwLanding from "../../assets/expandProj/bnw/bnwLanding.jpg";
import cart from "../../assets/expandProj/bnw/cart.png";
import mainProduct from "../../assets/expandProj/bnw/mainProduct.png";
import newProduct from "../../assets/expandProj/bnw/newProduct.png";
import orders from "../../assets/expandProj/bnw/orders.png";
import stripe from "../../assets/expandProj/bnw/stripe.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default () => {
  const images = [
    {
      image: bnwLanding,
      text: "An ecommerce site styled to fit the Theme Provided",
    },
    {
      image: mainProduct,
      text: "This grabs image from firebase service and collects data from MongoDB from backend",
    },
    { image: cart, text: "Add products to cart" },
    {
      image: stripe,
      text: "When buying, the client contacts the backend, creates an order and saves this to DB, requests the priceId and redirects to STRIPE",
    },
    {
      image: backendLogin,
      text: "Site owners can access a backend to monitor and create products and sales, this is found at the /admin path and is protected by passport.js",
    },
    {
      image: newProduct,
      text: "Site owners can create new products for the store.  This asyncronously saves multiple images to firebase, creates a stripe product and priceID and passes this to DB",
    },
    {
      image: orders,
      text: "Site Owners can also view an orders that have been placed",
    },
  ];

  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      scrollbar={{ draggable: true }}
      loop={true}
      style={{
        height: "inherit",
        width: "inherit",
        margin: "inherit",
        padding: "inherit",
      }}
    >
      {images.map((info, index) => {
        return (
          <SwiperSlide key={index}>
            <img
              src={info.image}
              style={{ width: "100%", height: "100%", objectFit: "fit" }}
            />
            <p className="swiperText">{info.text}</p>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
