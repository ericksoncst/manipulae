import { Provider } from "react-redux"
import MusicPlayer from "."
import { store } from "redux/store"

export default {
    title: 'Components/MusicPlayer',
    component: MusicPlayer,
    decorators : [
        (Story) => (<Provider store={store}><Story/></Provider>)
      ]
}

export const Default = {}