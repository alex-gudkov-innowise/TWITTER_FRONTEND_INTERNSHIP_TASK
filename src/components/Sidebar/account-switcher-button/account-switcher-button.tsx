import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import React from 'react';

import './account-switcher-button.css';
import { user } from '../../../server-response/user';

function AccountSwitcherButton() {
    return (
        <div className="AccountSwitcherButton">
            <div className="AccountSwitcherButton__body">
                <img
                    src={require('../../../static/images/avatar.png')}
                    alt="avatar"
                    className="AccountSwitcherButton__user-avatar"
                />
                <div className="AccountSwitcherButton__column">
                    <span className="AccountSwitcherButton__user-name">{user.name}</span>
                    <span className="AccountSwitcherButton__user-nick">@{user.nick}</span>
                </div>
            </div>
            <MoreHorizIcon className="AccountSwitcherButton__more" />
        </div>
    );
}

export default AccountSwitcherButton;
