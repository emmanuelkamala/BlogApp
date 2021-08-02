import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';
import './topbar.css';

const Topbar = () => {
  const {user} = useContext(Context);
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
          <li className="topListItem">{user && 'Logout'}</li>
        </ul>
      </div>
      <div className="topRight">
        {
          user ? (<img src="/images/ejoka.png" alt="profile pic" className="topImg" />) : (
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
