import {createStore, applyMiddleware} from 'redux'
import {logger} from 'redux-logger'
import rootPersistReducer from './root.reducer'
import {persistStore} from 'redux-persist'
 const middleware = [logger]
export const store = createStore(rootPersistReducer,applyMiddleware(...middleware))
export const persistor = persistStore(store);