import eCommerceBanner from "../../assets/projects/eCommerceProjBanner.png";
import cssBanner from "../../assets/projects/cssProjBanner.png";
import chessBanner from "../../assets/projects/chessProjBanner.png";

//bnw project images

import backendLogin from "../../assets/expandProj/bnw/backendLogin.png";
import bnwLanding from "../../assets/expandProj/bnw/bnwLanding.jpg";
import cart from "../../assets/expandProj/bnw/cart.png";
import mainProduct from "../../assets/expandProj/bnw/mainProduct.png";
import newProduct from "../../assets/expandProj/bnw/newProduct.png";
import orders from "../../assets/expandProj/bnw/orders.png";
import stripe from "../../assets/expandProj/bnw/stripe.png";

//chess project images
import board from "../../assets/expandProj/chess/board.png";
import castling from "../../assets/expandProj/chess/castling.png";
import check from "../../assets/expandProj/chess/check.png";
import landingPage from "../../assets/expandProj/chess/landingPage.png";
import queening from "../../assets/expandProj/chess/queening.png";
import roomReallocation from "../../assets/expandProj/chess/roomReallocation.png";
import stalemate from "../../assets/expandProj/chess/stalemate.png";
import winTimeout from "../../assets/expandProj/chess/winTimeout.png";

//static project images
import cssPhoto from "../../assets/expandProj/static/photo.png";
import cssOverlay from "../../assets/expandProj/static/overlay.png";
import cssTextReveal from "../../assets/expandProj/static/textReveal.png";
import endMap from "../../assets/expandProj/static/endMap.png";

export const staticInfo = {
  banner: cssBanner,
  header: "Static Design",
  desc: "This is a page for a Holiday Lodge where I took a focus on CSS and Design.  This page includes parralax scrolling",
  highlights:
    "The Highlight of this project is the implementation of parralax and the creation of a natural feel to the page to reflect the countryside residence of this Lodge",
  techs: ["React", "Styled-Components", "NginX"],
  gitLink: "https://github.com/joshD90/bnw-vintage",
  siteLink: "https://lodge.joshuadanceywebdev.ie",
  motivation: [
    "This was a site I made for a Rental Lodge which was in need of website revamped",
    "I created this site as most of my work so far had been focused on code rather than design aspects",
    "I wanted to take on a project that would allow me to engage with parallax and more complex responsive design",
  ],
  keyLearnings: ["Incorporating parallax with a React Project"],
};

export const eCommerceInfo = {
  banner: eCommerceBanner,
  header: "e-Commerce Site",
  desc: "A site mock up for a friend's website.  Includes stylised front-end connecting to a backend database and payment API",
  highlights:
    "Full e-Commerce experience, ability to log into admin to create more products, connection with Google Firebase for item creation, connection to backend for product storing and connection to Stripe API",
  techs: [
    "React",
    "Styled-Components",
    "Stripe",
    "Mongoose",
    "MongoDB",
    "Firebase",
    "Passport.js",
    "Express",
  ],
  gitLink: "https://github.com/joshD90/leonards-lodge",
  siteLink: "https://bnw.joshuadanceywebdev.ie",
  swiperDesc: [
    "An eCommerce site styled to fit the Theme Provided",
    "This grabs the image from firebase service and collects data from MongoDB from backend",
    "Add Products to Cart, if a product is added more than once it adds to the amount of the product already in the cart",
    "When buying, the Client contacts the backend, creates an order and saves this to MongoDB, this then uses the price ID and redirects to Stripe",
    "Site owners can access a backend to monitor and create products and sales, this is found at the /admin path and is protected by passport.js",
    "Site owners can create new products for the store. This asyncronously saves multiple images to firebase, creates a stripe product and priceID and passes this to DB",
    "Site owners can also view orders that have been placed",
  ],
  motivation: [
    "I created this Website as I wanted to try my hand at one of the most common websites out there online, an e-commerce site",
    "A friend of mine was having an issue with their website and so I decided to mock one up",
    "I also wished to challenge myself with a project that incorporated a wide variety of features",
    "I took the time to include an admin section so that the site would be maintainable without constant web development intervention",
    "This also gave me a chance to try my hand at a larger project",
  ],
  keyLearnings: [
    "I learned about tailoring individual cohesive style across a website to match the products that are being sold",
    "I made my own carousel in this project",
    "I learned about Firebase and storing and retrieving images",
    "I learned about making promises and promise.all",
    "I learned about managing an larger scale application with many different aspects and managing a larger code base",
    "More complex database documents and using aggregation in MongoDB",
    "Security and Passport.js",
  ],
};

