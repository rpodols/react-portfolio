import './App.css';
import About from './components/About';
import Navigation from './components/Nav';

function App() {
  return (
    <div>
      <Navigation></Navigation>
      <main>
        <About></About>
      </main>
    </div>
  );
}

export default App;
