import React from 'react';
import * as S from './style'

type PlayPauseProps = {
    isPlaying: boolean; 
    activeSong: boolean
    song: any;
    handlePause: () => void; 
    handlePlay: () => void;
}

const PlayPause = ({ isPlaying, activeSong, song, handlePause, handlePlay }: PlayPauseProps) => (isPlaying && activeSong?.title === song.title ? (
  <S.FPause
    size={35}
    onClick={handlePause}
  />
) : (
  <S.FPlay
    size={35}
    onClick={handlePlay}
  />
));

export default PlayPause;
