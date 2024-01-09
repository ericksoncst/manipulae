import React from "react";
import * as S from './style'

export default function SearchBar({
    value,
    handleChange
}: { value: string, handleChange: () => void }) {
    return (
        <S.Form onSubmit={()=> {}} autoComplete="off">
            <S.Label htmlFor="search-field">
                Buscar músicas
            </S.Label>
            <S.InputWrapper>
                <S.SearchIcon color="#4A235A" aria-hidden="true" />
                <S.SearchInput 
                name="search-field"
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

