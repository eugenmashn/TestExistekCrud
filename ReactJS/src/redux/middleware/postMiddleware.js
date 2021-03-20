import {SET_PAGING} from '../Post/typesPost'
import{GetPosts} from '../../services/post_services';


export const changePageMiddleware = (store)=>(next)=>(action)=>{
    debugger;
    if(action.type === SET_PAGING)
    {
        store.dispatch(GetPosts(action.payload));
    }
    
    return next(action);
}
    
