import {DELETE_AUTHORS,GET_AUTHORS, CREATE_AUTHORS, UPDATE_AUTHORS, SET_LOADED_AUTHORS, SET_PAGE_AUTHORS} from './typeUser'
export const CreateAuthor = (payload) => ({ type: CREATE_AUTHORS, payload});

export const UpdateAuthor = (payload) => ({ type: UPDATE_AUTHORS, payload});

export const DeleteAuthor =(payload) =>({type:DELETE_AUTHORS,payload});

export const  GetAuthors =(payload) =>({type:GET_AUTHORS,payload});

export const setAuthorLoading = (payload) =>({type:SET_LOADED_AUTHORS,payload});

export const setAuthorPaging = (payload) =>({type:SET_PAGE_AUTHORS,payload});
// Methods
