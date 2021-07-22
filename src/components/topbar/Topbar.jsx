import './topbar.css';

const Topbar = () => {
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
          <li className="topListItem">Home</li>
          <li className="topListItem">About</li>
          <li className="topListItem">Write</li>
          <li className="topListItem">Contact</li>
          <li className="topListItem">Logout</li>
        </ul>
      </div>
      <div className="topRight">
        <img src="/images/ejoka.png" alt="profile pic" className="topImg" />
        <i className="topSearch fas fa-search"></i>
      </div>
    </div>
  )
}

export default Topbar;
