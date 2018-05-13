import axios from 'axios'
import {storyOneReceiveNews} from './actions'
import {LOCAL_FEED_URL} from '../../configurations/constants'
import {appRequestError, INIT_APP} from '../app/actions'

export default store => next => action => {
    if (action.type === INIT_APP) {
        axios
            .get(LOCAL_FEED_URL)
            .then(response => {
                const {data} = response;

                if (data.status === 'ok') {
                    store.dispatch(storyOneReceiveNews(data.articles));
                }
            })
            .catch(e => store.dispatch(appRequestError(e.message)))
    }

    next(action);
}