import assert from 'assert'
import configureMockStore from 'redux-mock-store'
import sinon from 'sinon'
import axios from 'axios'
import middleware from './middleware'
import {initApp} from '../app/actions'

const middlewares = [middleware];
const mockStore = configureMockStore(middlewares);

describe('StoryFour middleware', () => {
    let sandbox;
    const mockResponse = {
        status: 'ok',
        data: {
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
        }
    };
    const resolved = new Promise((r) => r(mockResponse));

    beforeAll(() => {
        sandbox = sinon.createSandbox();
        sandbox.stub(axios, 'get').returns(resolved);
    });

    afterAll(() => {
        sandbox.restore();
    });

    it('should call ajax request on APP_INIT', () => {
        const store = mockStore({});
        sinon.spy(store, 'dispatch');

        store.dispatch(initApp());

        setTimeout(() => {
            assert(axios.get.calledOnce);
            assert.equal(store.dispatch.callCount, 2);
        }, 1);
    })
});