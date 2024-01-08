import Sidebar from "../components/Sidebar"
import styled from "styled-components"

const Wrapper = styled.div`
    display: flex;
    position: relative;
`

function Discovery() {
    return (
        <Wrapper>
            <Sidebar/>
        </Wrapper>
    )
}

export default Discovery