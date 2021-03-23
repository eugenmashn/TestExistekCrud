import React from 'react';
import {Route,Redirect} from 'react-router-dom'
import { connect } from 'react-redux';
 const  PrivateRoute = ({component: Component,authed, ...rest}) => {
     debugger;
    return (
      <Route
        {...rest}
        render={(props) => authed === true
          ? <Component {...props} />
          : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
      />
    )
  }
  const  mapStateToProps=(state)=>{
    return{
      authed:state.user.loggedIn,
    }
  };
export default connect(mapStateToProps,null) (PrivateRoute);