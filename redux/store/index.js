import {LatopReducer,MobileReducer,usersReducer} from '../reducer/index';
import {combineReducers, legacy_createStore as createStore,applyMiddleware,compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {watchUser} from '../sagas/users.saga';
// USE COMBINE REDUCER INCASE OF MORE THAN ONE REDUCER
const rootReducer = combineReducers({
    MobileReducer: MobileReducer,
    LatopReducer: LatopReducer,
    usersReducer: usersReducer
})
const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(watchUser);

export default store;