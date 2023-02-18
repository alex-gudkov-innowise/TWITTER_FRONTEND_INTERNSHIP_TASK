import './app.css';
import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

import Auth from './components/auth/auth';
import HomePage from './components/home-page/home-page';
import NotFound from './components/not-found/not-found';
import Profile from './components/profile/profile';
import RecordPage from './components/record-page/record-page';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/profile/:userId" element={<Profile />} />
                    <Route path="/record/:recordId" element={<RecordPage />} />
                    <Route path="/auth" element={<Auth />} />
                    <Route path="/*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
