import React from 'react'
import {shallow} from 'enzyme'
import assert from 'assert'
import moment from 'moment'
import News from './News'

describe('The News component', () => {
    const news = [
        {
            "author": "John Doe",
            "title": "Lorem ipsum dolor sit amet",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...",
            "url": "http://exammple.com",
            "urlToImage": "http://exammple.com/sample.jpg",
            "publishedAt": moment("2018-04-10T10:50:59Z")
        },
        {
            "author": "John Doe",
            "title": "Lorem ipsum dolor sit amet",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...",
            "url": "http://exammple.com",
            "urlToImage": "http://exammple.com/sample.jpg",
            "publishedAt": moment("2018-04-10T10:50:59Z")
        },
        {
            "author": "John Doe",
            "title": "Lorem ipsum dolor sit amet",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...",
            "url": "http://exammple.com",
            "urlToImage": "http://exammple.com/sample.jpg",
            "publishedAt": moment("2018-04-10T10:50:59Z")
        },
    ];

    it('renders', () => {
        const result = shallow(<News/>);

        assert.equal(result.find('.News').length, 1);
    });

    it('renders all items', () => {
        const result = shallow(<News news={news}/>);

        assert.equal(result.find('.News-item').length, 3);
    });
});
