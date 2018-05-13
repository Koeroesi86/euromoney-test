import assert from 'assert'
import {setErrorMessage} from "./actions";
import reducer, {initialState} from './reducer'

describe('The App reducer', () => {
    it('should set state on APP_SET_ERROR_MESSAGE', () => {
        const state = reducer(initialState, setErrorMessage('test'));

        assert.notEqual(state.error, null);
        assert.equal(state.error, 'test');
    });
});