import {GET_AUTHORS, SET_LOADED_AUTHORS, SET_PAGE_AUTHORS} from './typeAuthor'
const defaultState = {
    authors: [],
    loading: false,
    page: 1,
    errorMessage:null
}

const authorReducer = (state = defaultState, action) => {
    switch(action.type){
        case GET_AUTHORS:
            return {
                ...state,
                authors: [...action.payload]
            }
        case SET_PAGE_AUTHORS:
            return { ...state, page: action.payload}
        case SET_LOADED_AUTHORS:
            return { ...state, loading: action.payload }
        default: return state
    }
}

export default authorReducer