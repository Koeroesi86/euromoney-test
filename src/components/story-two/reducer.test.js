import assert from 'assert'
import {storyTwoReceiveNews} from "./actions";
import reducer, {initialState} from './reducer'

describe('The StoryTwo reducer', () => {
    it('should set state on STORY_TWO_RECEIVE_NEWS', () => {
        const news = [
            {
                "author": "John Doe",
                "title": "Lorem ipsum dolor sit amet",
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...",
                "url": "http://exammple.com",
                "urlToImage": "http://exammple.com/sample.jpg",
                "publishedAt": "2018-04-10T10:50:59Z"
            },
            {
                "author": "John Doe",
                "title": "Lorem ipsum dolor sit amet",
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...",
                "url": "http://exammple.com",
                "urlToImage": "http://exammple.com/sample.jpg",
                "publishedAt": "2018-04-10T10:50:59Z"
            },
            {
                "author": "John Doe",
                "title": "Lorem ipsum dolor sit amet",
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...",
                "url": "http://exammple.com",
                "urlToImage": "http://exammple.com/sample.jpg",
                "publishedAt": "2018-04-10T10:50:59Z"
            },
        ];
        const state = reducer(initialState, storyTwoReceiveNews(news));

        assert.notEqual(state.news.length, 0);
        assert.equal(state.news.length, news.length);
        assert.equal(state.news[0].author, news[0].author);
    });
});