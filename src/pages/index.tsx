import React, { useState }  from "react"
import Discovery from "views/Discovery"

import * as S from './style'
import SearchBar from "components/SearchBar"
import { useGetTopChartsQuery } from "redux/services/deezerCore"


function Home() {

    const [term, setTerm] = useState('')
    const {data, isLoading} = useGetTopChartsQuery({})


    return (
        <S.ContentContainer>
            <SearchBar value={term} handleChange={e => setTerm(e.target.value)}  />
            <S.ViewContent>
            <Discovery data={data?.tracks?.data} loading={isLoading} />
            </S.ViewContent>
        </S.ContentContainer>
    )
}

export default Home