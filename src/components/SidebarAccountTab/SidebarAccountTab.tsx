import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import React from 'react';
import './SidebarAccountTab.css';

function SidebarAccountTab() {
    return (
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
    );
}

export default SidebarAccountTab;
