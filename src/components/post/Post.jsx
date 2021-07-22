import './post.css';

const Post = () => {
  return (
    <div className='post'>
      <img src="/images/keto.png" alt="post" className="postImg" />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Keto diet</span>
          <span className="postCat">Keto lifestyle</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor</span>
        <hr />
        <span className="postDate">1 hour ago</span>
        <p className='postDescription'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime corporis distinctio vitae neque harum illo saepe quo molestias reiciendis sit</p>
      </div>
    </div>
  )
}

export default Post;
