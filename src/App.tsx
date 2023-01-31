import React from 'react';

import Feed from './components/Feed/Feed';
import Sidebar from './components/Sidebar/Sidebar';
import Widgets from './components/Widgets/Widgets';

import './App.css';

function App() {
    return (
        <div className="App">
            <Sidebar />
            <Feed />
            <Widgets />
        </div>
    );
}

export default App;
