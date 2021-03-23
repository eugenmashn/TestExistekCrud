import {GetAuthors,setMessage,setAuthorLoading} from './../redux/Author/authorActions'
import{UpdateAuthors,DeleteAuthor,CreateAuthors} from '../redux/Author/authorActions'
import urlApi from './UrlRequest'
export const fetchAuthors = (userInfo) => dispatch => {
    debugger;
    try {
        const requestOptions = {
            method: 'POST',
            headers: { 
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify({
                filter: [
                 ],
                  sort: {
               
                },
                page: 1,
                numberItem: 100
                
              })
        };
        fetch( urlApi+`/Author/GetAuthors`,requestOptions)
        .then(res => res.json())
        .then(data => {
            if(!data.error)
            {   debugger;
                dispatch(GetAuthors(data));
                dispatch(setAuthorLoading(true))
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
export const fetchAllAuthors = (page,ascending) => async dispatch => {
    debugger;
    try {
        const requestOptions = {
            method: 'POST',
            headers: { 
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify({
                filter: [
                 ],
                  sort: {
                    "ProperyName":"FullName",
                    "Ascending" : ascending
                },
                page: page,
                numberItem: 10
                
              })
        };
        fetch( urlApi+`/Author/GetAuthors`,requestOptions)
        .then(res => res.json())
        .then(data => {
            if(!data.error)
            {   debugger;
                dispatch(GetAuthors(data));
                dispatch(setAuthorLoading(true))
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
export const UpdateAuthor = (userInfo) => async(dispatch) =>{
    try{
        const requestOptions = {
            method: 'PUT',
            headers: { 
                "Content-type": "application/json; charset=UTF-8"                
            },
            body: JSON.stringify({...userInfo})
        };
        debugger;
        fetch( urlApi+'/Author/UpdateAuthor',requestOptions)
        .then(res => res.json())
        .then(data => {
            dispatch(UpdateAuthors({...data}));
        })

    } catch{

    }
}

export const CreateAuthor = (author) => async(dispatch) => {
    debugger;
    try {
        author.age = parseInt(author.age)
        const requestOptions = {
            method: 'POST',
            headers: { 
                "Content-type": "application/json; charset=UTF-8",
            },
            body: JSON.stringify({...author})
        };
        debugger;
        fetch( urlApi+'/Author/CreateAuthor',requestOptions)
        .then(res => res.json())
        .then(data => {  
            dispatch(CreateAuthors(data));      
        })
        .catch((e)=>{
            console.log(e);
        });
        } catch{
        
        console.log('Error!');
    }
}


export const RemoveAuthor =  (authoId) => async (dispatch)=>{ 
    try {
        debugger;
        const requestOptions = {
            method: 'DELETE',
            mode:'cors',
            headers: { 
                "Content-type": "application/json; charset=UTF-8",
            }
        };
        debugger;
        fetch(urlApi+'/Author/DeleteAuthor/{' + authoId +'}', requestOptions)
            .then(res => res.json())
            .then(data => {
                
                dispatch(DeleteAuthor(data));
            })
            .catch((e)=>{
                console.log(e);
            });
        } catch{
            dispatch(setAuthorLoading(false));
            console.log('Error!');
        }
}

