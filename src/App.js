import './App.css';
import About from './components/About';
import Navigation from './components/Nav';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <div>
      <Navigation></Navigation>
      <main>
        <About></About>
        <Portfolio></Portfolio>
      </main>
    </div>
  );
}

export default App;
