
import React from 'react';
import { connect } from 'react-redux';
import {useSelector, useDispatch } from 'react-redux';
import PostForm from './PostForm'
import{NewPost} from '../../services/post_services'

const CreatePost = function (props)
{
  
  const dispatch = useDispatch();
  const  SubmitPostFormCreate = (modalPost)=> {
    dispatch(NewPost(modalPost));
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