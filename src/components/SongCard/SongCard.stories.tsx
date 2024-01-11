import { Provider } from "react-redux"
import { SongCard } from "."
import { store } from "redux/store"
import { SongMock } from "mocks"

export default {
    title: 'Components/SongCard',
    component: SongCard,
    args: {
        song: SongMock
    },
    decorators : [
        (Story) => (<Provider store={store}><Story/></Provider>)
      ]
}

export const Default = {}