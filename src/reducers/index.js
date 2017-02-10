// Master reducers file. It dosen't manage any particular piece of state. It
// manages all other reducers (which contain a piece of state).
import { combineReducers } from 'redux';
import studentReducer from './studentReducer';

const rootReducer = combineReducers({
    // Pass each reducer as a key/property. Each key/property will be available as
    // state.key.
    students: studentReducer
});

export default rootReducer;
