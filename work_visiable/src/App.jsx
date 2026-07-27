import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home.jsx';
import MyServices from './pages/MyServices.jsx';
import NotFound from './pages/NotFound.jsx';
import AddWork from './pages/AddWork.jsx'

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route path='*' element={ <NotFound /> }/>
          <Route path='/Home' element={ <Home /> }/>
          <Route path='/MyServices' element={ <MyServices /> }/>
          <Route path='/AddWork' element={ <AddWork /> } />
      </Routes> 
    </BrowserRouter>
    </>
  )
}

export default App
