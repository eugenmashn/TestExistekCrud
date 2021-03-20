import React from 'react';
import './Main.css';
import viewPost from '../Posts/ViewPost'
import CreatePostForm from '../Posts/CreatePostForm'
import EditPostComp from '../Posts/UpdatePostForm'
import Posts from'../Posts/Posts'
import {Route,Router,Switch} from 'react-router-dom'

function Main(props) {

  debugger;
  return (
    <div className="Main">
    <Switch>
      <Route path='/changePost/:id' component={EditPostComp}/>
      <Route path="/posts/:id" component={viewPost} />
      <Route  path='/addPosts' component={CreatePostForm}/>
     
      <Route path='/' component ={Posts} />
    </Switch>
    </div>
  );
}






export default Main;
