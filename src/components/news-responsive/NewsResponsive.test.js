import React from 'react'
import {shallow} from 'enzyme'
import assert from 'assert'
import moment from 'moment'
import NewsResponsive from './NewsResponsive'

describe('The NewsResponsive component', () => {
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
        const result = shallow(<NewsResponsive/>);

        assert.equal(result.find('.NewsResponsive').length, 1);
    });

    it('renders all items', () => {
        const result = shallow(<NewsResponsive news={news}/>);

        assert.equal(result.find('.NewsResponsive-item').length, 3);
    });
});
