import React from "react";
import "../components/Footer.css";

const Footer = props => (
  <div class="footer">
    <div class="container">
      <div class="row justify-content-end text-right">
        <div col-md-12 style={{ paddingTop: "12px" }}>
          CoyoSan: Finanzas para la Raza. &reg; 2019 &emsp;
          <i class="fa fa-youtube fa-4"></i>&emsp;
          <i class="fa fa-facebook fa-4"></i>&emsp;
          <i class="fa fa-twitter fa-4"></i>&emsp;
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
