import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react';
import './SignUpInfoList.css';

function SignUpInfoList() {
    return (
        <div className="SignUpInfoList">
            <div className="SignUpInfoList__element">
                <SearchIcon className="SignUpInfoList__element__icon" />
                <span className="SignUpInfoList__element__text">Follow your interests.</span>
            </div>
            <div className="SignUpInfoList__element">
                <PeopleOutlineIcon className="SignUpInfoList__element__icon" />
                <span className="SignUpInfoList__element__text">Hear what people are talking about.</span>
            </div>
            <div className="SignUpInfoList__element">
                <ChatBubbleOutlineIcon className="SignUpInfoList__element__icon" />
                <span className="SignUpInfoList__element__text">Join the conversation.</span>
            </div>
        </div>
    );
}

export default SignUpInfoList;
