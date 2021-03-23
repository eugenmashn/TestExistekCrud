import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {  useDispatch } from 'react-redux';
import { Button } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import Moment from 'react-moment'
import  'moment/locale/ru';
import { Card, Image } from 'semantic-ui-react'
import { GetPost,DeletePost } from '../../services/post_services';
import './Posts.css';

const ViewPost = function (props) {
    debugger;
    const dispatch = useDispatch();
   
    let post = props.post.find(i => i.postId === props.id);
    useEffect(() => {
        if(!post) {
            dispatch(GetPost(props.id));
        }
    },[]);
    if(!post)
    {
      return<div>loading...</div>  
    }
    const removePost = () =>{
        dispatch(DeletePost(post));
    }
    return (
        <div className="view-post">
            <Card key = {post.postId} fluid centered className='card-view-element' >
                    <Card.Content className='content'>
                        <div className='img-view-post'>
                            <Image src ={post.imgUrl} />
                        </div>
                        <div className ='description-view-post'>
                            <h4>{post.title}</h4>
                            <p>{post.description}</p>
                        </div>
                    </Card.Content>
                    <Card.Content extra>
                      <Card.Header  >
                        <span className='posts-header'>{post?.author?.fullName}</span> 
                    </Card.Header>
                    <div>
                      <Moment  date ={post.dateCreated} format ="MMM Do YY"> </Moment>
                    </div>
                    <div className='button-group-post-view'>
                        <Button  as={Link} to={"/"} secondary className = 'button-change-post' onClick={removePost}>Видалити</Button>
                        <Button  as={Link} to={`/changePost/${post.postId}`} secondary className = 'button-change-post'>Змінити</Button>
                     </div>
                    </Card.Content>
            </Card>
            
        </div>
    );

}
let mapStateToProps=(state,ownProps)=>{
    return{
        id:ownProps.match.params.id,
        user :state.user,
        post:state.posts.posts
    }
  };
  const viewPost = connect(mapStateToProps,null) (ViewPost);
  export default viewPost;