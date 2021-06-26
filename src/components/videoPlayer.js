import React, {useContext, useRef} from 'react'
import { SocketContext } from '../utility/socketContext'

const VideoPlayer = () => {
    const {myVideo} = useContext(SocketContext)
    return(
        <div className="video_container">
            <div className="my_video">
                <video ref={myVideo} autoPlay={false}></video>
            </div>

            {/* <div className="users_video">
                Users Stream
            </div> */}
        </div>
    )
}

export default VideoPlayer