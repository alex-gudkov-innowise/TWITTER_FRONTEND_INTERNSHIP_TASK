import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import React from 'react';

import './profile-header.css';
import { user } from '../../../server-response/user';

function ProfileHeader() {
    return (
        <div className="ProfileHeader">
            <ArrowBackIcon className="ProfileHeader__arrow-back" />
            <div className="ProfileHeader__body">
                <h1 className="ProfileHeader__user-name">{user.name}</h1>
                <span className="ProfileHeader__tweets-count">17 Tweets</span>
            </div>
        </div>
    );
}

export default ProfileHeader;
