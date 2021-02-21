import React from "react";
import Logo from "../../../images/Logo"

const Header = () => (
  <div className="body-centered">

    <div className="flex-row">
      <div className="header-left">
      <Logo imgColor="#54c1f7"  mainColor="#efefef" secondaryColor="#1baef7" />
      </div>
      <div className="header-right">
        bitcoinprojection.com
      </div>
    </div>

    <div className="flex-row header-divide" />
  </div>
)

export default Header;