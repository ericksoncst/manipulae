import React from 'react';
import { BsFillVolumeUpFill, BsVolumeDownFill, BsFillVolumeMuteFill } from 'react-icons/bs';
import * as S from './style'


const VolumeBar = ({ value = 1, min, max, onChange, setVolume }) => (
  <S.Container>
    {value <= 1 && value > 0.5 && <BsFillVolumeUpFill size={25} color="#000" onClick={() => setVolume(0)} />}
    {value <= 0.5 && value > 0 && <BsVolumeDownFill size={25} color="#000" onClick={() => setVolume(0)} />}
    {value === 0 && <BsFillVolumeMuteFill size={25} color="#000" onClick={() => setVolume(1)} />}
    <S.Input
      type="range"
      step="any"
      value={value}
      min={min}
      max={max}
      onChange={onChange}
    />
  </S.Container>
);

export default VolumeBar;
