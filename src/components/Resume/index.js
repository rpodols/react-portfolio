import React from 'react';

function Resume() {
    
    return (
    <section>
      <h1 className="header-format" id="resume">Resume</h1>
      <a className="header-format" href="http://docs.google.com/document/d/0B44YFZvutHkjS3JJTGQ2ZGtXSmM/export?format=pdf">Click here to download my resume!</a>
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