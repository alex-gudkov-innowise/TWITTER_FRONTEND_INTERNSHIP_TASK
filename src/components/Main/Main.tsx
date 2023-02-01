import React from 'react';

import './Main.css';
import Feed from '../Feed/Feed';
import Sidebar from '../Sidebar/Sidebar';
import Widgets from '../Widgets/Widgets';

function Main() {
    return (
        <div className="Main">
            <Sidebar />
            <Feed />
            <Widgets />
        </div>
    );
}

export default Main;
