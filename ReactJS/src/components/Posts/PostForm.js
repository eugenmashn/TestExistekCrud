import React, { useState , useEffect } from 'react';
import './Posts.css';
import {Button,Form,} from 'semantic-ui-react'
import {Link}  from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import {fetchAuthors} from '../../services/author_services'

 const PostForm  = (props)=>{
  const dispatch = useDispatch();
  const [modalPost, setModalPost] = useState({
    title:'',
    description:'',
    imgUrl:'',
    dateCreated:'',
    authorId:''
 
  });
  useEffect(() => {
    dispatch(fetchAuthors());
    }, []);
    
  useEffect(() => {
      setModalPost(props.Post);
  }, [props.Post]);
  debugger;

const authors = useSelector(state => state.author.authors);

  const inputGroupChangeHandler = (event) => {
    debugger;
    
    setModalPost((prevState) => ({
      ...prevState,
      [event.target.id]: event.target.value
      }));
  }
 const inputOnchageDropDown = (event,value) =>{
    debugger;
    setModalPost((prevState) => ({
      ...prevState,
      authorId: value.value
      }));
 }
  return (
  <Form size='huge' className='cr-up-form' onSubmit={event => {
    console.log('submit');
    event.preventDefault();
    }}>

    <Form.Group  widths={2} className='form-cr-up-post'>
      <Form.Input label='Назва'  type="text" id='title' width={8}
           name="title"value={!modalPost ? '' : modalPost.title}
          onChange={event => inputGroupChangeHandler( event)}/>
      
      <Form.TextArea label='Зміст'  type="text" id='description' width={8}
        name="description"value={!modalPost ? '' : modalPost.description}
      onChange={event => inputGroupChangeHandler( event)}/>
       </Form.Group>
      <Form.Group>
      <Form.Input label='Посилання на фото'  type="text" id='imgUrl' width={16}
            name="imgUrl" value={!modalPost ? '' : modalPost.imgUrl}
            onChange={event => inputGroupChangeHandler( event)}/> 
      </Form.Group>
      <Form.Group>
      <Form.Dropdown label='Автор' id='authorId' name='authorId' width={16}
              value={!modalPost ? '' : modalPost.authorId} fluid search selection
              options={authors?.map(author => ({key: author.authorId, text:author.fullName, value: author.authorId }))} 
              onChange={(event,value) => inputOnchageDropDown( event,value)}/>
      </Form.Group>
      <div className = 'cr-up-submit-button'>
        <Button as={Link} to="/" type='submit' onClick={()=>{ props.SubmitPostForm(modalPost)}} variant="primary"   >
          Зберегти
        </Button>
      </div>
    
  </Form>
    );
};
export default PostForm;

