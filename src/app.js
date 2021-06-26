import React from 'react'
import VideoPlayer from './components/videoPlayer'

const App = (props) => {
    return(
        <div className="main-app center container">
            <h1>Chat App</h1>
            <VideoPlayer />
        </div>
    )
}

export default App