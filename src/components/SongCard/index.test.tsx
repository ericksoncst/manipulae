import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { SongCard } from "./index";

const mockStore = configureStore([]);

    const song = {
      id: 1,
      title: "Test Song",
      artist: {
        name: "Test Artist",
      },
      album: {
        cover_medium: "test-image.jpg",
      },
    };


describe("SongCard component", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      player: {
        favorites: [],
      },
    });
  });

  test("renders SongCard component", () => {

    const { getByText } = render(
      <Provider store={store}>
        <SongCard 
        isPlaying={true}
        activeSong={song}
        data={[song]}
        i={0}
        song={song} />
      </Provider>
    );
    expect(getByText("Test Artist")).toBeInTheDocument();
    expect(getByText("Test Song")).toBeInTheDocument();
  });

  test("handles play click", () => {

    const { queryByTestId } = render(
      <Provider store={store}>
        <SongCard 
         isPlaying={true}
         activeSong={song}
         data={[song]}
         i={0}
        song={song} />
      </Provider>
    );

    const button = queryByTestId('play-songcard');
    fireEvent.click(button);

  });

});
