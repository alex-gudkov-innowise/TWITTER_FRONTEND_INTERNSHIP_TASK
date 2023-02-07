import React from 'react';

import './home.css';
import Sidebar from '../sidebar/sidebar';
import Widgets from '../Widgets/Widgets';

import HomeFeed from './home-feed/home-feed';
import HomeHeader from './home-header/home-header';

function Home() {
    return (
        <div className="Home">
            <Sidebar activeElement="Home" />
            <div className="Home__body">
                <HomeHeader />
                <HomeFeed />
            </div>
            <Widgets />
        </div>
    );
}

export default Home;
