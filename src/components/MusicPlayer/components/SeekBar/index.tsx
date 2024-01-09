import React from 'react';
import * as S from './style'

export default function Seekbar({value = 0, min, max = 0, onInput, setSeekTime, appTime }) {

    const getTime = (time) => `${Math.floor(time / 60)}:${(`0${Math.floor(time % 60)}`).slice(-2)}`;

    return (
        <S.Container >
        <S.Less type="button" onClick={() => setSeekTime(appTime - 5)} >
          -
        </S.Less>
        <S.Text>{value === 0 ? '0:00' : getTime(value)}</S.Text>
        <S.Input
          type="range"
          step="any"
          value={value}
          min={min}
          max={max}
          onInput={onInput}
        />
        <S.Text>{max === 0 ? '0:00' : getTime(max)}</S.Text>
        <S.Pluss type="button" onClick={() => setSeekTime(appTime + 5)} >
          +
        </S.Pluss>
      </S.Container>
    )
}
