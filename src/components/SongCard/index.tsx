import React from "react"
import * as S from './style'
import PlayPause from "components/PlayPause"
import { useDispatch } from "react-redux";
import { playPause, setActiveSong } from "redux/features/playerSlice";

export const SongCard = ({song, isPlaying, activeSong, data, i }) => {


    const dispatch = useDispatch();

    const handlePauseClick = () => {
      dispatch(playPause(false));
    };
  
    const handlePlayClick = () => {
      dispatch(setActiveSong({ song, data, i }));
      dispatch(playPause(true));
    };

    return (
        <S.Container>
            <S.PlayPauseWrapper>
                <S.PlayPauseContainer>
                    <PlayPause
                    isPlaying={isPlaying}
                    activeSong={activeSong}
                    song={song}
                    handlePause={handlePauseClick}
                    handlePlay={handlePlayClick}
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
