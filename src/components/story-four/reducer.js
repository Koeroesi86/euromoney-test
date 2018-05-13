import {STORY_FOUR_RECEIVE_NEWS} from './actions'
import {CUSTOM_API_ARTICLES_FIELD, CUSTOM_API_ARTICLES_MAPPING} from '../../configurations/constants'

const initialState = {
    news: []
};

export default (state = initialState, action) => {
    if (action.type === STORY_FOUR_RECEIVE_NEWS) {
        const articles = action.data[CUSTOM_API_ARTICLES_FIELD];

        const news = articles.slice().map(item => {
            const mappedItem = {};

            Object.getOwnPropertyNames(CUSTOM_API_ARTICLES_MAPPING).map(prop => {
                const mapper = CUSTOM_API_ARTICLES_MAPPING[prop];

                mappedItem[prop] = mapper(item);

                return prop;
            });

            return mappedItem;
        });

        return Object.assign({}, state, {news});
    }

    return state;
}