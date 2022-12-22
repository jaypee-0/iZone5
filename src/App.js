import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './routes/Home';
import Experience from './routes/Experience';
import Motivation from './routes/Motivation';
import Recommendation from './routes/Recommendation';
import Error from './routes/Error';
import "./components/Fontawesome";
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/experience' element={<Experience />} />
        <Route path='/motivation' element={<Motivation />} />
        <Route path='/recommendation' element={<Recommendation />} />
        <Route path='*' element={<Error />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
