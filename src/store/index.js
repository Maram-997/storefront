import { createStore, combineReducers} from 'redux';
import categoriesReducer from './categories'
import productsReducer from './products'


let reducers = combineReducers({categoriesReducer, productsReducer});

const store = () => {
    return createStore(reducers)
}
export default store();