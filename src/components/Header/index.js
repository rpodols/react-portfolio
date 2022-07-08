import React, { useState } from 'react';
import About from '../About';
import Navigation from '../Nav';
import Resume from '../Resume';
import Portfolio from '../Portfolio';
import Contact from '../Contact';

function Header() {

const [currentComponent, setPageSelected] = useState("About"); 

const currentPage = () => {
    switch(currentComponent) {
        case "About":
            return <About />;
        case "Portfolio":
            return <Portfolio />;
        case "Resume":
            return <Resume />;
        case "Contact":
            return <Contact />;
        default:
            return <About />;
    }
}

  return (
    <div>
    <Navigation
        currentComponent={currentComponent}
        setPageSelected={setPageSelected}
    ></Navigation>
      <main>
        <div>
            {currentPage(currentComponent)}
        </div>

      </main>
      </div>
  )
};

export default Header;