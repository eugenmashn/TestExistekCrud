import {GET_AUTHORS,UPDATE_AUTHORS, SET_LOADED_AUTHORS, SET_PAGE_AUTHORS,SET_ERROR_MESSAGE} from './typeAuthor'
const defaultState = {
    authors: [],
    loading: false,
    page: 1,
    errorMessage:null
}

const authorReducer = (state = defaultState, action) => {
    switch(action.type){
        case GET_AUTHORS:
            debugger;
            return {
                ...state,
                authors: [...action.payload]
            }
     
        case UPDATE_AUTHORS:
            debugger;
            let authorses = [];
            authorses = state.authors.map(author => {
                debugger;
                if (author.authorId === action.payload.authorId) {
                    author = action.payload
                }
                return author;
            })
         return { ...state, authors: [...authorses] }
        case SET_PAGE_AUTHORS:
            return { ...state, page: action.payload}
        case SET_ERROR_MESSAGE:
            return { ...state, errorMessage: action.payload}
        case SET_LOADED_AUTHORS:
            return { ...state, loading: action.payload }
        default: return state
    }
}

export default authorReducer