import { React } from 'react';

function Navigation(props) {
    
    // const options = [
    //     "About",
    //     "Portfolio",
    //     "Resume",
    //     "Contact"
    // ];

  return (
    <header>
        <div className="background-header">
            <h2 className="header-format">
                <a href="/">
                    Ryan Podolski
                </a>
            </h2>


            <nav>
                <ul className="header-format">
                    
                    <li className={props.currentComponent === "About" ? "navClick" : "navOff"}>
                        <button onClick={() => props.setPageSelected("About") && props.setCurrentClick("About")}>About</button>
                    </li>
                    <li className={props.currentComponent === "Portfolio" ? "navClick" : "navOff"}>
                        <button onClick={() => props.setPageSelected("Portfolio") && props.setCurrentClick("Portfolio")}>Portfolio</button>
                    </li>
                    <li className={props.currentComponent === "Resume" ? "navClick" : "navOff"}>
                        <button href="#resume" onClick={() => props.setPageSelected("Resume") && props.setCurrentClick("Resume")}>Resume</button>
                    </li>
                    <li className={props.currentComponent === "Contact" ? "navClick" : "navOff"}>
                        <button href="#contact" onClick={() => props.setPageSelected("Contact") && props.setCurrentClick("Contact")}>Contact</button>
                    </li>
                
                </ul>
            </nav> 

            


            {/* 
            ~~~~~ BELOW IS POSSIBLE REFACTORED CODE ROUTE FOR ADDITIONAL TAB MAPPING IN FUTURE ~~~~~
            
            <nav>
                <ul className="header-format">
                    {options.map((options) => (
                    <li>
                        <a href={"#" + options.toLowerCase()} className={props.currentPage === options} onClick={() => props.setPageSelected(options)}>{options}</a>
                    </li>
                    ))}
                </ul>
            </nav> */}
        </div>
    </header>
  );
}


export default Navigation;