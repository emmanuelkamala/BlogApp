import { useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import './singlePost.css';
import { Context } from '../../context/Context';

const SinglePost = () => {
  const location = useLocation();
  const path = location.pathname.split('/')[2];
  const [post, setPost] = useState({})
  const PF = 'http://localhost:5000/images/';
  const { user } = useContext(Context);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [updateMode, setUpdateMode] = useState(false);
  useEffect(()=>{
    const getPost = async ()=>{
      const res = await axios.get('/posts/'+path);
      setPost(res.data);
      setTitle(res.data.title);
      setDescription(res.data.description);
    }
    getPost();
  }, [path])

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${post._id}`, {data: {username: user.username}});
      window.location.replace('/')
    } catch (error) {
      console.log(error.response.data); 
    }
  }

  const handleUpdate = async () => {
    try {
      await axios.put(`/posts/${post._id}`, {username: user.username, title, description});
      setUpdateMode(false)
    } catch (error) {
      console.log(error.response.data); 
    }
  }

  return (
    <div className='singlePost'>
      <div className="singlePostWrapper">
        {
          post.photo && (
            <img src={PF + post.photo} alt="single" className="singlePostImg" />
          )
        }
        {
          updateMode ? 
          <input 
            type='text' 
            value={title} 
            className='singlePostTitleInput' 
            autoFocus 
            onChange={e => setTitle(e.target.value)} 
          /> : 
          (
            <h1 className="singlePostTitle">{title}
              {
                post.username === user?.username && (
                  <div className="singlePostEdit">
                    <i className="singlePostIcon far fa-edit" onClick={() => setUpdateMode(true)}></i>
                    <i className="singlePostIcon far fa-trash-alt" onClick={handleDelete}></i>
                  </div>
                )
              }   
            </h1>
          )
        }
        
        <div className="singlePostInfo">
          <span className='singlePostAuthor'>Author: 
          <Link to={`/?user=${post.username}`} className='link'>
            <strong>{post.username}</strong>
          </Link>
          </span>
          <span className='singlePostDate'>{new Date(post.createdAt).toDateString()}</span>
        </div>
        {
          updateMode ? 
            <textarea 
              className='singlePostDescriptionInput' 
              value={description} 
              onChange={(e)=> setDescription(e.target.value)} 
            /> : 
            (
              <div className="singlePostDescription">
                {description}
              </div>
            )
        }

        {
          updateMode && (<button className='singlePostButton' onClick={handleUpdate}>Update Post</button>)
        }
        
      </div>
    </div>
  )
}

export default SinglePost;
