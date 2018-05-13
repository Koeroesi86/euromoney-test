import React from 'react'
import {shallow} from 'enzyme'
import assert from 'assert'
import moment from 'moment'
import {StoryTwo} from './StoryTwo'
import LoadingIndicator from '../loading-indicator/LoadingIndicator'
import NewsResponsive from '../news-responsive/NewsResponsive'

describe('The StoryTwo component', () => {
    const news = [
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
        const result = shallow(<StoryTwo/>);

        assert.equal(result.find('.StoryTwo').length, 1);
        assert(result.containsMatchingElement(<LoadingIndicator/>));
    });

    it('renders news', () => {
        const result = shallow(<StoryTwo news={news}/>);

        assert.equal(result.find('h1').length, 1);
        assert.equal(result.containsMatchingElement(<LoadingIndicator/>), false);
        assert(result.containsMatchingElement(<NewsResponsive news={news}/>));
    });
});
