import React, { useState , useEffect } from 'react';
import './Posts.css';
import {Button,Form,} from 'semantic-ui-react'
import {Link}  from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';


 const PostForm  = (props)=>{
  const [modalPost, setModalPost] = useState({
    tiltle:'',
    description:'',
    imgUrl:'',
    dateCreated:'',
 
  });
  useEffect(() => {
      setModalPost(props.Post);
  }, [props.Post]);

  const authors = useSelector(state=>{
      if(!state.author.authors)
      {
        dispatch(fetchAuthors(page));
      }
  });


  const inputGroupChangeHandler = (event) => {
  setModalPost((prevState) => ({
    ...prevState,
    [event.target.id]: event.target.value
    }));
  }
  const SetImages = (event) => {
    debugger;
    setModalPost((prevState) =>({
      ...prevState,
      images:event
    }));
  }
  return (
  <Form size='huge' className='cr-up-form' onSubmit={event => {
    console.log('submit');
    event.preventDefault();
    }}>

    <Form.Group  widths={2} className='form-cr-up-post'>
      <Form.Input label='Назва'  type="text" id='tiltle' width={8}
           name="tiltle"value={!modalPost ? '' : modalPost.tiltle}
          onChange={event => inputGroupChangeHandler( event)}/>
          
      <Form.TextArea label='Зміст'  type="text" id='description' width={8}
        name="description"value={!modalPost ? '' : modalPost.location}
      onChange={event => inputGroupChangeHandler( event)}/>
       </Form.Group>
      <Form.Group>
      <Form.Input label='Посилання на фото'  type="text" id='imgUrl' width={16}
           name="imgUrl" value={!modalPost ? '' : modalPost.description}
          onChange={event => inputGroupChangeHandler( event)}/>
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

