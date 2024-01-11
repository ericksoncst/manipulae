import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Controlls from './index';
import { SongMock } from '../../../../mocks/index'

describe('Controlls component', () => {
  test('renders controlls correctly', () => {
    const props = {
      isPlaying: true,
      isActive: true,
      repeat: false,
      setRepeat: jest.fn(),
      shuffle: false,
      setShuffle: jest.fn(),
      currentSongs: [SongMock],
      handlePlayPause: jest.fn(),
      handlePrevSong: jest.fn(),
      handleNextSong: jest.fn(),
    };

    const { getByTestId, getByText } = render(<Controlls {...props} />);

    expect(getByTestId('arrow-repeat')).toBeInTheDocument();
    fireEvent.click(getByTestId('arrow-repeat'));
    expect(props.setRepeat).toHaveBeenCalled();

    expect(getByTestId('previous-song')).toBeInTheDocument();
    fireEvent.click(getByTestId('previous-song'));
    expect(props.handlePrevSong).toHaveBeenCalled();

    expect(getByTestId('play-pause')).toBeInTheDocument();
    fireEvent.click(getByTestId('play-pause'));
    expect(props.handlePlayPause).toHaveBeenCalled();

    expect(getByTestId('shuffle')).toBeInTheDocument();
    fireEvent.click(getByTestId('shuffle'));
    expect(props.setShuffle).toHaveBeenCalled();
  });
});