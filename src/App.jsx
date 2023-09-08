import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Homepage from './Pages/Homepage';
import About from './Pages/About';
import Webshop from './Pages/Webshop';
import Services from './Pages/Services';
import Pagenotfound from './Pages/Pagenotfound';



function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/webshop' element={<Webshop/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='*' element={<Pagenotfound/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
