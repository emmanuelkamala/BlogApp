import axios from 'axios';
import { useEffect, useState } from 'react';
import './sidebar.css';

const Sidebar = () => {
  const [cats, setCats] = useState([]);

  useEffect(()=> {
    const getCats = async () => {
      const res = await axios.get('/categories');
      setCats(res.data)
    }
    getCats()
  }, [])

  return (
    <div className='sidebar'>
      <div className="sidebarItem">
        <span className="sidebarTitle">About Me</span>
        <img src="/images/ketomeal.jpg" alt="about" className="sidebarImg" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, suscipit sit? Velit nemo tempora, aperiam ipsam quisquam totam, numquam facilis voluptate atque quis fugit eaque iste repellendus cupiditate ullam! Quis.</p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Categories</span>
        <ul className="sidebarList">
          { cats.map( cat => ( <li className="sidebarListItem">{cat.name}</li>)) }
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Follow Us</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
        </div>
      </div>
    </div>
  )
}

export default Sidebar;
