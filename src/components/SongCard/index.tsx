import React from "react"
import * as S from './style'
import PlayPause from "components/PlayPause"
import { useDispatch, useSelector } from "react-redux";
import { playPause, setActiveSong, setFavorites } from "redux/features/playerSlice";

export const SongCard = ({song, isPlaying, activeSong, data, i }) => {

    const { favorites } = useSelector(state => state?.player);
 
    const dispatch = useDispatch();

    const handlePauseClick = () => {
      dispatch(playPause(false));
    };
  
    const handlePlayClick = () => {
      dispatch(setActiveSong({ song, data, i }));
      dispatch(playPause(true));
    };

    const saveToFavorites = () => {
        const newArr = [...favorites]
        const index = favorites.indexOf(song);
        if (index > -1) { 
            newArr.splice(song, 1)
        } else newArr.push(song)
        
        dispatch(setFavorites([...newArr]))
    }

    function checkIsFavorite() {
        return favorites.find(fav => {
            if(fav.id === song.id) return true
            return false
        })
    }

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
                <S.AlbumCover src={song?.album?.cover_medium} alt="album-cover"  />
            </S.PlayPauseWrapper>
            <S.InfoContainer >
            <S.StyledFaHeart color={checkIsFavorite() ? '#B50DF5' : '#CECECE'} onClick={saveToFavorites} />
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
