import React from "react";
import Logo from "../../images/Logo";

const LookAndFeel = () => {
  return (<div>
            <div>
              <Logo imgColor="#54c1f7"  mainColor="#efefef" secondaryColor="#1baef7" />
            </div>
            <div className="font-full">Full intensity</div>
            <div className="font-80">80% intensity</div>
            <div className="font-50">50% intensity</div>

            <div className="flex-row-all">
              <div className="card-container card-container-small centered-content-v">
                Card container (vertical centered)
              </div>

              <div className="card-container card-container-small centered-content-h flex-column-all">
                Card container (horizontal centered)
              </div>

              <div className="card-container card-container-small centered-content">
                Verttical &amp; Horizontal
              </div>
            </div>
            
          </div>)
};

export default LookAndFeel;