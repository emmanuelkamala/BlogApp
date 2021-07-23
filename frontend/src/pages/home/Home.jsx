import { useEffect, useState } from 'react';
import Header from '../../components/header/Header';
import Posts from '../../components/posts/Posts';
import Sidebar from '../../components/sidebar/Sidebar';
import './home.css';

const Home = () => {
  const [posts, setPosts] = useState([])

  useEffect(()=> {
    const fetchPosts = async () => {
      axios.get
  }})
  return (
    <div>
      <Header />
      <div className="home">
        <Posts />
        <Sidebar />
      </div>
    </div>
  )
}

export default Home;

