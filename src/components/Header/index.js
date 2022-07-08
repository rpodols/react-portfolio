import React, { useState } from 'react';
import About from '../About';
import Navigation from '../Nav';
import Resume from '../Resume';
import Portfolio from '../Portfolio';
import ContactForm from '../Contact';

function Header() {
    const [contactSelected, setContactSelected] = useState(false); 
    const [resumeSelected, setResumeSelected] = useState(false); 
  return (
    <div>
    <Navigation
      contactSelected={contactSelected}
      setContactSelected={setContactSelected}
      resumeSelected={resumeSelected}
      setResumeSelected={setResumeSelected}
      ></Navigation>
      <main>
      {!contactSelected ? (
        <>
          <About></About>
        </>
      ) : (
        <ContactForm></ContactForm>
      )}
      </main>
      </div>
  )
};

export default Header;