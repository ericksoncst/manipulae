import React from "react";
import * as S from './style'
import { SongCard } from "components/SongCard";
import { useGetTopChartsQuery } from "redux/services/deezerCore";

export default function Discovery() {

    const {data} = useGetTopChartsQuery({})
    const bestTracks = data?.tracks?.data;


    return (
        <S.MainContainer>
            <S.SongCardWrapper>
                {
                    bestTracks?.map(song => <SongCard song={song}/>)
                }
            </S.SongCardWrapper>
        </S.MainContainer>
    )
}