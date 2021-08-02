import { useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import './singlePost.css';
import { Context } from '../../context/Context';

const SinglePost = () => {
  const PF = 'http://localhost:5000/images/';
  const location = useLocation();
  const path = location.pathname.split('/')[2];
  const [post, setPost] = useState({})
  const { user } = useContext(Context);
  useEffect(()=>{
    const getPost = async ()=>{
      const res = await axios.get('/posts/'+path);
      setPost(res.data);
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

  console.log(user);
  const handleEdit = () => {
    
  }
  return (
    <div className='singlePost'>
      <div className="singlePostWrapper">
        {
          post.photo && (
            <img src={PF + post.photo} alt="single" className="singlePostImg" />
          )
        }
        
        <h1 className="singlePostTitle">{post.title}
        {
          post.username === user?.username && (
            <div className="singlePostEdit">
              <i className="singlePostIcon far fa-edit" onClick={handleEdit}></i>
              <i className="singlePostIcon far fa-trash-alt" onClick={handleDelete}></i>
            </div>
          )
        }
          
        </h1>
        <div className="singlePostInfo">
          <span className='singlePostAuthor'>Author: 
          <Link to={`/?user=${post.username}`} className='link'>
            <strong>{post.username}</strong>
          </Link>
          </span>
          <span className='singlePostDate'>{new Date(post.createdAt).toDateString()}</span>
        </div>
        <div className="singlePostDescription">
          {post.description}
        </div>
      </div>
    </div>
  )
}

export default SinglePost;
