import './profile-info.css';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import React from 'react';

import { UsersEntity } from '../../../interfaces/users-entity';

interface ProfileInfoProps {
    user: UsersEntity;
}

function ProfileInfo({ user }: ProfileInfoProps) {
    return (
        <div className="ProfileInfo">
            <div
                className="ProfileInfo__background"
                style={{
                    backgroundImage: `url(${require('../../../static/images/bg.jpg')})`,
                }}
            ></div>

            <div className="ProfileInfo__header">
                <img src={require('../../../static/images/avatar.png')} alt="avatar" className="ProfileInfo__avatar" />
            </div>

            <div className="ProfileInfo__body">
                <span className="ProfileInfo__user-name">{user.name}</span>
                <div className="ProfileInfo__joined-container">
                    <CalendarMonthIcon className="ProfileInfo__joined-icon" />
                    <span className="ProfileInfo__joined-date">Joined {'12-03-11'}</span>
                </div>
                <div className="ProfileInfo__following-and-followers">
                    <div className="ProfileInfo__following">
                        <span className="ProfileInfo__following-count">23</span> Following
                    </div>
                    <div className="ProfileInfo__followers">
                        <span className="ProfileInfo__followers-count">176</span> Followers
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;
