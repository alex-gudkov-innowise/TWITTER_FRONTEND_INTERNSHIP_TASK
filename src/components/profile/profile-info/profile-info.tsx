import './profile-info.css';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import React from 'react';

import { baseUrl } from '../../../constants/base-url';
import { formatDateString } from '../../../formatters/format-date-string';
import { UsersEntity } from '../../../interfaces/users-entity';

interface ProfileInfoProps {
    user: UsersEntity;
}

function ProfileInfo({ user }: ProfileInfoProps) {
    const defaultUserCoverUrl = baseUrl + '/default-user-profile-images/' + 'default-user-cover.png';
    const defaultUserAvatarUrl = baseUrl + '/default-user-profile-images/' + 'default-user-avatar.png';

    return (
        <div className="ProfileInfo">
            <div
                className="ProfileInfo__background"
                style={{
                    backgroundImage: `url(${defaultUserCoverUrl})`,
                }}
            ></div>

            <div className="ProfileInfo__header">
                <img src={defaultUserAvatarUrl} alt="avatar" className="ProfileInfo__avatar" />
            </div>

            <div className="ProfileInfo__body">
                <span className="ProfileInfo__user-name">{user.name}</span>
                <div className="ProfileInfo__joined-container">
                    <CalendarMonthIcon className="ProfileInfo__joined-icon" />
                    <span className="ProfileInfo__joined-date">Joined {formatDateString(user.createdAt)}</span>
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
