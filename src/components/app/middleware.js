import {APP_REQUEST_ERROR, setErrorMessage} from "./actions";
import {ERROR_MESSAGE_TIMEOUT} from "../../configurations/constants";

export default store => next => action => {
    if (action.type === APP_REQUEST_ERROR) {
        store.dispatch(setErrorMessage(action.error));

        setTimeout(() => {
            store.dispatch(setErrorMessage(null));
        }, ERROR_MESSAGE_TIMEOUT);
    }

    next(action);
}