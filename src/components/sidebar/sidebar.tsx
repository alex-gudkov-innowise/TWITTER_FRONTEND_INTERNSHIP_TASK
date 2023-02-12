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

import CreateTweetModal from '../create-tweet-modal/create-tweet-modal';

import AccountSwitcherButton from './account-switcher-button/account-switcher-button';
import SidebarTab from './sidebar-tab/sidebar-tab';

interface SidebarProps {
    activeElement: string;
}

function Sidebar({ activeElement }: SidebarProps) {
    const [isVisibleCreateTweetModal, setVisibleCreateTweetModal] = useState(false);

    return (
        <div className="Sidebar">
            <div className="Sidebar__body">
                <TwitterIcon className="Sidebar__logo" />

                <SidebarTab linkTo={'/home'} active={activeElement === 'Home'} Icon={HomeIcon}>
                    Home
                </SidebarTab>

                <SidebarTab linkTo={'/'} active={activeElement === 'Explore'} Icon={TagIcon}>
                    Explore
                </SidebarTab>

                <SidebarTab linkTo={'/'} active={activeElement === 'Notifications'} Icon={NotificationsNoneIcon}>
                    Notifications
                </SidebarTab>

                <SidebarTab linkTo={'/'} active={activeElement === 'Messages'} Icon={MailOutlineIcon}>
                    Messages
                </SidebarTab>

                <SidebarTab linkTo={'/'} active={activeElement === 'Bookmarks'} Icon={BookmarkBorderIcon}>
                    Bookmarks
                </SidebarTab>

                <SidebarTab linkTo={'/'} active={activeElement === 'Lists'} Icon={ListAltIcon}>
                    Lists
                </SidebarTab>

                <SidebarTab linkTo={'/profile'} active={activeElement === 'Profile'} Icon={PersonOutlineIcon}>
                    Profile
                </SidebarTab>

                <SidebarTab linkTo={'/'} active={activeElement === 'More'} Icon={MoreHorizIcon}>
                    More
                </SidebarTab>

                <Button
                    variant="outlined"
                    className="Sidebar__create-tweet-button"
                    fullWidth
                    onClick={() => {
                        setVisibleCreateTweetModal(true);
                    }}
                >
                    Tweet
                </Button>

                <CreateTweetModal visible={isVisibleCreateTweetModal} setVisible={setVisibleCreateTweetModal} />
            </div>

            <AccountSwitcherButton />
        </div>
    );
}

export default Sidebar;
