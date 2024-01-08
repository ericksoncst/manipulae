import React from "react"
import Sidebar from "../components/Sidebar"
import styled from "styled-components"
import Discovery from "views/Discovery"

const Wrapper = styled.div`
    display: flex;
    position: relative;
`


function Home() {
    return (
            <Wrapper>
                <Sidebar/>
                <Discovery />
            </Wrapper>
    )
}

export default Home