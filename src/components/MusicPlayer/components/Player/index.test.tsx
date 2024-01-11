
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Player } from './index';
import { SongMock } from '../../../../mocks/index'

describe('Player', () => {
  it('renders audio element with the correct source', () => {
    render(
      <Player
        activeSong={SongMock}
        isPlaying={false}
        volume={1}
        seekTime={0}
        onEnded={() => {}}
        onTimeUpdate={() => {}}
        onLoadedData={() => {}}
        repeat={false}
      />
    );

    const audioElement = screen.getByTestId('play-pause-button');
    expect(audioElement).toBeInTheDocument();
    expect(audioElement).toHaveAttribute('src', SongMock.preview);
  });


  it('sets the volume and seek time of the audio element', () => {
    const { rerender } = render(
      <Player
        activeSong={SongMock}
        isPlaying={false}
        volume={1}
        seekTime={0}
        onEnded={() => {}}
        onTimeUpdate={() => {}}
        onLoadedData={() => {}}
        repeat={false}
      />
    );

    const audioElement = screen.getByTestId('play-pause-button');
    rerender(
      <Player
        activeSong={SongMock}
        isPlaying={false}
        volume={0.5} // Set volume to 50%
        seekTime={10} // Set seek time to 10 seconds
        onEnded={() => {}}
        onTimeUpdate={() => {}}
        onLoadedData={() => {}}
        repeat={false}
      />
    );

    expect(audioElement).toHaveProperty('volume', 0.5);
    expect(audioElement.currentTime).toEqual(10);
  });
});