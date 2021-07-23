import './login.css';

const Login = () => {
  return (
    <div className='login'>
      <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label>Email</label>
        <input type="email" placeholder='Enter your email' className='loginInput' />
        <label>Password</label>
        <input type="password" placeholder='Enter your password' className='loginInput' />
        <button className="loginButton">Login</button>
      </form>
      <button className="loginRegisterButton">Register</button>
    </div>
  )
}

export default Login;
