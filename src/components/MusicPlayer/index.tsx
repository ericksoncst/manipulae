import React from "react";
import * as S from './style'
import Track from "components/MusicPlayer/components/Track";
import Controlls from "./components/Controlls";
import Seekbar from "./components/SeekBar";
import { Player } from "./components/Player";
import VolumeBar from "./components/VolumeBar";

export default function MusicPlayer() {
    return (
        <S.MainContainer>
            <S.ContentContainer>
                <Track isActive isPlaying activeSong={{}} />
                <S.ControllsContainer>
                    <Controlls 
                        isPlaying={false}
                        repeat={false}
                        setRepeat={()=> {}}
                        shuffle={false}
                        setShuffle={()=> {}}
                        currentSongs={[]}
                        handlePlayPause={()=> {}}
                        handlePrevSong={()=> {}}
                        handleNextSong={()=> {}}
                    />
                    <Seekbar />
                    <Player />
                </S.ControllsContainer>
            <VolumeBar />
            </S.ContentContainer>
        </S.MainContainer>
    )
}