import React from 'react';
import './sidebar-tab.css';

interface SidebarTabProps {
    Icon: any;
    active?: boolean;
    children: React.ReactNode;
}

function SidebarTab({ Icon, active, children }: SidebarTabProps) {
    return (
        <div className="SidebarTab">
            <div className={`SidebarTab__body ${active ? 'SidebarTab__body_active' : ''}`}>
                <Icon className={'SidebarTab__icon'} />
                <h2 className={'SidebarTab__text'}>{children}</h2>
            </div>
        </div>
    );
}

export default SidebarTab;
