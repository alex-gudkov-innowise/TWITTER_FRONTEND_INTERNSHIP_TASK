import './account-switcher-button.css';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { baseUrl } from '../../../constants/base-url';
import { UsersEntity } from '../../../interfaces/users.entity';

function AccountSwitcherButton() {
    const navigate = useNavigate();
    const [currentUser, setCurrentUser] = useState<UsersEntity | undefined>();

    useEffect(() => {
        fetchCurrentUser();
    }, []);

    function navigateToAuth() {
        navigate('/auth');
    }

    async function fetchCurrentUser() {
        try {
            const requestUrl = baseUrl + '/users/current';
            const requestConfig: AxiosRequestConfig = {
                method: 'GET',
                maxBodyLength: Infinity,
                url: requestUrl,
                headers: {
                    Authorization:
                        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJlMGFiZTIyOS1jN2I0LTQ3YjAtOGRiNi04Yzk3OWYxNDRmZTQiLCJ1c2VyUm9sZXMiOltdLCJpYXQiOjE2NzYxNDgyMDYsImV4cCI6MTY3NzAxMjIwNn0.IPjRHtGH3Yba7ImwTLqnlTGcECb5Yk2mYZw-UuCQcNc',
                },
            };
            const response = await axios(requestConfig);
            const currentUser = response.data;

            if (!currentUser) {
                throw new AxiosError('213');
            }

            setCurrentUser(currentUser);
        } catch (error) {
            if (error instanceof AxiosError) {
                if (error.response?.status == 401) {
                    navigateToAuth();
                }
            }
        }
    }

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
