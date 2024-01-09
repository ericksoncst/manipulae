'use-client'

import React  from "react"

import Discovery from "views/Discovery"
import { useRouter } from "next/router"
import { useGetSongsBySearchQuery } from "redux/services/deezerCore"

import * as S from './style'

function Results() {

    const route = useRouter();
    const { data, isLoading } = useGetSongsBySearchQuery(route.query.term)


    return (
        <S.ContentContainer>
            <h1>Musicas encontradas</h1>
            <S.ViewContent>
            <Discovery data={data?.data} loading={isLoading} />
            </S.ViewContent>
        </S.ContentContainer>
    )
}

export default Results