import  movies  from './moviesReducer';
import { combineReducers } from 'redux';
import favorites from './favReducer';

const rootReducer = combineReducers({
    movies,
    favorites
})

export default rootReducer;