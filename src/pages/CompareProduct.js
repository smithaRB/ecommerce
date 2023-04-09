import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Color from '../components/Color';
import Meta from '../components/Meta';

const CompareProduct = () => {
    return (
        <>
            <Meta title={"compare-products"} />
            <BreadCrumb title="compare-products" />
            <div className='compare-product-wrapper py-5 home-wrapper-2'>
             <div className='container-xxl'>
                <div className='row'>
                    <div className='col-3'>
                        <div className='compare-product-card position-relative'>
                            <div className="position-absolute cross img-fluid">
                            <i className="fa-sharp fa-solid fa-x"></i>
                            </div>
                            <div className='product-card-img'>
                                <img src='https://images.unsplash.com/photo-1623998021450-85c29c644e0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=957&q=80'className='compare-product-watch' alt='watch'/>
                            </div>
                            <div className='compare-product-details'>
                                <h5 className='title'>
                                    Honor Tl 7.0 1 FB RAM & GB ROM 7 Inch with wi-fi+3G Tablet
                                </h5>
                                <h6 className='price mb-3 mt-3'>$100</h6>
                                <div>
                                    <div className='product-detail'>
                                        <h5>Band:</h5>
                                        <p>Havels</p>
                                    </div>
                                    <div className='product-detail'>
                                        <h5>Type:</h5>
                                        <p>Watch</p>
                                    </div>
                                    <div className='product-detail'>
                                        <h5>Availablity:</h5>
                                        <p>In Stock</p>
                                    </div>
                                    <div className='product-detail'>
                                        <h5>Color:</h5>
                                        <Color/>
                                    </div>
                                    <div className='product-detail'>
                                        <h5>Size:</h5>
                                        <div className='d-flex gap-10'>
                                            <p>S</p>
                                            <p>M</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className='compare-product-card position-relative'>
                            <div className="position-absolute cross img-fluid">
                            <i className="fa-sharp fa-solid fa-x"></i>
                            </div>
                            <div className='product-card-img'>
                                <img src='https://images.unsplash.com/photo-1623998021450-85c29c644e0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=957&q=80'className='compare-product-watch' alt='watch'/>
                            </div>
                            <div className='compare-product-details'>
                                <h5 className='title'>
                                    Honor Tl 7.0 1 FB RAM & GB ROM 7 Inch with wi-fi+3G Tablet
                                </h5>
                                <h6 className='price mb-3 mt-3'>$100</h6>
                                <div>
                                    <div className='product-detail'>
                                        <h5>Band:</h5>
                                        <p>Havels</p>
                                    </div>
                                    <div className='product-detail'>
                                        <h5>Type:</h5>
                                        <p>Watch</p>
                                    </div>
                                    <div className='product-detail'>
                                        <h5>Availablity:</h5>
                                        <p>In Stock</p>
                                    </div>
                                    <div className='product-detail'>
                                        <h5>Color:</h5>
                                        <Color/>
                                    </div>
                                    <div className='product-detail'>
                                        <h5>Size:</h5>
                                        <div className='d-flex gap-10'>
                                            <p>S</p>
                                            <p>M</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
            </div>
        </>
    )
};

export default CompareProduct