import Track from ".";
import { SongMock } from "mocks";

export default {
    title: 'Components/Track',
    component: Track,
    args: {
        activeSong: SongMock,
        isActive: true,
        isPlaying: true
    }
}

export const Default = {}