import { SET_POST, DELETE_POST, NEW_POST, EDIT_POST,SET_AUTHOR_FILTER,SET_TITLE_FILTER, SET_LOADING, SET_PAGING } from './typesPost';

const initialState = {
    posts: [],
    loading: false,
    title:'',
    authorId:'',
    page: 1
}
export default function postsReducer(state = initialState, action) {
    switch (action.type) {
        case SET_POST:
            debugger;
            return { ...state, posts: [...action.payload] };
        case DELETE_POST:
            return {
                ...state, posts: [...state.notes.filter(post =>
                    post.id !== action.payload.value.id)]
            }
        case NEW_POST:
            {
                if (!state.posts.find(i => i._id === action.payload._id))
                    return { ...state, posts: [...state.posts, action.payload] }
                return state;
            }
        case SET_LOADING:
            return { ...state, loading: action.payload }
        case SET_PAGING:
            return { ...state, page: action.payload}
        case SET_AUTHOR_FILTER:
            return { ...state, authorId: action.payload}
        case SET_TITLE_FILTER:
            return { ...state, title: action.payload}
        case EDIT_POST:
            let posts = state.posts.map(post => {
                debugger;
                if (post.id === action.payload._id) {
                    post = action.payload
                }
                return post;
            })
            return { ...state, posts: [...posts] }
        default:
            return state;
    }
}