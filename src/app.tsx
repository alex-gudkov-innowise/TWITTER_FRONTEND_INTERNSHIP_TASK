import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

import Auth from './components/auth/auth';
import Home from './components/home/home';
import NotFound from './components/not-found/not-found';
import Profile from './components/profile/profile';
import './app.css';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/auth" element={<Auth />} />
                    <Route path="/*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
