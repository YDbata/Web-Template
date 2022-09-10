import './App.css';
import React from 'react';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Bar
import TopBar from './layout/TopBar';
import SideBar from './layout/SideBar';

// Pages
    // Main
import Main from './pages/Main/Main';
import Profile from './pages/Main/Profile';
import Project from './pages/Main/Project';
import Skill from './pages/Main/Skill';
import Board from './pages/Main/Board';
    // Sub
import Home from './pages/Sub/Home';
import View from './pages/Sub/View';
import State from './pages/Sub/State';
import Terminal from './pages/Sub/Terminal';
import Git from './pages/Sub/Git';
import Edit from './pages/Sub/Edit';
import Help from './pages/Sub/Help';
import Option from './pages/Sub/Option';
import BottomBar from './layout/BottomBar';


function App() {
  return (
    <div className='App'>
      <Router>
        <TopBar />
        <SideBar />
        <Routes>
          {/* Main */}
          <Route exact path='/' element={<Main />} />
          <Route exact path='/profile' element={<Profile />} />
          <Route exact path='/project' element={<Project />} />
          <Route exact path='/skill' element={<Skill />} />
          <Route exact path='/board' element={<Board />} />
          {/* Sub */}
          <Route exact path='/home' element={<Home />} />
          <Route exact path='/view' element={<View />} />
          <Route exact path='/state' element={<State />} />
          <Route exact path='/terminal' element={<Terminal />} />
          <Route exact path='/git' element={<Git />} />
          <Route exact path='/edit' element={<Edit />} />
          <Route exact path='/help' element={<Help />} />
          <Route exact path='/option' element={<Option />} />
        </Routes>
        <BottomBar />
      </Router>
    </div>
  );
}

export default App;
