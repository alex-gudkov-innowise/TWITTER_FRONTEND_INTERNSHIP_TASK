import React, { BaseSyntheticEvent } from 'react';

import './CreateTweetWindow.css';

interface CreateTweetWindowProps {
    setVisible?: any;
    visible: boolean;
}

function CreateTweetWindow({ setVisible, visible }: CreateTweetWindowProps) {
    return (
        <div
            className={
                visible ? 'CreateTweetWindow__background CreateTweetWindow__isActive' : 'CreateTweetWindow__background'
            }
            onClick={() => setVisible(false)}
        >
            <div className="CreateTweetWindow" onClick={(event: BaseSyntheticEvent) => event.stopPropagation()}>
                {/* content */}
            </div>
        </div>
    );
}

export default CreateTweetWindow;
