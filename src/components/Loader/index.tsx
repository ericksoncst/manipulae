import React from "react";
import styled from "styled-components";
import loader from '../../assets/loader.svg'
import Image from "next/image";

const LoadContainer = styled.div`
    width: 100%;
    height: 100%;
    justify-content: center;
    position: absolute;
    right: 0;
    left: 0;
    top: 60%;
`

export default function Loader() {

    return  (
        <LoadContainer>
            <Image alt="loader" fill src={loader} />
        </LoadContainer>
    )
}