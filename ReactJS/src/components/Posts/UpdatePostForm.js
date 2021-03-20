  
import React, {  useEffect } from 'react';
import './Posts.css';
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import PostForm from './PostForm'
import { GetPost,EditPost } from '../../services/post_services';

function UpdatePost(props) {
  const dispatch = useDispatch();
  let id = props.match.params.id;
  let post = props.posts.find(i => i._id===id); 
  useEffect(() => {
    dispatch(GetPost(id));
    });
  const SubmitPostFormUpdate = function(modalPost) {
      if(modalPost.Name !== ''){
          dispatch(EditPost(modalPost))
      }
      else{
          console.log('error');
      }
          
    }
    return <PostForm Post={post} SubmitPostForm = {SubmitPostFormUpdate}/>
}
let mapDispatchToProps=(dispatch)=>{
    return {
      
  }
};

let mapStateToProps=(state)=>{
  return{
      posts:state.posts.posts,
  }
};






const EditPostComp = connect(mapStateToProps,mapDispatchToProps) (UpdatePost);
export default EditPostComp;