import './sidebar.css';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebarItem">
        <span className="sidebarTitle">About Me</span>
        <img src="/images/ejoka.png" alt="about" className="sidebarImg" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, suscipit sit? Velit nemo tempora, aperiam ipsam quisquam totam, numquam facilis voluptate atque quis fugit eaque iste repellendus cupiditate ullam! Quis.</p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Categories</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">
            Keto recipes
          </li>
          <li className="sidebarListItem">
            Keto diet
          </li>
          <li className="sidebarListItem">
            Keto lifestyle
          </li>
          <li className="sidebarListItem">
            Living healthy
          </li>
          <li className="sidebarListItem">
            Exercises
          </li>
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
