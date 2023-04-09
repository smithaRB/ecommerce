import React from 'react';
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from 'react-router-dom';

const ProductCard = (props) => {
    const{grid} =props;
    let location = useLocation();

    return (
        <>
        <div className={`${location.pathname ==="/store" ? `gr-${grid}` : "col-3"}`}>
            <Link to='product/:id' className='product-card position-relative'>
                <div className='wishList-icon position-absolute'>
                    <button className='border-0 bg-transparent'><i className="fa-regular fa-heart"></i></button>
                </div>
                <div className='product-image'>
                    <img src='https://images.unsplash.com/photo-1622434641406-a158123450f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=404&q=80'className='img-fluid' alt='product image' />
                    <img src='https://images.unsplash.com/photo-1634141628215-732e10d16bec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'className='img-fluid' alt='product image' />
                </div>
                <div className='product-details'>
                    <h6 className='brand'>Havels</h6>
                    <h5 className='product-title'>
                        kids headphones bulk 10 pack multi colored for students
                    </h5>
                    <ReactStars
                        count={5} size={24} value={4} edit={false} activeColor="#ffd700"
                    />
                    <p className={`description ${grid===12 ? "d-block" : "d-none"}`}>
                        At vero eos et accusamous et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum delentiti atque corrupti quos dolores et quas molestias excepturi cupiditate non provident, similique sunt...
                    </p>
                    <p className='price'>$100.00</p>
                </div>
                <div className='action-bar position-absolute'>
                    <div className='d-flex flex-column gap-15'>
                        <button className='border-0 bg-transparent'>
                        <span><i className="fa-solid fa-angles-right"></i></span>
                        </button>
                        <button className='border-0 bg-transparent'>
                        <span><i className="fa-regular fa-eye"></i></span>
                        </button>
                        <button className='border-0 bg-transparent'>
                        <span><i className="fa-regular fa-bell"></i></span>
                        </button>
                    </div>
                </div>
            </Link>
        </div>
        <div className={`${location.pathname =="/store" ? `gr-${grid}` : "col-3"}`}>
            <Link className='product-card position-relative'>
                <div className='wishList-icon position-absolute'>
                    <Link><i className="fa-regular fa-heart"></i></Link>
                </div>
                <div className='product-image'>
                    <img src='https://images.unsplash.com/photo-1622434641406-a158123450f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=404&q=80'className='img-fluid' alt='product image' />
                    <img src='https://images.unsplash.com/photo-1634141628215-732e10d16bec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'className='img-fluid' alt='product image' />
                </div>
                <div className='product-details'>
                    <h6 className='brand'>Havels</h6>
                    <h5 className='product-title'>
                        kids headphones bulk 10 pack multi colored for students
                    </h5>
                    <ReactStars
                        count={5} size={24} value={4} edit={false} activeColor="#ffd700"
                    />
                    <p className={`description ${grid===12 ? "d-block" : "d-none"}`}>
                        At vero eos et accusamous et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum delentiti atque corrupti quos dolores et quas molestias excepturi cupiditate non provident, similique sunt...
                    </p>
                    <p className='price'>$100.00</p>
                </div>
                <div className='action-bar position-absolute'>
                    <div className='d-flex flex-column gap-15'>
                        <button className='border-0 bg-transparent'>
                        <span><i className="fa-solid fa-angles-right"></i></span>
                        </button>
                        <button className='border-0 bg-transparent'>
                        <span><i className="fa-regular fa-eye"></i></span>
                        </button>
                        <button className='border-0 bg-transparent'>
                        <span><i className="fa-regular fa-bell"></i></span>
                        </button>
                    </div>
                </div>
            </Link>
        </div>
        </>
        
    )
}

export default ProductCard;