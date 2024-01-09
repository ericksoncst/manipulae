import React from "react";
import * as S from './style'
import { SongCard } from "components/SongCard";
import { useGetTopChartsQuery } from "redux/services/deezerCore";
import { useSelector } from "react-redux";

export default function Discovery() {

    const { activeSong, isPlaying } = useSelector((state) => state.player);

    const {data} = useGetTopChartsQuery({})
    const bestTracks = data?.tracks?.data;

    return (
        <S.MainContainer>
            <S.SongCardWrapper>
                {
                    bestTracks?.map((song, i) => <SongCard 
                        activeSong={activeSong}
                        isPlaying={isPlaying}
                        data={bestTracks}
                        i={i}
                        song={song}/>)
                }
            </S.SongCardWrapper>
        </S.MainContainer>
    )
}