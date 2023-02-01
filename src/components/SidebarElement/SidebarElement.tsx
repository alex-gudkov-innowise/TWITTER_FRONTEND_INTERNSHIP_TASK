import React from 'react';
import './SidebarElement.css';

interface SidebarElementProps {
    Icon: any;
    active?: boolean;
    text: string;
}

function SidebarElement({ Icon, active, text }: SidebarElementProps) {
    return (
        <div className="SidebarElement__container">
            <div className={`SidebarElement ${active ? 'SidebarElement__active' : ''}`}>
                <Icon />
                <h2>{text}</h2>
            </div>
        </div>
    );
}

export default SidebarElement;
