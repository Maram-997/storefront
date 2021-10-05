import { applyMiddleware, createStore, combineReducers} from 'redux';
import categoriesReducer from './categories'
import productsReducer from './products'
import cartReducer from './cart'
import thunk from './middleware/thunk';
import {composeWithDevTools} from 'redux-devtools-extension';


let reducers = combineReducers({categoriesReducer, productsReducer, cartReducer});

const store = () => {
    return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))
}
export default store();