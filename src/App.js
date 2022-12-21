import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './routes/Home';
import Error from './routes/Error';
import Footer from './components/Footer/Footer';
import Recommendation from './routes/Recommendation';
import Motivation from './routes/Motivation';
import Experience from './routes/Experience';

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
