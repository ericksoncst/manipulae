import React from "react";
import * as S from './style'
import logo from '../../../../assets/deezer-circle.png'

type TrackProps = {
    isPlaying: boolean | false;
    isActive: boolean | false;
    activeSong: any;
    
}

export default function Track({ isPlaying, isActive, activeSong }: TrackProps) {
    return (
        <S.TrackWrapper>
            <S.ActiveSong isActive isPlaying>
                {/* <S.ActiveSongCover src={activeSong?.cover} /> */}
                <S.ActiveSongCover src={logo} alt="Active song" width={60} height={60}/>
            </S.ActiveSong>
            <S.SongTitleContainer>
               <S.SongTitle>
                 {activeSong?.title ? activeSong?.title : ''}
               </S.SongTitle>
   
             </S.SongTitleContainer>
        </S.TrackWrapper>
    )
}

