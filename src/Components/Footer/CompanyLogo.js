import React from "react";
import './Footer.css';

function CompanyLogo(props) {
  return (
    <div className="logo-text">
      <div className="company-logo">
          <img src={props.url} />
      </div>
      <p className="p-text">
        SunShine Solutions is one of the trusted & independent air conditioner
        service providers in India. At SunShine Solutions, we offer a complete
        solution such as AC installation, AC repair, maintenance and AMC service
        for home and office air conditioners. We deal in all brands of air
        conditioners at a relatively low price.
      </p>
    </div>
  );
}

export default CompanyLogo;
