import { routerMiddleware } from 'react-router-redux'
import history from './history'
import app from '../components/app/middleware'
import storyOne from '../components/story-one/middleware'
import storyTwo from '../components/story-two/middleware'
import storyThree from '../components/story-three/middleware'
import storyFour from '../components/story-four/middleware'

const router = routerMiddleware(history);

export default [
    app,
    router,
    storyOne,
    storyTwo,
    storyThree,
    storyFour
]