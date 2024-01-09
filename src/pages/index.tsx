import React, { useState } from "react"
import Sidebar from "../components/Sidebar"
import styled from "styled-components"
import Discovery from "views/Discovery"
import MusicPlayer from "components/MusicPlayer"

import * as S from './style'
import SearchBar from "components/SearchBar"

const Wrapper = styled.div`
    display: flex;
    position: relative;
`


function Home() {

    const [searchTerm, setSearchTerm] = useState('')

    function handleSearch(e) {
        setSearchTerm(e.target.value)
    }

    return (
            <Wrapper>
                <Sidebar/>
                <S.ContentContainer>
                    <SearchBar handleChange={handleSearch} value={searchTerm} />
                    <S.ViewContent>
                    <Discovery />
                    </S.ViewContent>
                </S.ContentContainer>
                <MusicPlayer />
            </Wrapper>
    )
}

export default Home