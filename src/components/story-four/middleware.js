import axios from 'axios'
import {storyFourReceiveNews} from './actions'
import {CUSTOM_API_URL} from '../../configurations/constants'
import {appRequestError, INIT_APP} from '../app/actions'

export default store => next => action => {
    if (action.type === INIT_APP) {
        axios
            .get(CUSTOM_API_URL)
            .then(response => {
                const {data} = response;

                if (data.status === 'ok') {
                    store.dispatch(storyFourReceiveNews(data));
                }
            })
            .catch(e => store.dispatch(appRequestError(e.message)))
    }

    next(action);
}