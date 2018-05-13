import assert from 'assert'
import configureMockStore from 'redux-mock-store'
import sinon from 'sinon'
import middleware from './middleware'
import {appRequestError} from "./actions";
import {ERROR_MESSAGE_TIMEOUT} from "../../configurations/constants";

const middlewares = [middleware];
const mockStore = configureMockStore(middlewares);

describe('The App middleware', () => {
    it('should dispatch action after timer ends', () => {
        const store = mockStore({});
        sinon.spy(store, 'dispatch');

        store.dispatch(appRequestError('test'));

        assert(store.dispatch.calledOnce);

        setTimeout(() => {
            assert(store.dispatch.calledTwice);
        }, ERROR_MESSAGE_TIMEOUT);
    })
});