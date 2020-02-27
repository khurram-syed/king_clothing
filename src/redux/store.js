import {createStore, applyMiddleware} from 'redux'
import {logger} from 'redux-logger'
import rootPersistReducer from './root.reducer'
import {persistStore} from 'redux-persist'

const middleware = []
console.log('*** NODE_ENV :',process.env.NODE_ENV)
if(process.env.NODE_ENV==="development"){
    middleware.push(logger)
}
export const store = createStore(rootPersistReducer,applyMiddleware(...middleware))
export const persistor = persistStore(store);