import { Email, GitHub, LinkedIn, Phone } from "@mui/icons-material";
import React from "react";
import "./footer.scss";

function Footer() {
  return (
    <div className="footerContainer">
      <div className="footerIconsDiv">
        <GitHub />
        <LinkedIn />
      </div>
      <div className="footerContacts">
        <span>
          <Email className="contactIcon" /> : joshuadancey@hotmail.com
        </span>
        <span>
          <Phone className="contactIcon" /> : 085 237 4436
        </span>
      </div>
    </div>
  );
}

export default Footer;
