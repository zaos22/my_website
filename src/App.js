import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './views/home/Home';
import AboutMe from './views/about-me/AboutMe';
import Skills from './views/skills/Skills';

function App() {
  return (
    <div className="App">
      <div className='background'>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about-me' element={<AboutMe />} />
            <Route path='/skills' element={<Skills />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;