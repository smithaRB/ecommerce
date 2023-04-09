import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';

const Contact = () => {
  return (
    <>
      <Meta title={"contact Us"} />
      <BreadCrumb title="contact Us" />
      <div className='contact-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31135.88007071988!2d77.26689718566871!3d12.714400839103947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae4dd83a66e425%3A0xccb8201d46743a0b!2sRamanagara%2C%20Karnataka%20562159!5e0!3m2!1sen!2sin!4v1680516353288!5m2!1sen!2sin" width="450" height="450" className='border-0 w-100'  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>             
            </div>
            <div className='col-12 mt-5'>
              <div className='contact-inner-wrapper d-flex justify-content-between'>
                <div>
                  <h3 className='contact-title mb-4'>Contact</h3>
                  <form action='' className='d-flex flex-column gap-15'>
                    <div>
                      <input type='text' className='form-control' placeholder='Name'/>
                    </div>
                    <div>
                      <input type='email' className='form-control'placeholder='Email'/>
                    </div>
                    <div>
                      <input type='tel' className='form-control' placeholder='Mobile Number'/>
                    </div>
                    <div>
                      <textarea name="" id=""className='w-100 form-control' cols="30" rows="4" placeholder='Comments'></textarea>
                    </div>
                    <div>
                      <button className='button border-0'>Submit</button>
                    </div>
                  </form>
                </div>
                <div>
                <h3 className='contact-title mb-4'>Get in touch with Us</h3>
                <div>
                  <ul className='ps-0'>
                    <li className='mb-3 d-flex gap-15 align-items-center'>
                      <i className="fa-solid fa-house"></i>
                    <address className='mb-0'>Hno:916A, Chamundeshwari Extention 4th cross Ramanagara</address>
                    </li>
                    <li className='mb-3 d-flex gap-15 align-items-center'>
                      <i className="fa-solid fa-phone"></i>
                      <a  href='tel:+91 8792679047'>+91 8792679047</a>
                      </li>
                    <li className='mb-3 d-flex gap-15 align-items-center'>
                      <i className="fa-solid fa-envelope"></i>
                      <a  href='mailto:smitharb20@gmail.com'>smitharb20@gmail.com</a>
                      </li>
                    <li className='mb-3 d-flex gap-15 align-items-center'>
                      <i className="fa-sharp fa-solid fa-info"></i>
                      <p className='mb-0'>Monday - Friday 10Am - 8pm</p>
                      </li>
                  </ul>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact
