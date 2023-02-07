import React from 'react';

import './Home.css';
import Feed from '../Feed/Feed';
import Sidebar from '../sidebar/sidebar';
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