export const bnwImages = [
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

export const chessProjInfo = {
  banner: chessBanner,
  header: "Chess Game",
  desc: "Fully working Chess game played over sockets.  To play open this under two seperate tabs, select the same timeframe to be connected",
  highlights:
    "Application of Complex Logic to implement game rules.  Dynamic room allocation through Socket.io. Includes take functionality, check, checkmate, en-passante, queening, draw-conditions including stalemate",

  gitLink: "https://github.com/joshD90/chess_app",
  siteLink: "https://chess.joshuadanceywebdev.ie",
  techs: ["React", "Sass", "Sockets.io", "Nginx", "Javascript", "HTML Canvas"],
  keyLearnings: ["Recursion", "Complex Logic"],
  motivation: [
    "I created this project as I wished to create a javascript based game where I could deal with complex logic",
    "I have been passionate about chess for a number of years and so decided that this would be an opportunity to demonstrate a capacity for a larger scale game to demonstrate a range of my skills.",
    "I had previously used recursive directional square checking in an X's and O's game.  All of the game logic was self-conceptualised and there was no follow along tutorials in helping me build this project",
  ],
};

export const chessImages = [
  {
    image: landingPage,
    text: "The player enters there name and can select a game length, the server will pair this with another player in rooms of two",
  },
  {
    image: board,
    text: "The board is drawn dynamically and a grid set up.  Player pieces are drawn on HTML 5.  The timer is controlled server-side",
  },
  {
    image: castling,
    text: "Legal moves are calculated through recursively checking in all directions.  Each piece has their own unique moves such as 'en passante' and castling. Rules such as no castling through check is also implement",
  },
  {
    image: check,
    text: "Check is calculated through iterating through all legal moves of all of a colour's piece's legal moves to see whether the king has been attacked ",
  },
  {
    image: queening,
    text: "The pawn can promote to any piece as per chess rules and all win /draw conditions are dealt with if resulting from this",
  },
  {
    image: stalemate,
    text: "Checkmate can be achieved, as can stalemate, this is done when the king is in check and there are no possible moves that can remove this check",
  },
  {
    image: winTimeout,
    text: "Win and draw conditions are managed, as well as edge cases such as draw by insufficient material vs timeout",
  },
  {
    image: roomReallocation,
    text: "If another player disconnects, the socket will attempt to connect the player with another player of the same time",
  },
];

export const staticImages = [
  {
    image: cssBanner,
    text: "This Lodge is set in a natural setting and I wished to capture this by giving a natural feeling to this site which is why I chose the green pastelle based Colour-Scheme.  I also made the whole site with parallax to give a sense of being nestled in nature",
  },
  {
    image: cssPhoto,
    text: "I wanted to give a more rustic feel to fit the log cabin, so as well as the plant overlay, I included an image that is styled like a printed photo",
  },
  {
    image: cssTextReveal,
    text: "As the user scrolls down a blurb is revealed.  This gives the user a sense of discovering more about the site",
  },
  {
    image: cssOverlay,
    text: "Again the theme of more old style photographs are employed to give the rustic feel to the site.  The plant overlay in the foreground scrolls in parallax giving a sense of depth to the site",
  },
  {
    image: endMap,
    text: "A google map plugin is employed for ease of locating the site however.  The parallax rocks at the end of the page gives a sense of completion and having landed at the bottom",
  },
];
