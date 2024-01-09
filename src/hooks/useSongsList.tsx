import React from "react";
import { SongCard } from "components/SongCard";
import styled from "styled-components";


export default function useSongsList({
    activeSong,
    isPlaying,
    data,
}: {
    activeSong: any,
    isPlaying: boolean,
    data: []
}) {
    return (<SongCardWrapper>
        {
            data?.map((song, i) => 
            <SongCard
            activeSong={activeSong}
            isPlaying={isPlaying}
            data={data}
            i={i}
            song={song}/>
        )
        }
    </SongCardWrapper>)
}

const SongCardWrapper = styled.div`
    display: flex; 
    flex-wrap: wrap; 
    gap: 2rem; 
    justify-content: center; 

    @media (min-width: 640px) { 
    justify-content: flex-start; 
    }
`