import React from 'react';
import coverImage from "../../assets/cover/coverImage.jpg";


function About() {
  return (
    <section>
      <h1 id="about">About</h1>
      <img src={coverImage} style={{ width: "100%"}} alt="cover" />
    </section>
  );
}

export default About;