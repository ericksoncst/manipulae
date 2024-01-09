'use-client'

import React  from "react"

import Discovery from "views/Discovery"

import * as S from './style'
import { useSelector } from "react-redux"

function Favorites() {

    const { favorites } = useSelector(state => state?.player);


    return (
        <S.ContentContainer>
            <h1>Favoritos</h1>
            <S.ViewContent>
            <Discovery data={favorites} loading={false} />
            </S.ViewContent>
        </S.ContentContainer>
    )
}

export default Favorites