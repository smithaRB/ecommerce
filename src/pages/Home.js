import React from 'react';
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import { BlogCard } from '../components/BlogCard';
import ProductCard from '../components/ProductCard';
import SpecialProduct from '../components/SpecialProduct';
import Container from '../components/containe';



const Home = () => {
  return (
    <>
    <Container class1='home-wrapper-1 py-5'>
    <div className='row'>
            <div className='col-6'>
              <div className='main-banner position-relative p-3'>
                <img src='https://media.istockphoto.com/id/1211190855/photo/young-blonde-woman-wearing-yellow-sweater-recalling-nice-memories-as-dancing-with-earphones.jpg?s=612x612&w=is&k=20&c=iM-aekWfE3faK4mHRXOKanZIh0Od8muhIJmWfSXCBEo=' className='img-fluid rounded-3' alt="main" />
                <div className='main-banner-content position-absolute'>
                  <h4>SUPERCHARGED FOR PROS.</h4>
                  <h5>iPad S13+Pro.</h5>
                  <p>From $999.00 <br /> or $41.62/mo.</p>
                  <Link className='button'>Buy Now</Link>
                </div>
              </div>
            </div>
            <div className='col-6'>
              <div className='d-flex flex-wrap gap-10 justify-content-between align-items-center'>
                <div className='small-banner position-relative p-3'>
                  <img src='https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' className='img-fluid rounded-3' alt="main" />
                  <div className='small-banner-content position-absolute'>
                    <h4>SUPERCHARGED FOR PROS.</h4>
                    <h5>iPad S13+Pro.</h5>
                    <p>From $999.00  <br />or $41.62/mo.</p>
                  </div>
                </div>
                <div className='small-banner position-relative p-3'>
                  <img src='https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' className='img-fluid rounded-3' alt="main" />
                  <div className='small-banner-content position-absolute'>
                    <h4>Beast Sale</h4>
                    <h5>iPad S13+Pro.</h5>
                    <p>From $999.00 <br /> or $41.62/mo.</p>
                  </div>
                </div>
              </div>
              <div className='d-flex flex-wrap gap-10 justify-content-between align-items-center'>
                <div className='small-banner position-relative p-3'>
                  <img src='https://images.unsplash.com/photo-1592286927505-1def25115558?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' className='img-fluid rounded-3' alt="main" />
                  <div className='small-banner-content position-absolute'>
                    <h4>NEW ARRIVAL</h4>
                    <h5>iPad S13+Pro.</h5>
                    <p>From $999.00 <br /> or $41.62/mo.</p>
                  </div>
                </div>
                <div className='small-banner position-relative p-3'>
                  <img src='https://images.unsplash.com/photo-1600086827875-a63b01f1335c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80' className='img-fluid rounded-3' alt="main" />
                  <div className='small-banner-content position-absolute'>
                    <h4>NEW ARRIVAL</h4>
                    <h5>iPad S13+Pro.</h5>
                    <p>From $999.00 <br /> or $41.62/mo.</p>
                  </div>
                </div>
              </div>


            </div>
          </div>
    </Container>
    <Container class1='home-wrapper-2 py-5'>

    <section className='home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='servies d-flex align-items-center justify-content-between'>
                <div className='d-flex align-items-center gap-15'>
                  <span><i className="fa-solid fa-truck fa-2x"></i></span>
                  <div>
                    <h6>Free Shipping</h6>
                    <p className='mb-0'>From all orders over $5</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <span><i className="fa-solid fa-gift fa-2x"></i></span>
                  <div>
                    <h6>Daily Surprise Offers</h6>
                    <p className='mb-0'>Save upto 25% 0ff</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-10'>
                  <span><i className="fa-solid fa-headphones fa-2x"></i></span>
                  <div>
                    <h6>Support 24/7</h6>
                    <p className='mb-0'>Shop with an expert</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-10'>
                  <span><i className="fa-solid fa-tag fa-2x"></i></span>
                  <div>
                    <h6>Affordable Prices</h6>
                    <p className='mb-0'>Get Factory Default Price</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-10'>
                  <span><i className="fa-regular fa-credit-card fa-2x"></i></span>
                  <div>
                    <h6>Secure Payments</h6>
                    <p className='mb-0'>100% Protected Payment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
     
      <section className='home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='categories d-flex justify-content-between  align-items-center'>
                <div className='d-flex gap-30 align-items-center'>
                  <div>
                    <h6>Music & Gaming</h6>
                    <p>10 Items</p>
                  </div>
                  <img className='home-wrapper-img' src='https://media.istockphoto.com/id/1317927924/photo/woman-relaxing-at-home-in-evening-and-watching-tv.jpg?s=612x612&w=is&k=20&c=651nD3QCevq-Yx3KpB1XvsIpHWffQ01oV7hiyChyXRw=' alt='camera' />
                </div>
                <div className='d-flex gap-30 align-items-center'>
                  <div>
                    <h6>Smart Tv</h6>
                    <p>10 Items</p>
                  </div>
                  <img className='home-wrapper-img' src='https://media.istockphoto.com/id/1350949720/photo/mock-up-wall-mounted-tv-with-cabinet-and-armchair-on-white-wall-background.jpg?s=612x612&w=is&k=20&c=zbltEas7ZFP0A5ch4Er3aE8Fo7lu5caHFu7C1UASGpo=' alt='camera' />
                </div>
                <div className='d-flex gap-30 align-items-center'>
                  <div>
                    <h6>Smart Watches</h6>
                    <p>10 Items</p>
                  </div>
                  <img className='home-wrapper-img' src='https://images.unsplash.com/photo-1539874754764-5a96559165b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=930&q=80' alt='camera' />
                </div>
                <div className='d-flex gap-30 align-items-center'>
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img className='home-wrapper-img' src='https://images.unsplash.com/photo-1581591524425-c7e0978865fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' alt='camera' />
                </div>

              </div>
              <div className='categories d-flex justify-content-between  align-items-center'>
                <div className='d-flex gap-30 align-items-center'>
                  <div>
                    <h6>Music & Gaming</h6>
                    <p>10 Items</p>
                  </div>
                  <img className='home-wrapper-img' src='https://media.istockphoto.com/id/1317927924/photo/woman-relaxing-at-home-in-evening-and-watching-tv.jpg?s=612x612&w=is&k=20&c=651nD3QCevq-Yx3KpB1XvsIpHWffQ01oV7hiyChyXRw=' alt='camera' />
                </div>
                <div className='d-flex gap-30 align-items-center'>
                  <div>
                    <h6>Smart Tv</h6>
                    <p>10 Items</p>
                  </div>
                  <img className='home-wrapper-img' src='https://media.istockphoto.com/id/1350949720/photo/mock-up-wall-mounted-tv-with-cabinet-and-armchair-on-white-wall-background.jpg?s=612x612&w=is&k=20&c=zbltEas7ZFP0A5ch4Er3aE8Fo7lu5caHFu7C1UASGpo=' alt='camera' />
                </div>
                <div className='d-flex gap-30 align-items-center'>
                  <div>
                    <h6>Smart Watches</h6>
                    <p>10 Items</p>
                  </div>
                  <img className='home-wrapper-img' src='https://images.unsplash.com/photo-1539874754764-5a96559165b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=930&q=80' alt='camera' />
                </div>
                <div className='d-flex gap-30 align-items-center'>
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img className='home-wrapper-img' src='https://images.unsplash.com/photo-1581591524425-c7e0978865fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' alt='camera' />
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='featured-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
           <div className='col-12'>
            <h3 className='section-heading'>Featured Collection</h3>
           <div className='d-flex align-items-center'>
           <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
           </div>
           </div>
          </div>
        </div>
      </section>
      <section className='famous-wrapper py-3 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-3'>
              <div className='famous-card position-relative'>
                <img src='https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'className='img-fluid' alt='famous'/>
                <div className='famous-content position-absolute'>
                <h5>Big Screen</h5>
                <h6>Smart Watch Series 7</h6>
                <p>From $399 or $16.62/mo. for 24 mo.</p>
                </div>
              </div>
            </div>
            <div className='col-3'>
              <div className='famous-card position-relative'>
                <img src='https://media.istockphoto.com/id/1360763789/photo/modern-living-room-interior-with-television-set-sofa-coffee-table-and-garden-view-from-the.jpg?s=612x612&w=is&k=20&c=EVDx0oNPcLgsXdtaXUZgILRKQ4RCog9y_HfH4NxUEcI=' className='img-fluid' alt='famous'/>
                <div className='famous-content position-absolute'>
                <h5>Studio Display</h5>
                <h6>600 nits of brightness.</h6>
                <p>27-inch 5k Retina display</p>
                </div>
              </div>
            </div>
             <div className='col-3'>
              <div className='famous-card position-relative'>
                <img src='https://images.unsplash.com/photo-1649859398731-d3c4ebca53fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' className='img-fluid' alt='famous'/>
                <div className='famous-content position-absolute'>
                <h5>SMARTPHONES</h5>
                <h6>SmartPhone 13 Pro</h6>
                <p>Now in Green. From $999.00 or $416/mo. for 24 mo. Footnote*</p>
                </div>
              </div>
            </div>
            <div className='col-3'>
              <div className='famous-card position-relative'>
                <img src='https://asianic.com.ph/products/adi-across-s010-bk-1.jpg' className='img-fluid' alt='famous'/>
                <div className='famous-content position-absolute'>
                <h5 >HOME SPEAKERS</h5>
                <h6 > Room-filling Sound.</h6>
                <p >From $699 or $116.58/mo.for 12mo.*</p>
                </div>
              </div>
            </div>


          </div>
        </div>
      </section>
      <section className='special-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Special Products</h3>
            </div>
          </div>
          <div className='row'>
            <SpecialProduct/>
            <SpecialProduct/>
            <SpecialProduct/>
            <SpecialProduct/>
          </div>
        </div>
      </section>
      <section className='popular-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
           <div className='col-12'>
            <h3 className='section-heading'>Our Popular Products</h3>
           <div className='d-flex align-items-center'>
           
           </div>
           <div className='row'>
           <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
           </div>
           </div>
          </div>
        </div>
      </section>
      <section className='marque-wrapper home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='marquee-inner-wrapper card-wrapper'>
                <Marquee className='d-flex'>
                 <div className='mx-4 w-25'>
                  <img  className='marquee-img' src='https://images.unsplash.com/photo-1614312385003-dcea7b8b6ab6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1026&q=80'alt='brand'/>
                 </div>
                 <div className='mx-4 w-25'>
                  <img  className='marquee-img' src='https://images.unsplash.com/photo-1649006708938-cf885c646df6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=861&q=80'alt='brand'/>
                 </div>
                 <div className='mx-4 w-25'>
                  <img  className='marquee-img' src='https://images.unsplash.com/photo-1653389526309-f8e2e75f8aaf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=862&q=80'alt='brand'/>
                 </div>
                 <div className='mx-4 w-25'>
                  <img  className='marquee-img' src='https://1000logos.net/wp-content/uploads/2017/03/LG-logo.png'alt='brand'/>
                 </div>
                 <div className='mx-4 w-25'>
                  <img  className='marquee-img' src='https://images.unsplash.com/photo-1604773851233-7ef99c08735f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80'alt='brand'/>
                 </div>
                 <div className='mx-4 w-25'>
                  <img  className='marquee-img' src='https://images.unsplash.com/photo-1551817959-7c131576acb5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'alt='brand'/>
                 </div>
                 <div className='mx-4 w-25'>
                  <img  className='marquee-img' src='https://1000logos.net/wp-content/uploads/2017/07/Dell-Logo-1989.jpg'alt='brand'/>
                 </div>
                 <div className='mx-4 w-25'>
                  <img  className='marquee-img' src='https://i.insider.com/556c53ab6da8119307ecba19?width=1000&format=jpeg&auto=webp'alt='brand'/>
                 </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='blog-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
           <div className='col-12'>
            <h3 className='section-heading'>Our Latest Blogs</h3>
           </div>
          </div>
          <div className='row'>
              <div className='col-3'>
              <BlogCard/>
              </div>
              <div className='col-3'>
              <BlogCard/>
              </div>
              <div className='col-3'>
              <BlogCard/>
              </div>
              <div className='col-3'>
              <BlogCard/>
              </div>
            </div>
        </div>
      </section>
      <section className='featured-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
           <div className='col-12'>
            <h3 className='section-heading'>Featured Collection</h3>
           <div className='d-flex align-items-center'>
           <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
           </div>
           </div>
          </div>
        </div>
      </section>
      <section className='blog-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Our Latest Blogs</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home