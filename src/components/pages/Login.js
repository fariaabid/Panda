import { Button } from '@material-ui/core';
import { auth, provider } from '../../firebase';
import React from 'react';
import './Login.css';

const login = () => {
  const signIn = (e) => {
    auth.signInWithPopup(provider).catch((err) => console.log(err));
  };

  return (
    <div className='login'>
      <div className='login__logo'>
        <img
          src='https://www.freepnglogos.com/uploads/panda-png/panda-face-icon-noto-emoji-animals-nature-iconset-google-21.png?fbclid=IwAR1OCzoCgRYuwfG1iiXkBJd1qz3w2Jg2dyw8lwfzySnHiRElBEKDgycKAb0'
          alt='logo'
        />
      </div>
      <Button onClick={signIn}> Sign In</Button>
    </div>
  );
};

export default login;
