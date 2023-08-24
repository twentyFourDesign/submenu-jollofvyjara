import React from "react";
import logo from "../../image/Jollof by Jara 1.png";
import RightLogo from "../../image/img.png";
import './style.css'
function Footer() {
  return (
    <div className="footercontainer">
      <img src={logo} alt="" className="logo-left" />
      <div className="c-de">
        <p className="year">@2023 JOLLOF BY JARA</p>
        <p className="own">Owned and operated by Little Company Nigeria Limited</p>
        <p className="rc">RC 1424441 | TIN 2050517</p>
      </div>
      <img src={RightLogo} alt="" className="right-logo" />
    </div>
  );
}

export default Footer;
