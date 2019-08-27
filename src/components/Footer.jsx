import React from "react";
import "../components/Footer.css";

const Footer = props => (
  <div className="footer">
    <div className="container">
      <div className="row justify-content-end text-right">
        <div col-md-12 style={{ paddingTop: "12px" }}>
          CoyoSan: Finanzas para la Raza. &reg; 2019 &emsp;
          <i className="fa fa-youtube fa-4"></i>&emsp;
          <i className="fa fa-facebook fa-4"></i>&emsp;
          <i className="fa fa-twitter fa-4"></i>&emsp;
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
