import {combineReducers} from 'redux';
import postsReducer from './Post/postReducer';
import authorReducer from '../redux/Author/authorReducer';
export const rootReducer = combineReducers({
    posts: postsReducer,
    author:authorReducer
})