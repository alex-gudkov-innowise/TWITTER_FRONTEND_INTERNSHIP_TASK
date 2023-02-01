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
import React from 'react';
import './Sidebar.css';

import SidebarElement from '../SidebarElement/SidebarElement';

// import TwitterIcon from '@mui/icons-material/Twitter';

function Sidebar() {
    return (
        <div className="Sidebar">
            <div className="Sidebar__menu">
                <TwitterIcon className="Sidebar__menu__logo" />

                <SidebarElement active Icon={HomeIcon} text={'Home'} />
                <SidebarElement Icon={TagIcon} text={'Explore'} />
                <SidebarElement Icon={NotificationsNoneIcon} text={'Notifications'} />
                <SidebarElement Icon={MailOutlineIcon} text={'Messages'} />
                <SidebarElement Icon={BookmarkBorderIcon} text={'Bookmarks'} />
                <SidebarElement Icon={ListAltIcon} text={'Lists'} />
                <SidebarElement Icon={PersonOutlineIcon} text={'Profile'} />
                <SidebarElement Icon={MoreHorizIcon} text={'More'} />

                <Button variant="outlined" className="Sidebar__menu__TweetButton" fullWidth>
                    Tweet
                </Button>
            </div>

            <div className="Sidebar__account">
                <div className="Sidebar__account__container">
                    <img src={require('./pic.png')} alt="avatar" className="Sidebar__account__avatar" />
                    <div className="Sidebar__account__body">
                        <span className="Sidebar__account__body__name">Alex</span>
                        <span className="Sidebar__account__body__nick">@alex423342</span>
                    </div>
                </div>
                <MoreHorizIcon className="Sidebar__account__more" />
            </div>
        </div>
    );
}

export default Sidebar;
