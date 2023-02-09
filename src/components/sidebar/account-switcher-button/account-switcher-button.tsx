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
                <span className="AccountSwitcherButton__user-name">{user.name}</span>
            </div>
            <MoreHorizIcon className="AccountSwitcherButton__more" />
        </div>
    );
}

export default AccountSwitcherButton;
