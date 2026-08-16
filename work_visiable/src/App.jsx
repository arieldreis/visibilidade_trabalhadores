import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home.jsx';
import MyServices from './pages/MyServices.jsx';
import NotFound from './pages/NotFound.jsx';
import AddWork from './pages/AddWork.jsx'
import MyPerfil from './pages/MyPerfil.jsx';
import Register from './pages/Register.jsx';
import Login from './pages/Login.jsx';
import ResetPassword from './pages/ResetPassword.jsx';

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route path='*' element={ <NotFound /> }/>
          <Route path='/Home' element={ <Home /> }/>
          <Route path='/MyServices' element={ <MyServices /> }/>
          <Route path='/AddWork' element={ <AddWork /> } />
          <Route path='/MyPerfil' element={ <MyPerfil /> }/>
          <Route path='/Login' element={ <Login /> }/>
          <Route path='/Register' element={ <Register /> }/>
          <Route path='/forgot-password' element={ <ResetPassword /> }/>
      </Routes> 
    </BrowserRouter>
    </>
  )
}

export default App
