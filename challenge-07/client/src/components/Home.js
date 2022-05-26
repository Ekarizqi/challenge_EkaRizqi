import React, { useState, useEffect } from "react";

import UserService from "../services/user.service";
import HeaderUser from "./LandingPage/Header";
import OurServices from "./LandingPage/OurServices";
import WhyUs from "./LandingPage/WhyUs";

const Home = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    UserService.getPublicContent().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();

        setContent(_content);
      }
    );
  }, []);


  return (
    <div>
      <h3>{content} </h3>
      <HeaderUser />
      <OurServices />
      <WhyUs />
    </div>
  );
};

export default Home;
