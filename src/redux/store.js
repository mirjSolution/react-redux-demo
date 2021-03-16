import { createStore } from 'redux';
import rootReducer from './rootReducer';
// import cakeReducer from './cakes/cakeReducer';

const store = createStore(rootReducer);

export default store;
