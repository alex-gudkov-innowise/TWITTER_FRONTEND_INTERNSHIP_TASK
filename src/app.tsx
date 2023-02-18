import './app.css';
import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

import AuthPage from './components/auth/auth';
import HomePage from './components/home-page/home-page';
import NotFound from './components/not-found/not-found';
import ProfilePage from './components/profile-page/profile-page';
import RecordPage from './components/record-page/record-page';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/profile/:userId" element={<ProfilePage />} />
                    <Route path="/record/:recordId" element={<RecordPage />} />
                    <Route path="/auth" element={<AuthPage />} />
                    <Route path="/*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
