import './header.css';

const Header = () => {
  return (
    <div className='header'>
      <div className="headerTitles">
        <span className="headerTitleSm">My</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img src="/images/beach-banner.jpg" alt="header background" className="headerImg" />
    </div>
  )
}

export default Header;
