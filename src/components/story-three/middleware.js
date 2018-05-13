import axios from 'axios'
import {storyThreeReceiveNews} from './actions'
import {NEWS_API_URL} from '../../configurations/constants'
import {appRequestError, INIT_APP} from '../app/actions'

export default store => next => action => {
    if (action.type === INIT_APP) {
        axios
            .get(NEWS_API_URL)
            .then(response => {
                const {data} = response;

                if (data.status === 'ok') {
                    store.dispatch(storyThreeReceiveNews(data.articles));
                }
            })
            .catch(e => store.dispatch(appRequestError(e.message)))
    }

    next(action);
}