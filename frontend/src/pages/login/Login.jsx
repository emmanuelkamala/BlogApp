import axios from 'axios';
import { useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';
import './login.css';

const Login = () => {

  const userRef = useRef();
  const passwordRef = useRef();
  const {dispatch, isFetching} = useContext(Context);
  const handleSubmit = async (e) => {
    e.preventDefault()
    dispatch({type: 'LOGIN START'});
    try {
      const res = await axios.post('/auth/login', {
        username: userRef.current.value,
        password: passwordRef.current.value,
      })
    dispatch({type: 'LOGIN SUCCESS', payload: res.data});
    } catch (error) {
      dispatch({type: 'LOGIN FAILURE'});
    }
  }

  return (
    <div className='login'>
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input type="text" placeholder='Enter your username...' className='loginInput' ref={userRef} />
        <label>Password</label>
        <input type="password" placeholder='Enter your password' className='loginInput' ref={passwordRef} />
        <button className="loginButton">Login</button>
      </form>
      <button className="loginRegisterButton" type='submit' disabled={isFetching}>
        <Link to='/register' className='link'>Register</Link>
      </button>
    </div>
  )
}

export default Login;
