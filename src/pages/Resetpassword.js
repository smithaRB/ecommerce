import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import CustomInput from '../components/CustomInput';

const Resetpassword = () => {
    return (
        <>
            <Meta title={"Rest Password"} />
            <BreadCrumb title="Rest Password" />
            <div className='login-wrapper py-5 home-wrapper-2'>
               <div className='container-xxl'>
               <div className='row'>
                    <div className='col-12'>
                        <div className='auth-card'>
                            <h3 className='text-center mb-3'>Reset Password</h3>
                            <form action=''className='d-flex flex-column gap-15'>
                                <CustomInput type='password' name='password' placeholder='Password'/>
                                <CustomInput type='password'name='conf password' placeholder='Confirm Password'/>                                
                                   <div>                                   
                                    <div className=' mt-3 d-flex justify-content-center gap-15 align-items-center'>
                                        <button className='button b
                                        order-0'>ok</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
               </div>
            </div>
        </>
    )
}

export default Resetpassword