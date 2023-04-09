import React from 'react';
import { Link } from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import {HiOutlineArrowLeft} from 'react-icons/hi';


const SingleBlog = () => {
  return (
<>
<Meta title={"Single Blog"} />
            <BreadCrumb title="Single Blog" />
            <div className='blog-wrapper home-wrapper-2 py-5'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                          <div className='single-blog-card'>
                            <Link to='/blogs' className='d-flex align-items-center gap-10'><HiOutlineArrowLeft className='fs-4'/>Go back to Blog</Link>
                            <h3 className='title'>
                              A Beautiful Sunday Morning Renaissance
                            </h3>
                            <img src='https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' className='img-fluid w-100 my-4' alt='blog'/>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
</>
  )
}

export default SingleBlog