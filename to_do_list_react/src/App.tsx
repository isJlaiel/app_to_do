import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route ,Routes } from "react-router-dom";
import Connect from './pages/Connect-item-component';
import Inscrit from './pages/inscrit-item-component';
import Sign from './pages/sign-item.component';
import Main from './personal_space/main_page_tasks';


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Sign/>}/>
        <Route path="main_page_tasks" element={<Main/>}/>
        <Route path="Connect-item-component" element={<Connect />} />
        <Route path="inscrit-item-component" element={<Inscrit />} />
      </Routes>
    </BrowserRouter> 
    </>
  );
}

export default App;