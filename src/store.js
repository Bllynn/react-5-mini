import counter from './ducks/counter';
import {createStore} from 'redux';

let store=createStore(counter);
export default store;