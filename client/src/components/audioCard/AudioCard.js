import React from 'react';
import Card from '../shared/card/Card';
import './AudioCard.css';

const AudioCard = (props) => {
    return <Card>
        <div className="userDataContainer">
            <div className="userLogo">
                <div className="innerCircle" />
                <p>User Name</p>
            </div>
        </div>
        <audio className="audio" src={props.state.a} controls />
    </Card>
}

export default AudioCard;