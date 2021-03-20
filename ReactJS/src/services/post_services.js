import { set_Post,edit_Post ,new_Post, set_Loading} from "../redux/Post/actionsPost";
import urlApi from './UrlRequest'

export const GetPosts =  (page) => async dispatch=>{ 

    try {
        const requestOptions = {
            method: 'POST',
            mode:'cors',
            headers: { 
                "Content-type": "application/json; charset=UTF-8",
            },
            body: JSON.stringify({
                "filter": [

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
            method: 'DeLETE',
            mode:'cors',
            headers: { 
                "Content-type": "application/json; charset=UTF-8"
            }
        };
       fetch(urlApi+'/post/removePost/' + post._id, requestOptions)
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
export const NewPost =(post,author) => async (dispatch) =>
{
    try {
        debugger;
        post.author= author;
        post._id  = null;
        post.location ={};
        post.viewersCount = 0;
        const requestOptions = {
            method: 'PUT',
            mode:'cors',
            headers: { 
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify({...post})
        };
        debugger;
        fetch(urlApi+'/post/createPost', requestOptions)
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
            post.author="tesast@mail.com";
            post.location ={};
            const requestOptions = {
                method: 'patch',
                mode:'cors',
                headers: { 
                    "Content-type": "application/json; charset=UTF-8",
                },
                body: JSON.stringify({
                        ...post
                })
            };
            
            fetch(urlApi+'/post/updatePost', requestOptions)
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

