// import {createStore} from 'redux'
// import cakeReducer from './cakeReducer'

// let cakeStore = createStore(cakeReducer)

// export default cakeStore







import {configureStore} from '@reduxjs/toolkit'
import cakeReducer from './cakeReducer'

let cakeStore = configureStore({reducer : cakeReducer})

export default cakeStore