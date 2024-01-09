import React from "react";
import * as S from './style'
import logo from '../../../../assets/deezer-circle.png'
import Image from "next/image";

type TrackProps = {
    isPlaying: boolean | false;
    isActive: boolean | false;
    activeSong: any;
    
}

export default function Track({ isPlaying, isActive, activeSong }: TrackProps) {
    return (
        <S.TrackWrapper>
            <S.ActiveSong isActive={isActive} isPlaying={isPlaying}>
                {
                    activeSong?.album?.cover_small ?
                    <S.ActiveSongCover src={activeSong?.album?.cover_medium} alt="Active song" /> :
                    <Image src={logo} alt="Active song" height={60} width={60} />

                }
            </S.ActiveSong>
            <S.SongTitleContainer>
               <S.SongTitle>
                 {activeSong?.title ? activeSong?.title : ''}
               </S.SongTitle>
   
             </S.SongTitleContainer>
        </S.TrackWrapper>
    )
}

