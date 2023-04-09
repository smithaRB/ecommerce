import React from 'react'
import {Link} from "react-router-dom";

export const BlogCard = () => {
  return (
   
       <div className='blog-card'>
        <div className='card-image'>
            <img  src='https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' className='img-fluid w-100' alt="blog"/>
        </div>
        <div className='blog-content'>
          <p className='date'>25 March 2023</p>
          <h5 className='title'>A deautiful sunday morning renaissance
          </h5>
          <p className='desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue fringilla consectetur. Ut vulputate mauris sem. Vivamus suscipit nunc auctor massa bibendum rhoncus. Integer interdum nisl sit amet egestas hendrerit.</p>
          <Link to="/blog/:id" className="button">Read More</Link>
        </div>
       </div>
      
  )
}
export default BlogCard;
