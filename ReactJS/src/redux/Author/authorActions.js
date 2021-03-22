import { SET_ERROR_MESSAGE } from './typeAuthor';
import {DELETE_AUTHORS,GET_AUTHORS, CREATE_AUTHORS,CHANGE_SORT, UPDATE_AUTHORS, SET_LOADED_AUTHORS, SET_PAGE_AUTHORS} from './typeAuthor'
export const CreateAuthors = (payload) => ({ type: CREATE_AUTHORS, payload});

export const UpdateAuthors = (payload) => ({ type: UPDATE_AUTHORS, payload});

export const DeleteAuthor =(payload) =>({type:DELETE_AUTHORS,payload});
export const setPage = (payload) =>({type:SET_PAGE_AUTHORS,payload})
export const  GetAuthors =(payload) =>({type:GET_AUTHORS,payload});
export const ChangeSort = (payload) =>({type:CHANGE_SORT,payload})
export const setAuthorLoading = (payload) =>({type:SET_LOADED_AUTHORS,payload});

export const setAuthorPaging = (payload) =>({type:SET_PAGE_AUTHORS,payload});

export const setMessage = (payload) =>({type:SET_ERROR_MESSAGE,payload})
// Methods
