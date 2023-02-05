import React from 'react';

import './Home.css';
import Feed from '../Feed/Feed';
import Sidebar from '../Sidebar/Sidebar';
import Widgets from '../Widgets/Widgets';

function Home() {
    return (
        <div className="Home">
            <Sidebar activeElement="Home" />
            <Feed />
            <Widgets />
        </div>
    );
}

export default Home;
