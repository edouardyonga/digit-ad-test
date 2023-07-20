import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import ThemeModeSwitcher from './components/common/ThemeModeSwitcher'
import Home from './components/home/Home';
import PostDetails from './components/postDetails/PostDetails';


function App() {

  return (
    <ThemeProvider>
      <ThemeModeSwitcher />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<PostDetails />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
