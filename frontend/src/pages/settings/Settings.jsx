import Sidebar from '../../components/sidebar/Sidebar';
import './settings.css';

const Settings = () => {
  return (
    <div className='settings'>
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img src="/images/ejoka.png" alt="profile" className="settingsImg" />
            <label htmlFor="fileInput">
              <i className='settingsPPIcon far fa-user-circle'></i>
            </label>
            <input type="file" id="fileInput" style={{display: 'none'}} />
          </div>
          <label>Username</label>
          <input type="text" placeholder='Enter your username' />
          <label>Email</label>
          <input type="email" placeholder='Enter your email' />
          <label>Password</label>
          <input type="password" placeholder='Enter your password' />
          <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  )
}

export default Settings;
