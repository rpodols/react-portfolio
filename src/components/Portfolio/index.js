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
        image: zenImage
    },
    { 
        name: 'Total Tech News', 
        image: newsImage
    }
    ,
    { 
        name: 'Expense Tracker', 
        image: expenseImage
    },
    { 
        name: 'Weather Dashboard', 
        image: weatherImage
    },
    { 
        name: 'Code Quiz', 
        image: quizImage
    },
    { 
        name: 'Password Generator', 
        image: passwordImage
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
                </div>
            ))}
        </div>
    </div>
  );
}

export default Portfolio;