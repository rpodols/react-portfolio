import './App.css';
import React, { useState } from 'react';
import About from './components/About';
import Navigation from './components/Nav';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';

function App() {
  const [contactSelected, setContactSelected] = useState(false); 

  return (
    <div>
      <Navigation
      contactSelected={contactSelected}
      setContactSelected={setContactSelected}
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
      <Footer></Footer>
    </div>
  );
}

export default App;
