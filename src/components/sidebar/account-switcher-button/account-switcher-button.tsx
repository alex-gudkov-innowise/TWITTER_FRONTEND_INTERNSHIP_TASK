import './account-switcher-button.css';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import React, { useState } from 'react';

import { UsersEntity } from '../../../interfaces/users-entity';

interface AccountSwitcherButtonProps {
    currentUser: UsersEntity;
}

function AccountSwitcherButton({ currentUser }: AccountSwitcherButtonProps) {
    const [isVisibleAccountSwitcherMenu, setVisibleAccountSwitcherMenu] = useState(false);

    function showAccountSwitcherMenu() {
        setVisibleAccountSwitcherMenu(!isVisibleAccountSwitcherMenu);
    }

    function logOutUser() {
        console.log('Log out');
    }

    return (
        <div className="AccountSwitcherButton" onClick={showAccountSwitcherMenu}>
            <div className="AccountSwitcherButton__body">
                <img
                    src={require('../../../static/images/avatar.png')}
                    alt="avatar"
                    className="AccountSwitcherButton__user-avatar"
                />
                <span className="AccountSwitcherButton__user-name">{currentUser.name}</span>
            </div>

            <MoreHorizIcon className="AccountSwitcherButton__more" />

            <div
                className={
                    isVisibleAccountSwitcherMenu
                        ? 'AccountSwitcherMenu AccountSwitcherMenu_active'
                        : 'AccountSwitcherMenu'
                }
            >
                <div className="AccountSwitcherMenu__log-out" onClick={logOutUser}>
                    Log out
                </div>
            </div>
        </div>
    );
}

export default AccountSwitcherButton;
