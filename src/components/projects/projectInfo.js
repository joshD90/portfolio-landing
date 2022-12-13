import eCommerceBanner from "../../assets/projects/eCommerceProjBanner.png";
import cssBanner from "../../assets/projects/cssProjBanner.png";
import chessBanner from "../../assets/projects/chessProjBanner.png";

export const staticInfo = {
  banner: cssBanner,
  header: "Static Design",
  desc: "This is a page for a Holiday Lodge where I took a focus on CSS and Design",
  highlights:
    "The Highlight of this project is the implementation of parralax and the creation of a natural feel to the page to reflect the countryside residence of this Lodge",
  techs: "React, Styled-Components, NginX",
  gitLink: "https://github.com/joshD90/bnw-vintage",
};

export const eCommerceInfo = {
  banner: eCommerceBanner,
  header: "e-Commerce Site",
  desc: "A site mock up for a friend's website.  Includes stylised front-end connecting to a backend database and payment API",
  highlights:
    "Full e-Commerce experience, ability to log into admin to create more products, connection with Google Firebase for item creation, connection to backend for product storing and connection to Stripe API",
  techs:
    "React, Styled-Components, Stripe, Mongoose, MongoDB, Firebase, Passport.js, Express",
  gitLink: "https://github.com/joshD90/leonards-lodge",
};

export const chessProjInfo = {
  banner: chessBanner,
  header: "Chess Game",
  desc: "Fully working Chess game played over sockets",
  highlights:
    "Application of Complex Logic to implement game rules.  Dynamic room allocation through Socket.io. Includes take functionality, check, checkmate, en-passante, queening, draw-conditions including stalemate",
  techs: "React,Sass,Socket.io,HTMLCanvas",
  gitLink: "https://github.com/joshD90/chess_app",
};
