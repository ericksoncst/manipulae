import React, { useRef, useEffect } from 'react';


type PlayerProps = {
  activeSong: any;
  isPlaying: boolean;
  volume: number;
  seekTime: number;
  onEnded: () => void;
  onTimeUpdate:  () => void;
  onLoadedData: () => void;
  repeat: boolean
}

export function Player({
    activeSong, isPlaying, volume=1, seekTime = 0, onEnded, onTimeUpdate, onLoadedData, repeat
}: PlayerProps) {


    const ref = useRef(null);

    if (ref.current) {
        if (isPlaying) {
          ref.current?.play();
        } else {
          ref.current?.pause();
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
            src={activeSong?.preview}
            ref={ref}
            loop={repeat}
            onEnded={onEnded}
            onTimeUpdate={onTimeUpdate}
            onLoadedData={onLoadedData} />
    )
}