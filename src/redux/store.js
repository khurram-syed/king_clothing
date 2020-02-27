import {createStore, applyMiddleware} from 'redux'
import {logger} from 'redux-logger'
import rootPersistReducer from './root.reducer'
import {persistStore} from 'redux-persist'

const middleware = []

if(process.env.NODE_ENV!=="production"){
    middleware.push(logger)
}
export const store = createStore(rootPersistReducer,applyMiddleware(...middleware))
export const persistor = persistStore(store);