import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import HomeIcon from '@mui/icons-material/Home';
import ListAltIcon from '@mui/icons-material/ListAlt';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import TagIcon from '@mui/icons-material/Tag';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Button } from '@mui/material';
import React, { useState } from 'react';

import './sidebar.css';
import CreateTweetWindow from '../CreateTweetWindow/CreateTweetWindow';

import AccountSwitcherButton from './account-switcher-button/account-switcher-button';
import SidebarTab from './sidebar-tab/sidebar-tab';

interface SidebarProps {
    activeElement: string;
}

function Sidebar({ activeElement }: SidebarProps) {
    const [isVisibleCreateTweetWindow, setVisibleCreateTweetWindow] = useState(false);

    return (
        <div className="Sidebar">
            <div className="Sidebar__body">
                <TwitterIcon className="Sidebar__logo" />

                <SidebarTab active={activeElement === 'Home'} Icon={HomeIcon}>
                    Home
                </SidebarTab>

                <SidebarTab active={activeElement === 'Explore'} Icon={TagIcon}>
                    Explore
                </SidebarTab>

                <SidebarTab active={activeElement === 'Notifications'} Icon={NotificationsNoneIcon}>
                    Notifications
                </SidebarTab>

                <SidebarTab active={activeElement === 'Messages'} Icon={MailOutlineIcon}>
                    Messages
                </SidebarTab>

                <SidebarTab active={activeElement === 'Bookmarks'} Icon={BookmarkBorderIcon}>
                    Bookmarks
                </SidebarTab>

                <SidebarTab active={activeElement === 'Lists'} Icon={ListAltIcon}>
                    Lists
                </SidebarTab>

                <SidebarTab active={activeElement === 'Profile'} Icon={PersonOutlineIcon}>
                    Profile
                </SidebarTab>

                <SidebarTab active={activeElement === 'More'} Icon={MoreHorizIcon}>
                    More
                </SidebarTab>

                <Button
                    variant="outlined"
                    className="Sidebar__create-tweet-button"
                    fullWidth
                    onClick={() => {
                        setVisibleCreateTweetWindow(true);
                    }}
                >
                    Tweet
                </Button>

                <CreateTweetWindow visible={isVisibleCreateTweetWindow} setVisible={setVisibleCreateTweetWindow} />
            </div>

            <AccountSwitcherButton />
        </div>
    );
}

export default Sidebar;
