import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Chef.css";

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef img" />
    </div>

    <div className="app__wrapper_info">
      <SubHeading title="Chef's Title" />
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote img" />
          <p className="p__opensans">Sit Tellus Lobortis Sed Senectus Vivamus Molestie.</p>
        </div>
        <p className="p__opensans"> Condimentum Volutpat Morbi Facilisis Quam Scelerisque Sapien. Et, Penatibus Aliquam Amet Tellus.  Condimentum Volutpat Morbi Facilisis Quam Scelerisque Sapien. Et, Penatibus Aliquam Amet Tellus.  Condimentum Volutpat Morbi Facilisis Quam Scelerisque Sapien. Et, Penatibus Aliquam Amet Tellus</p>
      </div>

      <div className="app__chef-sing">
        <p>Kevin Luo</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="sing img" />
      </div>

    </div>
  </div>
);

export default Chef;
