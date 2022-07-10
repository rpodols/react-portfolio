import React, { useState } from 'react';
import About from '../About';
import Navigation from '../Nav';
import Resume from '../Resume';
import Portfolio from '../Portfolio';
import Contact from '../Contact';

function Header(props) {

const [currentComponent, setPageSelected] = useState("About"); 
const [currentClick, setCurrentClick] = useState("About"); 

const currentPage = () => {
    switch(currentComponent) {
        case "About":
            return <About />;
        case "Portfolio":
            return <Portfolio 
            currentComponent={currentComponent}
            setPageSelected={setPageSelected}
            />;
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
        currentClick={currentClick}
        setCurrentClick={setCurrentClick}
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