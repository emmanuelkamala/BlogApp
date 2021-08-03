import axios from 'axios';
import { useContext, useState } from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import { Context } from '../../context/Context';
import './settings.css';

const Settings = () => {
  const [file, setFile] = useState(null);
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState(false);

  const {user} = useContext(Context);
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedUser = {
      userId: user._id,
      username, 
      email, 
      password,
    }
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append('name', filename);
      data.append('file', file);
      updatedUser.profilePic = filename;
      try {
        await axios.post('/upload', data);
      } catch (error) {
        console.log(error);
      }
    }
    try {
      await axios.put('/users/' + user._id, updatedUser);
      setSuccess(true);
    } catch (error) {
      console.log(error.response.data);
    }
  }

  return (
    <div className='settings'>
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form className="settingsForm" onSubmit={handleSubmit}>
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img 
              src={file ? URL.createObjectURL(file) : user.profilePic} 
              alt="profile" 
              className="settingsImg"  
            />
            <label htmlFor="fileInput">
              <i className='settingsPPIcon far fa-user-circle'></i>
            </label>
            <input type="file" id="fileInput" style={{display: 'none'}} onChange={e => setFile(e.target.files[0])} />
          </div>
          <label>Username</label>
          <input type="text" placeholder={user.username} onChange={e => setUsername(e.target.value)} />
          <label>Email</label>
          <input type="email" placeholder={user.email} onChange={e => setEmail(e.target.value)} />
          <label>Password</label>
          <input type="password" onChange={e => setPassword(e.target.value)} />
          <button className="settingsSubmit" typ="submit">Update</button>
          { success && (<span style={{color: 'green', textAlign: 'center', marginTop: '20px'}}>Profile updated successfully!</span>)}
        </form>
      </div>
      <Sidebar />
    </div>
  )
}

export default Settings;
