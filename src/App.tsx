import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

import Home from './components/home/home';
import Profile from './components/profile/profile';
import SignUp from './components/SignUp/SignUp';
import './App.css';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/sign-up" element={<SignUp />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
