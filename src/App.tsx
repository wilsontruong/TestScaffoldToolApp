import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import FirebasePage from './components/FirebasePage';

function App() {
  return (
    <Router>
<<<<<<< HEAD
      <Navbar
        links = {["/", "/firebase-connection"]}
        titles = {["Home", "Firebase"]}
        >
      </Navbar>
=======
      <Navbar links={['/']} titles={['Home']} />
>>>>>>> 6e9f284335b32a12f02f087eae8faa9adec745d9
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/firebase-connection" element={<FirebasePage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
