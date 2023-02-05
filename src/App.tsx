import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

import Home from './components/Home/Home';
import SignUp from './components/SignUp/SignUp';
import './App.css';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/sign-up" element={<SignUp />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
