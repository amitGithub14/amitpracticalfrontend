import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ListUsers from './components/ListUsers';
import UsersWithId from './components/UsersWithId';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" component={ListUsers} />
        <Route exact path="/users/:id" component={UsersWithId} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
