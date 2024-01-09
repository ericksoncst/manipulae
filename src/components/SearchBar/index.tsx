import React from "react";
import * as S from './style'
import { useRouter } from "next/router";

export default function SearchBar({
    handleChange,value
}) {

    const route = useRouter()

    return (
        <S.Form onSubmit={async (e)=> {
            e.preventDefault()
            route.push({
                pathname: '/results',
                query: { term: value }
            }, '/results');
        }} autoComplete="off">
            <S.Label htmlFor="search-field">
                Buscar músicas
            </S.Label>
            <S.InputWrapper>
                <S.SearchIcon color="#4A235A" aria-hidden="true" />
                <S.SearchInput 
                    autoComplete="off"
                    id="search-field"
                    placeholder="Buscar músicas"
                    type="search"
                    value={value}
                    onChange={handleChange}
                />


            </S.InputWrapper>
        </S.Form>
    )
}

