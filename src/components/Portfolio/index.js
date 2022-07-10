import React from 'react';
import zenImage from "../../assets/images/zen.png";
import newsImage from "../../assets/images/news.png";
import expenseImage from "../../assets/images/expense.png";
import weatherImage from "../../assets/images/weather.png";
import quizImage from "../../assets/images/quiz.png";
import passwordImage from "../../assets/images/password.png";

const portfolioPages = [
    {
        name: 'The Zen Project',
        image: zenImage,
        github: "https://github.com/rpodols/the-zen-project",
        deployed: "https://rpodols.github.io/the-zen-project/index.html"
    },
    { 
        name: 'Total Tech News', 
        image: newsImage,
        github: "https://github.com/rpodols/total-tech-blog",
        deployed: "https://limitless-springs-36362.herokuapp.com/"
    }
    ,
    { 
        name: 'Expense Tracker', 
        image: expenseImage,
        github: "https://github.com/rpodols/invoice-tracker",
        deployed: "https://fast-plains-66827.herokuapp.com/"
    },
    { 
        name: 'Weather Dashboard', 
        image: weatherImage,
        github: "https://github.com/rpodols/weather-dashboard",
        deployed: "https://rpodols.github.io/weather-dashboard/"
    },
    { 
        name: 'Code Quiz', 
        image: quizImage,
        github: "https://github.com/rpodols/code-quiz",
        deployed: "https://rpodols.github.io/code-quiz/"
    },
    { 
        name: 'Password Generator', 
        image: passwordImage,
        github: "https://github.com/rpodols/password-generator",
        deployed: "https://rpodols.github.io/password-generator/"
    },
  ];


function Portfolio() {


  return (
    
    <div>
        <section>
            <h1 id="portfolio">Portfolio</h1>
        </section>

        <div className="portfolio-box">
            {portfolioPages.map((portfolioPage) => (
                <div className="portfolio-image">
                    <img src={portfolioPage.image} alt="Portfolio item preview screencap." />
                    <p className="header-format">{portfolioPage.name}</p>
                    <a className="header-format" href={portfolioPage.github}>Github Link!</a>
                    <a className="header-format" href={portfolioPage.deployed}>Deployed Link!</a>
                    <hr></hr>
                </div>
            ))}
        </div>
    </div>
  );
}

export default Portfolio;