import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { user } from '../../../server-response/user';

import './profile-header.css';

function ProfileHeader() {
    const navigate = useNavigate();

    function navigateToHome() {
        navigate('/home');
    }

    return (
        <div className="ProfileHeader">
            <ArrowBackIcon className="ProfileHeader__back-button" onClick={navigateToHome} />
            <div className="ProfileHeader__body">
                <h1 className="ProfileHeader__user-name">{user.name}</h1>
                <span className="ProfileHeader__tweets-count">17 Tweets</span>
            </div>
        </div>
    );
}

export default ProfileHeader;
