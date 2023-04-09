import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';

const Wishlist = () => {
    return (
        <>
            <Meta title={"Wishlist"} />
            <BreadCrumb title="Wishlist" />
            <div className='wishlist-wrapper home-wrapper-2 py-5'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-3'>
                        <div className='whishlist-card position-relative'>
                        <div className="position-absolute cross img-fluid">
                            <i className="fa-sharp fa-solid fa-x"></i>
                            </div>
                            <div className='wishlist-card-img'>
                                <img src='https://images.unsplash.com/photo-1623998021450-85c29c644e0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=957&q=80'className='wishlist-image' alt='watch'/>
                            </div>
                            <div className='py-3 px-3'>
                            <h5 className='title'>
                                    Honor Tl 7.0 1 FB RAM & GB ROM 7 Inch with wi-fi+3G Tablet
                                </h5>
                                <h6 className='price mb-3 mt-3'>$100</h6>
                            </div>
                        </div>
                        </div>
                        <div className='col-3'>
                        <div className='whishlist-card position-relative'>
                        <div className="position-absolute cross img-fluid">
                            <i className="fa-sharp fa-solid fa-x"></i>
                            </div>
                            <div className='wishlist-card-img'>
                                <img src='https://images.unsplash.com/photo-1623998021450-85c29c644e0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=957&q=80'className='wishlist-image' alt='watch'/>
                            </div>
                            <div className='py-3 px-3'>
                            <h5 className='title'>
                                    Honor Tl 7.0 1 FB RAM & GB ROM 7 Inch with wi-fi+3G Tablet
                                </h5>
                                <h6 className='price mb-3 mt-3'>$100</h6>
                            </div>
                        </div>
                        </div>
                        <div className='col-3'>
                        <div className='whishlist-card position-relative'>
                        <div className="position-absolute cross img-fluid">
                            <i className="fa-sharp fa-solid fa-x"></i>
                            </div>
                            <div className='wishlist-card-img'>
                                <img src='https://images.unsplash.com/photo-1623998021450-85c29c644e0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=957&q=80'className='wishlist-image' alt='watch'/>
                            </div>
                            <div className='py-3 px-3'>
                            <h5 className='title'>
                                    Honor Tl 7.0 1 FB RAM & GB ROM 7 Inch with wi-fi+3G Tablet
                                </h5>
                                <h6 className='price mb-3 mt-3'>$100</h6>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Wishlist