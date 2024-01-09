'use-client'

import React, { useEffect, useState } from "react";
import * as S from './style'
import { useSelector } from "react-redux";
import useSongsList from "hooks/useSongsList";
import Loader from "components/Loader";

export default function Discovery({data, loading = false}: { data: any, loading: boolean }) {

    const { activeSong, isPlaying } = useSelector((state) => state.player);


    if(loading) return <Loader /> 

    return (
        <S.MainContainer>
            <S.SongCardWrapper>
                {
                    !!data && useSongsList({
                        activeSong,
                        isPlaying,
                        data
                    })
                }
            </S.SongCardWrapper>        
            
        </S.MainContainer>
    )
}