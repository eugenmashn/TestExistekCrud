
import React, { useEffect } from 'react';
import './Posts.css';
import { useSelector, useDispatch } from 'react-redux';
import {GetPosts} from '../../services/post_services';
import {Link}  from "react-router-dom";
import { Card, Image } from 'semantic-ui-react'
import Moment from 'react-moment'
import  'moment/locale/ru';
import { Pagination } from 'semantic-ui-react';
import {set_Page} from '../../redux/Post/actionsPost';

function Posts() {
  const dispatch = useDispatch();
  const page = useSelector(state => state.posts.page);
  useEffect(() => {
      dispatch(GetPosts(page));
      }, []);
  const posts = useSelector(state => state.posts.posts);
  const loading = useSelector(state => state.posts.loading);
  const onchangePage =(e, {activePage})=>{
    dispatch(set_Page(activePage-1));
  }
  if(loading === false)
      return<div>loading...</div>
  debugger;
  return (
    <div className="posts">
      <Card.Group>
      {
        posts.map(post =>
            <Card key = {post.postId}>
                    <Card.Content>
                      <Image src ={post.imgUrl} />
                    </Card.Content>
                    <Card.Content extra>
                      <Card.Header  >
                      <Link  to={`/posts/${post.postId}`}><span className='posts-header'>{post.title}</span> </Link>
                    </Card.Header>
                    <div>
                      <Moment  date ={post.dateCreated} format ="MMM Do YY"> </Moment>
                    </div>
                    </Card.Content>
            </Card>
          )
      }
          </Card.Group>
          <div className='post-paging'> <Pagination  defaultActivePage={1}  totalPages={10} onPageChange = {onchangePage} /></div>
    </div>
  );
}
  
  export default Posts;

