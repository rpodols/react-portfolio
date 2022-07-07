import React from 'react';

function Navigation(props) {
    const {
        setContactSelected
    } = props;

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
                    <li>
                        <a data-testid="about" href = "/" onClick={() => setContactSelected(false)}>
                            About Me
                        </a>
                    </li>
                    <li>
                        <a href = "#portfolio">
                            Portfolio
                        </a>
                    </li>
                    <li>
                        <a href = "#resume">
                            Resume
                        </a>
                    </li>
                    <li>
                        <a href = "#contact" onClick={() => setContactSelected(true)}>
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
  );
}


export default Navigation;