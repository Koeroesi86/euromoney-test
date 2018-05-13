import assert from 'assert'
import {storyFourReceiveNews} from "./actions";
import reducer from './reducer'

describe('StoryFour reducer', () => {
    it('should set state on STORY_FOUR_RECEIVE_NEWS', () => {
        const data = {
            articles: [
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
            ]
        };
        const state = reducer({}, storyFourReceiveNews(data));

        assert.notEqual(state.news.length, 0);
        assert.equal(state.news.length, data.articles.length);
        assert.equal(state.news[0].author, data.articles[0].author);
    });
});