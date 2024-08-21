import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './views/home/Home';
import AboutMe from './views/about-me/AboutMe';

function App() {
  return (
    <div className="App">
      <div className='background'>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about-me' element={<AboutMe />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;