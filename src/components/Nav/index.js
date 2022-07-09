import React from 'react';

function Navigation(props) {
    const options = [
        "About",
        "Portfolio",
        "Resume",
        "Contact"
    ];

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
                    {options.map((options) => (
                    <li>
                        <a href={"#" + options.toLowerCase()} className={props.currentPage === options} onClick={() => props.setPageSelected(options)}>{options}</a>
                    </li>
                    ))}
                </ul>
            </nav>
        </div>
    </header>
  );
}


export default Navigation;