import React from 'react';
import { FaBookmark } from "react-icons/fa";

const Blog = ({blog, handleBookMark, handleMarkAsRead}) => {

    // const {blog} = props;
    // console.log(blog);

    // console.log(handleBookMark);
    return (
        <div className='m-10'>
           <div className="card bg-base-100 w-full shadow-sm">
  <figure>
    <img
      src={blog.cover}
      alt="cover pics" />
  </figure>
  <div className="card-body">
    <div className="author flex justify-around items-center">
        <h3>{blog.author}</h3>
        <img className='w-16' src={blog.author_img} alt="" />
       <button className='cursor-pointer text-blue-600' onClick={()=>handleBookMark(blog)}> <FaBookmark size={25} /></button>
    </div>
    <h2 className="card-title">{blog.title}</h2>
    <p>{blog.description}</p>
    <div className="flex">
    {
      blog.hashtags.map(((hash,index)=><p className='font-bold' key={index}>{hash}</p>))
    }
    </div>
    <div className="card-actions justify-end">
      <button onClick={()=>handleMarkAsRead(blog.reading_time, blog.id)} className="btn btn-primary">mark as read</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Blog;