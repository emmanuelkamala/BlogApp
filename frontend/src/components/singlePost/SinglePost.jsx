import './singlePost.css';

const SinglePost = () => {
  return (
    <div className='singlePost'>
      <div className="singlePostWrapper">
        <img src="/images/beach-banner.jpg" alt="single" className="singlePostImg" />
        <h1 className="singlePostTitle">Lorem ipsum ipsum ipsum
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className='singlePostAuthor'>Author: <strong>Emmanuel</strong></span>
          <span className='singlePostDate'>1 hour ago</span>
        </div>
        <div className="singlePostDescription">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ut ea nam quaerat dolores maiores rerum commodi itaque, dicta vero, vitae cupiditate hic. Nemo, ipsum consectetur! Error assumenda totam veniam!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ut ea nam quaerat dolores maiores rerum commodi itaque, dicta vero, vitae cupiditate hic. Nemo, ipsum consectetur! Error assumenda totam veniam!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ut ea nam quaerat dolores maiores rerum commodi itaque, dicta vero, vitae cupiditate hic. Nemo, ipsum consectetur! Error assumenda totam veniam!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ut ea nam quaerat dolores maiores rerum commodi itaque, dicta vero, vitae cupiditate hic. Nemo, ipsum consectetur! Error assumenda totam veniam!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ut ea nam quaerat dolores maiores rerum commodi itaque, dicta vero, vitae cupiditate hic. Nemo, ipsum consectetur! Error assumenda totam veniam!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ut ea nam quaerat dolores maiores rerum commodi itaque, dicta vero, vitae cupiditate hic. Nemo, ipsum consectetur! Error assumenda totam veniam!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ut ea nam quaerat dolores maiores rerum commodi itaque, dicta vero, vitae cupiditate hic. Nemo, ipsum consectetur! Error assumenda totam veniam!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ut ea nam quaerat dolores maiores rerum commodi itaque, dicta vero, vitae cupiditate hic. Nemo, ipsum consectetur! Error assumenda totam veniam!</p>
        </div>
      </div>
    </div>
  )
}

export default SinglePost;
