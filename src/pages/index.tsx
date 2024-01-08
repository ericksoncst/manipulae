import React from "react"
import Sidebar from "../components/Sidebar"
import styled from "styled-components"
import { useGetTopChartsQuery } from "redux/services/deezerCore"
import { ChartsResponse } from "types/response"


const Wrapper = styled.div`
    display: flex;
    position: relative;
`


function Discovery() {
    const response:ChartsResponse = useGetTopChartsQuery({})




    console.log('data', response.data)

    return (
            <Wrapper>
                <Sidebar/>
            </Wrapper>
    )
}

export default Discovery