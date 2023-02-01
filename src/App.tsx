import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

import Main from './components/Main/Main';
import SignUp from './components/SignUp/SignUp';
import './App.css';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/sign-up" element={<SignUp />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
