import React, { useRef, useEffect } from 'react';


export function Player({
    activeSong, isPlaying, volume=1, seekTime = 0, onEnded, onTimeUpdate, onLoadedData, repeat
}) {
    const ref = useRef(null);

    if (ref.current) {
        if (isPlaying) {
          ref.current.play();
        } else {
          ref.current.pause();
        }
      }

    useEffect(() => {
      ref.current.volume = volume;
    }, [volume]);
    useEffect(() => {
      ref.current.currentTime = seekTime;
    }, [seekTime]);

    //TODO: GET PLAY SRC
    return (
        <audio
            src={activeSong?.hub?.actions[1]?.uri}
            ref={ref}
            loop={repeat}
            onEnded={onEnded}
            onTimeUpdate={onTimeUpdate}
            onLoadedData={onLoadedData} />
    )
}