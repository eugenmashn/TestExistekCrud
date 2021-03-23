  
import React, {  useEffect } from 'react';
import './Posts.css';
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import PostForm from './PostForm'
import { GetPost,EditPost } from '../../services/post_services';

function UpdatePost(props) {
  const dispatch = useDispatch();
  let id = props.match.params.id;
  useEffect(() => {
    dispatch(GetPost(id));
    });
    debugger;
  let post = props.posts.find(i => i.postId===id); 
  const SubmitPostFormUpdate = function(modalPost) {
        dispatch(EditPost(modalPost))  
    }
    return <PostForm Post={post} SubmitPostForm = {SubmitPostFormUpdate}/>
}
let mapStateToProps=(state)=>{
  return{
      posts:state.posts.posts,
  }
};






const EditPostComp = connect(mapStateToProps,null) (UpdatePost);
export default EditPostComp;