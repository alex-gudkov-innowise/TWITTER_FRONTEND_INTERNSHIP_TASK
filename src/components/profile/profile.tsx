import React from 'react';

import './profile.css';
import Sidebar from '../Sidebar/Sidebar';
import Widgets from '../Widgets/Widgets';

import ProfileFeed from './profile-feed/profile-feed';
import ProfileHeader from './profile-header/profile-header';
import ProfileInfo from './profile-info/profile-info';

function Profile() {
    return (
        <div className="Profile">
            <Sidebar activeElement="Profile" />
            <div className="container">
                <ProfileHeader />
                <ProfileInfo />
                <ProfileFeed />
            </div>
            <Widgets />
        </div>
    );
}

export default Profile;
