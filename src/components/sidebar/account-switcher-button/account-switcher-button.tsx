import './account-switcher-button.css';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import React, { useEffect, useState } from 'react';

import { useFetching } from '../../../hooks/use-fetch';
import { UsersEntity } from '../../../interfaces/users.entity';
import { UsersService } from '../../../services/users-service';

function AccountSwitcherButton() {
    const [currentUser, setCurrentUser] = useState<UsersEntity | undefined>();
    const [fetchCurrentUser, isCurrentUserLoading] = useFetching(async () => {
        const currentUser = await UsersService.getCurrentUser();

        setCurrentUser(currentUser);
    });

    useEffect(() => {
        fetchCurrentUser();
    }, []);

    return (
        <div className="AccountSwitcherButton">
            <div className="AccountSwitcherButton__body">
                <img
                    src={require('../../../static/images/avatar.png')}
                    alt="avatar"
                    className="AccountSwitcherButton__user-avatar"
                />
                <span className="AccountSwitcherButton__user-name">{currentUser?.name}</span>
            </div>

            <MoreHorizIcon className="AccountSwitcherButton__more" />
        </div>
    );
}

export default AccountSwitcherButton;
