import React from 'react';
import coverImage from "../../assets/cover/coverImage.jpg";


function About() {
  return (
    <section>
      <h1 className="header-format" id="about">About Me</h1>
      <p className="header-format">Full stack web dev candidate, hailing from Cleveland, Ohio.</p>
      <img src={coverImage} style={{ width: "100%"}} alt="cover" />
    </section>
  );
}

export default About;