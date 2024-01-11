import React from 'react';
import * as S from './style'

type ControllsProps = {
    isPlaying: boolean;
    isActive: boolean;
    repeat: boolean,
    setRepeat: ()=> boolean;
     shuffle: boolean; 
     setShuffle: ()=> boolean;
    currentSongs: [];
    handlePlayPause: () => void;
     handlePrevSong:  () => void;
     handleNextSong:  () => void;
}

export default function Controlls({
    isPlaying, repeat, setRepeat, shuffle, setShuffle, currentSongs, handlePlayPause, handlePrevSong, handleNextSong
}: ControllsProps) {
    return (
        <S.Container>
            <S.ArrowRepeat
            data-testid="arrow-repeat"
            size={20} color={repeat ? 'gray' : 'black'} onClick={() => setRepeat((prev) => !prev)}/>
            {currentSongs?.length && <S.PreviousSong data-testid="previous-song" size={30} color="#000"  onClick={handlePrevSong} />}
            {isPlaying ? (
            <S.PauseSong data-testid="play-pause" size={45} color="#000" onClick={handlePlayPause}  />
            ) : (
            <S.PlaySong size={45} color="#000" onClick={handlePlayPause}  />
            )}
            {currentSongs?.length && <S.NextSong size={30} color="#000" onClick={handleNextSong} />}
            <S.Shuffle data-testid="shuffle" size={20} color={shuffle ? 'gray' : 'black'} onClick={() => setShuffle((prev) => !prev)} />
        </S.Container>
    )
}