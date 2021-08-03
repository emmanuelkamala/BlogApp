import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';
import './topbar.css';

const Topbar = () => {
  const PF = 'http://localhost:5000/images/';
  const { user, dispatch } = useContext(Context);

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT'})
  }
  return (
    <div className='top'>
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link to='/' className='link'>Home</Link>
          </li>
          <li className="topListItem"><Link to='/about' className='link'>About</Link></li>
          <li className="topListItem"><Link to='/write' className='link'>Write</Link></li>
          <li className="topListItem"><Link to='/contact' className='link'>Contact</Link></li>
          <li className="topListItem" onClick={handleLogout}>{user && 'Logout'}</li>
        </ul>
      </div>
      <div className="topRight">
        {
          user ? (<Link to='/settings'><img src={PF + user.profilePic} alt="pic" className="topImg" /></Link>) : (
            <ul className='topList'>
              <li className='topListItem'><Link to='/login' className='link'>Login</Link></li>
              <li className='topListItem'><Link to='/register' className='link'>Register</Link></li>
            </ul>
          )
        }
        <i className="topSearch fas fa-search"></i>
      </div>
    </div>
  )
}

export default Topbar;
