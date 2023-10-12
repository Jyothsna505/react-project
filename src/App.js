import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import PasswordGenerator from './components/PasswordGenerator';
import Footer from './components/Footer';
import ToDoList from './components/ToDoList';
import TitlebarBelowMasonryImageList from './components/TitlebarBelowMasonryImageList';

     
function App() {
  return (
    <Router>
      <div>
        <Navigation/>
        <Routes>
          <Route path="/" element={<TitlebarBelowMasonryImageList/>} />
          <Route path="/contacts" element={<PasswordGenerator/>} />
          <Route path="/todolist" element={<ToDoList/>}/>
        </Routes>
        
        <Footer/>
      </div>
    </Router>
  );
}

export default App;

// import React from 'react'
// import PasswordGenerator from './components/PasswordGenerator'
// import Footer from './components/Footer'
// import NavBar from './components/NavBar'



// function App() {
//   return (
//     <><NavBar/><PasswordGenerator /><Footer /></>
//   )
// }

// export default App
