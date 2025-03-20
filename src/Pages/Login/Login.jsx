import React, { useContext, useEffect, useState } from 'react';
import background from '../../assets/others/authentication1.png'
import image from '../../assets/others/authentication.png'
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../../Providers/AuthProviders';
import Swal from 'sweetalert2';
import SocialLogin from '../../Components/SocialLogin';

const Login = () => {
    const { loginUser } = useContext(AuthContext);
    const [btndisabled, setBtnDisabled] = useState(true);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from.pathname
  || '/';
    
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])
    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.pass.value;
        loginUser(email, password)
            .then(result => {
                if (result.user) {
                    Swal.fire({
                        title: "Log in ",
                        icon: "success",
                        draggable: true
                    });
                    navigate(from);
                    
                }
            })

    }
    const handleCaptcha = (e) => {
        const userCaptcha = e.target.value
        if (validateCaptcha(userCaptcha) == true) {
            setBtnDisabled(false)

        }

        else {
            setBtnDisabled(true);
        }

    }
    return (
        <div
            style={{
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
            className="hero min-h-screen">
            <Helmet>
                <title>Bistro Boss | Login</title>
            </Helmet>
            <div className="hero-content gap-8 flex-col lg:flex-row">
                <div className='flex-1 hidden lg:flex'>
                    <img className='p-8' src={background} alt="" />
                </div>
                <div className='flex-1 lg:mx-20 min-w-[450px]'>
                    <div className="w-full">
                        <h2 className='text-3xl pb-8 font-bold text-center'>Login</h2>
                        <form onSubmit={handleLogin} action="">
                            <fieldset className="fieldset">
                                <label className="fieldset-label font-bold text-lg">Email</label>
                                <input type="email" name='email' className="input mb-2 w-full" placeholder="Email" required />
                                <label className="fieldset-label  font-bold text-lg">Password</label>
                                <input type="password" name='pass' className="input w-full" placeholder="Password" required />

                                <label className="fieldset-label py-4"> <div className=' w-full bg-white'><LoadCanvasTemplate /></div></label>
                                <input type="text" onBlur={handleCaptcha} className="input w-full" placeholder="type hear captcha" />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button disabled={btndisabled} type='submit' className="btn  text-white bg-[#D1A054] mt-4">Login</button>
                            </fieldset>
                        </form>
                        <p className='text-lg py-4 text-center  text-[#D1A054]'>New here? <Link to={'/sign-up'}>
                            <button className='btn btn-link font-bold text-lg text-[#D1A054]'>Create a New Account</button></Link></p>
                        <p className='text-center '>Or sign in with</p>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Login;