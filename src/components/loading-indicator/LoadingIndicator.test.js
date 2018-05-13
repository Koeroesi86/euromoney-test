import React from 'react'
import {shallow} from 'enzyme'
import assert from 'assert'
import LoadingIndicator from './LoadingIndicator'

describe('The LoadingIndicator component', () => {
    it('renders', () => {
        const result = shallow(<LoadingIndicator/>);

        assert.equal(result.find('.LoadingIndicator').length, 1);
    });
});
