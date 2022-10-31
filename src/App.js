import React from 'react'
import './App.css';
import Home from './components/Home';

import {Routes, Route,} from 'react-router-dom'
import ModelS from './components/ModelS';

function App() {
  return (
    <>
    <div className='App'>
    <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/modelS' element={<ModelS />}/>
    </Routes>

    </div>
    </>
  );
}

export default App;
