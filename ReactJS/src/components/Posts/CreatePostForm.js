
import React from 'react';
import { connect } from 'react-redux';
import {useSelector, useDispatch } from 'react-redux';
import PostForm from './PostForm'
import{NewPost} from '../../services/post_services'

const CreatePost = function (props)
{
  const author =  useSelector(state => state.user.user.email);
  const dispatch = useDispatch();
  const  SubmitPostFormCreate = (modalPost)=> {
    if(modalPost.Name !== ''){
     dispatch(NewPost(modalPost,author));
    }
    else{
      console.log('error');
    }
  }
  return <PostForm Post={null} SubmitPostForm = {SubmitPostFormCreate}/>
}
  let mapDispatchToProps=(dispatch)=>{
    return {
      
  }
};

let mapStateToProps=(state)=>{
    return{
        posts:state.posts,
    }
};







const CreatePostForm = connect(mapStateToProps,mapDispatchToProps) (CreatePost);
export default CreatePostForm;