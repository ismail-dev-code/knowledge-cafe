import React from 'react';
import { FaBookmark } from "react-icons/fa";

const Blog = ({blog}) => {
    // const {blog} = props;

    console.log(blog);
    return (
        <div className='m-10'>
           <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src={blog.cover}
      alt="cover pics" />
  </figure>
  <div className="card-body">
    <div className="author flex justify-around items-center">
        <h3>{blog.author}</h3>
        <img className='w-16' src={blog.author_img} alt="" />
        <FaBookmark size={25} />
    </div>
    <h2 className="card-title">{blog.title}</h2>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id, hic.</p>
    <div className="flex">
    {
      blog.hashtags.map((hash=><p>{hash}</p>))
    }
    </div>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Mark AS Read</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Blog;