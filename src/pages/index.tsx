import React from "react"
import Sidebar from "../components/Sidebar"
import styled from "styled-components"
import Discovery from "views/Discovery"
import MusicPlayer from "components/MusicPlayer"

import * as S from './style'

const Wrapper = styled.div`
    display: flex;
    position: relative;
`


function Home() {
    return (
            <Wrapper>
                <Sidebar/>
                <S.ContentContainer>
                    <S.ViewContent>
                    <Discovery />
                    </S.ViewContent>
                </S.ContentContainer>
                <MusicPlayer />
            </Wrapper>
    )
}

export default Home