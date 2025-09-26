import logo from './Logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Characters from './Characters';

function Home() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" style={{ display: 'block', margin: '0 auto', marginTop: '0px' }} />
      <h1 className="main-text">DND Unlimited</h1>
      <p className="main-text">Welcome to DND Unlimited, your ultimate resource for all things Dungeons & Dragons!</p>
      <p className="main-text">Explore our extensive collection of homebrew content, including unique character classes, spells, and adventures.</p>
      <button className="characters-btn" onClick={() => navigate('/characters')}>Characters</button>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Characters />} />
      </Routes>
    </Router>
  );
}

export default App;
