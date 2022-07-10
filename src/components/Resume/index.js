import React from 'react';

function Resume() {
    
    return (
    <section>
      <h1 className="header-format" id="resume">Resume</h1>
      <a className="header-format" href="https://docs.google.com/document/d/0B44YFZvutHkjS3JJTGQ2ZGtXSmM/edit?usp=sharing&ouid=117673361416213673080&resourcekey=0-nH8k3v2J5wDVYttXgJWmpQ&rtpof=true&sd=true" target="_blank">Click here to view and download my resume!</a>
      <h3 className="header-format">Proficiencies:</h3>
      <p className="header-format">Include fundamentals of computer science applied to JavaScript, browser based technologies, databases, server side development, and API interactions.</p>
      <ul className="form-format">
        <li>JavaScript</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>Bootstrap</li>
        <li>Node.js</li>
        <li>MySQL</li>
        <li>MongoDB</li>
        <li>Express.js</li>
        <li>React.js</li>
      </ul>
    </section>
  );
}

export default Resume;