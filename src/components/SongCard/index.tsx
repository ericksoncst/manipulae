import React from "react"
import * as S from './style'
import PlayPause from "components/PlayPause"

export const SongCard = ({song}) => {
    return (
        <S.Container>
            <S.PlayPauseWrapper>
                <S.PlayPauseContainer>
                    <PlayPause
                    isPlaying={true}
                    activeSong={true}
                    song={{}}
                    handlePause={() =>  {}}
                    handlePlay={() => {}}
                    />
                </S.PlayPauseContainer>
                <S.AlbumCover src={song?.album?.cover_medium} alt=""  />
            </S.PlayPauseWrapper>
            <S.InfoContainer >

            <S.ArtitsName>
                    {song?.artist?.name}
            </S.ArtitsName>
            <S.SongTitle>
                    {song?.title}
            </S.SongTitle>
            </S.InfoContainer>
        </S.Container>
    )
}
