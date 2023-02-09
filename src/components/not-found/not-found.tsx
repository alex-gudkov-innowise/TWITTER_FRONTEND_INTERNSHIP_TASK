import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import React from 'react';

import './not-found.css';
import { Link, useNavigate } from 'react-router-dom';

import Sidebar from '../sidebar/sidebar';
import Widgets from '../widgets/widgets';

function NotFound() {
    return (
        <div className="NotFound">
            <Sidebar activeElement="" />
            <div className="NotFound__container">
                <div className="NotFound__header">
                    <ArrowBackIcon className="NotFound__back-button" />
                    <h1 className="NotFound__title">Page not found</h1>
                </div>
                <div className="NotFound__body">
                    <span className="NotFound__text">Page not found.</span>
                </div>
            </div>
            <Widgets />
        </div>
    );
}

export default NotFound;
