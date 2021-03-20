import {setUser,setMessage,setUserPost,setUserLoading,logUserOut} from './../redux/User/userActions'
import urlApi from './UrlRequest'

export const fetchAuthors = (userInfo) => dispatch => {
    try {
        const requestOptions = {
            method: 'POST',
            headers: { 
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(userInfo)
        };
        fetch( urlApi+`/users/login`,requestOptions)
        .then(res => res.json())
        .then(data => {
            if(!data.error)
            {
                dispatch(setUser({...data.user}));
            }
            else{
                dispatch(setMessage(data.error));
            }
        })
        .catch((e)=>{
            console.log(e);
        });
        } catch{
        
        console.log('Error!');
    }
}

export const updateAuthors = (userInfo) => async(dispatch) =>{
    try{
        const requestOptions = {
            method: 'PATCH',
            headers: { 
                "Content-type": "application/json; charset=UTF-8"                
            },
            body: JSON.stringify(userInfo)
        };
        debugger;
        fetch( urlApi+'/users/update',requestOptions)
        .then(res => res.json())
        .then(data => {
            dispatch(setUser(data));
        })

    } catch{

    }
}

export const CreateAuthor = () => async(dispatch) => {
    try {
        const requestOptions = {
            method: 'GET',
            headers: { 
                "Content-type": "application/json; charset=UTF-8",
            },
        };
        debugger;
        fetch( urlApi+'/users/me/logout',requestOptions)
        .then(res => res.json())
        .then(data => {
            debugger;
            dispatch(logUserOut());
        })
        .catch((e)=>{
            console.log(e);
        });
        } catch{
        
        console.log('Error!');
    }
}


export const RemoveAuthor =  (page,author) => async (dispatch)=>{ 
    try {
        debugger;
        if(!author)
            return;
        const requestOptions = {
            method: 'POST',
            mode:'cors',
            headers: { 
                "Content-type": "application/json; charset=UTF-8",
            },
            body: JSON.stringify({
                    match:{
                        author:author
                    },
                    sort:{},
                    limit: 10,
                    page: page
                })
        };
        debugger;
        fetch(urlApi+'/post/filterPosts', requestOptions)
            .then(res => res.json())
            .then(data => {
                dispatch(setUserPost(data));
                dispatch(setUserLoading(true));
            })
            .catch((e)=>{
                console.log(e);
            });
        } catch{
            dispatch(setUserLoading(false));
            console.log('Error!');
        }
}

