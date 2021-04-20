import React, { useState } from 'react';
import AudioReactRecorder, { RecordState } from 'audio-react-recorder';
import axios from 'axios';
import './Feed.css';

import AudioCard from '../../components/audioCard/AudioCard';

const SERVER_URL = 'http://localhost:5000'

const Feed = (props) => {
    const [state, setState] = useState({
        a: null,
        recordState: null,
    });

    const start = () => {
        setState({
            recordState: RecordState.START
        })
    }

    const stop = () => {
        console.log('2')
        setState({
            recordState: RecordState.STOP,
        })
    }

    //audioData contains blob and blobUrl
    const onStop = async (audioData) => {
        setState({
            a: audioData.url
        })
        // const temp = await axios.get(SERVER_URL);
        // console.log(temp)
        const temp = await axios.post(SERVER_URL, {audioData});
        console.log(temp);
    }

    return (
        <div className="feedRoot">
            <div className="feedMain">
                <AudioCard state={state} />
                <AudioReactRecorder state={state.recordState} onStop={onStop} />

                <button onClick={start}>Start</button>
                <button onClick={stop}>Stop</button>
            </div>
            <div className="feedSidebar">
                asdasd
          </div>
        </div>
    );
}

export default Feed;