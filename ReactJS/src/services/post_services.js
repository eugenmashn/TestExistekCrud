import { set_Post,edit_Post ,new_Post, set_Loading} from "../redux/Post/actionsPost";
import urlApi from './UrlRequest'

export const GetPosts =  (page,authorId,title) => async dispatch=>{ 

    try {

        const requestOptions = {
            method: 'POST',
            mode:'cors',
            headers: { 
                "Content-type": "application/json; charset=UTF-8",
            },
            body: JSON.stringify({
                "filter": [
                    {
                        "PropertyName": "Title",
                        "value":title
                    },
                    {
                        "PropertyName": "AuthorId",
                        "value":authorId
                    }
              ],
              "sort":{
                    },
                "page":page,
                "numberItem": 10
            })
        };
        debugger;
        fetch(urlApi+'/Posts/GetPosts', requestOptions)
            .then(res => res.json())
            .then(data => {
                debugger;
                dispatch(set_Post(data));
                dispatch(set_Loading(true));
            })
            .catch((e)=>{
                console.log(e);
            });
        } catch{
            dispatch(set_Loading(false));
            console.log('Error!');
        }
    }

 

export const GetPost =(index)=> async (dispatch) =>
{
    
    try {
        const requestOptions = {
            method: 'GET',
            mode:'cors',
            headers: { 
                "Content-type": "application/json; charset=UTF-8",
            }
        };
       fetch(urlApi+'/Posts/GetPostById/{'+index +'}', requestOptions)
            .then(res => res.json())
            .then(data => {
                dispatch(new_Post(data)); 
                dispatch(set_Loading(true));
            })
            .catch((e)=>{
                
                console.log(e);
            });
        }  catch{
            console.log('Error!');
        }
}


export const DeletePost = (post) => async (dispatch) =>
{
    try {
        const requestOptions = {
            method: 'DELETE',
            mode:'cors',
            headers: { 
                "Content-type": "application/json; charset=UTF-8"
            }
        };
       fetch(urlApi+'/Posts/DeletePost/{' + post.postId + '}', requestOptions)
            .then(res => res.json())
            .then(data => {
            })
            .catch((e)=>{
                console.log(e);
            });
        }   catch{
        console.log('Error!');
    }
}
export const NewPost =(post) => async (dispatch) =>
{
    try {
        const requestOptions = {
            method: 'POST',
            mode:'cors',
            headers: { 
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify({...post})
        };
        debugger;
        fetch(urlApi+'/Posts/CreatePost', requestOptions)
            .then(res => res.json())
            .then(data => {
                const res = {data};
                dispatch(new_Post(res));
            })
            .catch((e)=>{
                
                console.log(e);
            });
           
        } catch{
        dispatch(set_Loading(false));
        console.log('Error!');
    }
} 

export const EditPost = (post)=>async (dispatch) =>
{
    try {
        try {
            
            const requestOptions = {
                method: 'Put',
                mode:'cors',
                headers: { 
                    "Content-type": "application/json; charset=UTF-8",
                },
                body: JSON.stringify({
                        ...post
                })
            };
            
            fetch(urlApi+'/Posts/UpdatePost', requestOptions)
                .then(res => res.json())
                .then(data => {
                    const res = {data};
                    dispatch(edit_Post(res));
                })
                .catch((e)=>{
                    console.log(e);
                });
               
            } catch{
            dispatch(set_Loading(false));
            console.log('Error!');
        }
    } catch{
        console.log('Error!');
    }
}

