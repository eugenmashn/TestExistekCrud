import {SET_POST,DELETE_POST,NEW_POST,EDIT_POST,SET_LOADING,SET_AUTHOR_FILTER,SET_TITLE_FILTER, SET_PAGING} from './typesPost';

export function set_Post(posts)
{
    return {
        type:SET_POST,  
        payload:posts
    }
}

export function delete_Post(post) 
{
    return {
        type:DELETE_POST,
        payload: post
    }
}

export function new_Post (post)
{
    debugger;
    return {
        type: NEW_POST,
        payload: post
    }
}
export function set_Loading (loaded)
{
    return {
        type: SET_LOADING,
        payload: loaded
    }
}
export const SetAuthorFilter = (payload) =>({type:SET_AUTHOR_FILTER, payload})
export const SetTitleFilter = (payload) => ({type:SET_TITLE_FILTER,payload})

export function edit_Post(post) //rewrite for api
{
    return {
        type:EDIT_POST,
        payload: post
    }
}
export function set_Page(page) //for paging
{
    return {
        type:SET_PAGING,
        payload: page
    }
}