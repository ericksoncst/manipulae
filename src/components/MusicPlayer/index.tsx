import React, { useEffect, useState } from "react";
import * as S from './style'
import Track from "components/MusicPlayer/components/Track";
import Controlls from "./components/Controlls";
import Seekbar from "./components/SeekBar";
import { Player } from "./components/Player";
import VolumeBar from "./components/VolumeBar";
import { useDispatch, useSelector } from "react-redux";
import { nextSong, playPause, prevSong } from "redux/features/playerSlice";

export default function MusicPlayer() {

const { activeSong, currentSongs, currentIndex, isActive, isPlaying } = useSelector((state) => state.player);
  const [duration, setDuration] = useState(0);
  const [seekTime, setSeekTime] = useState(0);
  const [appTime, setAppTime] = useState(0);
  const [volume, setVolume] = useState(0.3);
  const [repeat, setRepeat] = useState(false);
  const [shuffle, setShuffle] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentSongs.length) dispatch(playPause(true));
  }, [currentIndex]);

  const handlePlayPause = () => {
    if (!isActive) return;

    if (isPlaying) {
      dispatch(playPause(false));
    } else {
      dispatch(playPause(true));
    }
  };

  const handleNextSong = () => {
    dispatch(playPause(false));

    if (!shuffle) {
      dispatch(nextSong((currentIndex + 1) % currentSongs.length));
    } else {
      dispatch(nextSong(Math.floor(Math.random() * currentSongs.length)));
    }
  };

  const handlePrevSong = () => {
    if (currentIndex === 0) {
      dispatch(prevSong(currentSongs.length - 1));
    } else if (shuffle) {
      dispatch(prevSong(Math.floor(Math.random() * currentSongs.length)));
    } else {
      dispatch(prevSong(currentIndex - 1));
    }
  };
    return (
        <S.MainContainer>
            <S.ContentContainer>
                <Track isActive isPlaying activeSong={activeSong} />
                <S.ControllsContainer>
                    <Controlls 
                         isPlaying={isPlaying}
                         isActive={Boolean(isActive)}
                         repeat={repeat}
                         setRepeat={Boolean(setRepeat)}
                         shuffle={shuffle}
                         setShuffle={Boolean(setShuffle)}
                         currentSongs={currentSongs}
                         handlePlayPause={handlePlayPause}
                         handlePrevSong={handlePrevSong}
                         handleNextSong={handleNextSong}
                    />
                    <Seekbar
                        value={appTime}
                        min="0"
                        max={duration}
                        onInput={(event) => setSeekTime(event.target.value)}
                        setSeekTime={setSeekTime}
                        appTime={appTime}
                    />
                    <Player
                        activeSong={activeSong}
                        volume={volume}
                        isPlaying={isPlaying}
                        seekTime={seekTime}
                        repeat={repeat}
                        currentIndex={currentIndex}
                        onEnded={handleNextSong}
                        onTimeUpdate={(event) => setAppTime(event.target.currentTime)}
                        onLoadedData={(event) => setDuration(event.target.duration)}
                    />
                </S.ControllsContainer>
            <VolumeBar value={volume} min="0" max="1" onChange={(event) => setVolume(event.target.value)} setVolume={setVolume} />
            </S.ContentContainer>
        </S.MainContainer>
    )
}