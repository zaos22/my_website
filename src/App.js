import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './views/home/Home';
import AboutMe from './views/about-me/AboutMe';
import Skills from './views/skills/Skills';
import Education from './views/education/Education';
import Experience from './views/experience/Experience';
import Resume from './views/resume/Resume';
import RocketAnimation from './components/Animation/RocketAnimation';
import './App.css';
import './lang';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [animationEnded, setAnimationEnded] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      await new Promise(resolve => setTimeout(resolve, 3000));
      setIsLoading(false);
    };

    loadData();
  }, []);

  const handleAnimationEnd = () => {
    setAnimationEnded(true);
  };

  return (
    <div className="App">
      <div className='background'>
        {!animationEnded && <RocketAnimation isLoading={isLoading} onAnimationEnd={handleAnimationEnd} />}
        {animationEnded && (
          <Router>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about-me' element={<AboutMe />} />
              <Route path='/skills' element={<Skills />} />
              <Route path='/education' element={<Education />} />
              <Route path='/experience' element={<Experience />} />
              <Route path='/resume' element={<Resume />} />
            </Routes>
          </Router>
        )}
      </div>
    </div>
  );
}

export default App;
