import {STORY_THREE_RECEIVE_NEWS} from './actions'
import moment from "moment/moment";

export const initialState = {
    news: []
};

export default (state = initialState, action) => {
    if (action.type === STORY_THREE_RECEIVE_NEWS) {
        const news = action.news.slice().map(item => {
            return {
                author: item.author,
                title: item.title,
                description: item.description,
                url: item.url,
                urlToImage: item.urlToImage,
                publishedAt:
                    moment(
                        item.publishedAt,
                        [
                            "YYYY-MM-DDTHH:mm:ssZ",
                            "YYYY-MM-DDTHH:mm:ss.SSSZ"
                        ],
                        true
                    )
            }
        });

        return Object.assign({}, state, {news});
    }

    return state;
}