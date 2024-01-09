import React from "react";
import * as S from './style'
import { useGetTopChartsQuery } from "redux/services/deezerCore";
import { useSelector } from "react-redux";
import useSongsList from "hooks/useSongsList";

export default function Discovery() {

    const { activeSong, isPlaying } = useSelector((state) => state.player);

    const {data} = useGetTopChartsQuery({})
    const bestTracks = data?.tracks?.data;

    return (
        <S.MainContainer>
            <S.SongCardWrapper>
                {
                    useSongsList({
                        activeSong,
                        isPlaying,
                        data: bestTracks
                    })
                }
            </S.SongCardWrapper>        
        </S.MainContainer>
    )
}