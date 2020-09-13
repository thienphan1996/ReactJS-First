import BackReducer from './BackReducer'

var redux = require("redux")

const allReducer = redux.combineReducers({
    detail: BackReducer
})

export default redux.createStore(allReducer);
