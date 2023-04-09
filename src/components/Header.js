import React from 'react'
import { NavLink, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
const Header = () => {
  return (
    <>
      <header className='header-top-strip py-3'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-6'>
              <p className='text-white mb-0'>Free Shopping Over $100 & Free Returns</p>
            </div>
            <div className='col-6'>
              <p className='text-end'>Hotline:<a className='text-white' href='tel:+91 8792679047'>+91 8792679047</a></p>
            </div>
          </div>
        </div>
      </header>
      <header className='header-upper py-3'>
        <div className='container-xxl'>
          <div className='row align-items-center'>
            <div className='col-2'>
              <h2><Link className='text-white'>Dev Corner</Link></h2>
            </div>
            <div className='col-5'>
              <div className="input-group">
                <input type="text" className="form-control py-2" placeholder="Search Product Here..." aria-label="Search Product Here..." aria-describedby="basic-addon2" />
                <span className="input-group-text p-2" id="basic-addon2"><BsSearch className='fs-4' /></span>
              </div>
            </div>
            <div className='col-5'>
              <div className='header-upper-links d-flex align-items-center justify-content-between'>
                <div>
                  <Link to='/compare-product' className='d-flex align-item-center gap-10 text-white'>
                    <span className='headerLink'><i className="fa-solid fa-code-compare fa-2x"></i></span>
                    <p className='mb-0'>
                      Compare <br />Products
                    </p>
                  </Link>
                </div>
                <div>
                  <Link to='/wishlist' className='d-flex align-item-center gap-10 text-white'>
                    <span className='headerLink'><i className="fa-regular fa-heart fa-2x"></i></span>
                    <p className='mb-0'>
                      Favourite <br />wishlist
                    </p>
                  </Link>
                </div>
                <div>
                  <Link to='/login' className='d-flex align-item-center gap-10 text-white'>
                    <span className='headerLink'><i className="fa-regular fa-user fa-2x"></i></span>
                    <p className='mb-0'>
                      Login <br />My Account
                    </p>
                  </Link>
                </div>
                <div>
                  <Link to='/cart' className='d-flex align-item-center gap-10 text-white'>
                    <span className='headerLink'><i className="fa-solid fa-cart-shopping fa-2x"></i></span>
                    <div className='d-flex flex-column gap-10'>
                      <span className='badge bg-white text-dark'>0</span>
                      <p className='mb-0'>$ 500</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className='header-bottom py-3'>
        <div container-xxl>
          <div className='row'>
            <div className='col-12'>
              <div className='menu-bottom d-flex align-item-center gap-30'>
                <div>
                  <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    <span ><i className="fa-regular fa-rectangle-list"><span className='me-5 d-inline-block'>  Shop Categories</span></i></span>                  
                    </button>
                   
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                      <li ><Link classname="dropdown-item text-white align-item-center" to="">Action</Link></li>
                      <li ><Link classname="dropdown-item text-white align-item-center" to="" >Another action</Link></li>
                      <li><Link classname="dropdown-item text-white align-item-center" to="" >Something else here</Link></li>
                    </ul>
                  </div>
                </div>
                <div className='menu-links'>
                  <div className='d-flex align-items-center gap-15'>
                    <NavLink className="bottom-menu-links" to='/'>Home</NavLink>
                    <NavLink className="bottom-menu-links" to='/product'>Our Store</NavLink>
                    <NavLink className="bottom-menu-links" to='/blogs'>Blogs</NavLink>
                    <NavLink className="bottom-menu-links" to='/contact'>Contact</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header