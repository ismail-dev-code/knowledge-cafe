import React from 'react';

const Blog = ({blog}) => {
    // const {blog} = props;

    console.log(blog);
    return (
        <div>
           <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src={blog.cover}
      alt="cover pics" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{blog.title}</h2>
    <p>{blog.author_img}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Mark AS Read</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Blog;