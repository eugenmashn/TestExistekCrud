import React, { useEffect } from 'react';
import './Posts.css';
import { useSelector, useDispatch } from 'react-redux';
import {GetPosts} from '../../services/post_services';
import {Link}  from "react-router-dom";
import { Card, Image,Form } from 'semantic-ui-react'
import Moment from 'react-moment'
import  'moment/locale/ru';
import { Pagination } from 'semantic-ui-react';
import {set_Page,SetAuthorFilter,SetTitleFilter} from '../../redux/Post/actionsPost';
import {fetchAuthors} from '../../services/author_services'
function Posts() {
  debugger;
  const dispatch = useDispatch();
  const page = useSelector(state => state.posts.page);
  let authorId = useSelector(state => state.posts.authorId);
  let title = useSelector(state => state.posts.title);
  useEffect(() => {
      dispatch(GetPosts(page,authorId,title));
      }, []);
  const posts = useSelector(state => state.posts.posts);
  const loading = useSelector(state => state.posts.loading);
  const onchangePage =(e, {activePage})=>{
    dispatch(set_Page(activePage));
    dispatch(GetPosts(activePage,authorId,title));
  }

  const inputOnchageDropDown = (event,value) =>{
    debugger;
    dispatch(SetAuthorFilter(value.value));
    authorId = value.value;
    dispatch(GetPosts(page,authorId,title));
  }
  const inputOnChangeTitle = (event) => {
    dispatch(SetTitleFilter(event.target.value));
    title = event.target.value;
    dispatch(GetPosts(page,authorId,title));
  }
  useEffect(() => {
    dispatch(fetchAuthors());

  }, []);
  const authors = useSelector(state => state.author.authors);
  if(loading === false)
      return<div>loading...</div>
  debugger;
  return (
    <div className="posts">
      <Form.Group className='posts-filter'>
        <div className='posts-filter-author'>
          <Form.Dropdown clearable label='Автор' id='authorId' name='authorId' width={16}
                  fluid search selection
                  options={authors?.map(author => ({key: author.authorId, text:author.fullName, value: author.authorId }))} 
                  onChange={(event,value) => inputOnchageDropDown( event,value)}/>
        </div>
        <div className='posts-filter-title'>
          <Form.Input label='Назва'  type="text" id='title' width={8} fluid
              name="title"
              onChange={event => inputOnChangeTitle( event)}/>
        </div>    
      </Form.Group>
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
          <div className='post-paging'> <Pagination  defaultActivePage={1}  totalPages={100}  onPageChange = {onchangePage} /></div>
    </div>
  );
}
  
export default Posts;

