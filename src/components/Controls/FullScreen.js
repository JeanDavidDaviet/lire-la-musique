import React, { useState } from 'react';
import Fullscreen from '@mui/icons-material/Fullscreen';
import FullscreenExit from '@mui/icons-material/FullscreenExit';

const FullScreen = () => {
    const [fullscreen, setFullscreen] = useState(false);
    const toggleFullScreen = () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
            setFullscreen(true);
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
                setFullscreen(false);
          }
        }
    }

    return (
        fullscreen ?
            <FullscreenExit className="fullscreen fullscreen--exit" onClick={() => toggleFullScreen()}></FullscreenExit> :
            <Fullscreen className="fullscreen" onClick={() => toggleFullScreen()}></Fullscreen>
  )
}


export default FullScreen;