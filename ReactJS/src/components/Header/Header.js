import React from 'react';
import './Header.css';
import { Button } from 'semantic-ui-react'
import {Link}  from "react-router-dom";
import { Image } from 'semantic-ui-react'
import mainlogo from '../../public_img/logo.jpg'


function Header() {


  
  return (
    <div className='Header'>
      <div className='container-icon'>
          <Image as={Link} to='/'  src={mainlogo}  circular />
      </div>
      <div className='container-auth'>
      <div className='container-link'>
          <Link to="/authors"  >Сторінка авторів</Link>
      </div> 
        <div className = 'container-add-template'>
          <Button  as={Link} to="/addPosts"  className = 'button-add-temolate'>Додати пост</Button>
        </div>
      </div>
    </div>
  );
}

export default Header;
