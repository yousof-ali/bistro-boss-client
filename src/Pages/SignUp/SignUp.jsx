import React, { useContext } from 'react';
import background from '../../assets/others/authentication1.png'
import image from '../../assets/others/authentication.png'
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form"
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../../Providers/AuthProviders';
import userAxiosPublic from '../../hook/userAxiosPublic';
import Swal from 'sweetalert2';
import { updateProfile } from 'firebase/auth';
import SocialLogin from '../../Components/SocialLogin';


const SignUp = () => {
    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const axiosPublic = userAxiosPublic();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        createUser(data.email, data.password)
            .then(result => {
                if (result.user) {
                    updateProfile(result.user, {
                        displayName: data.name
                    })
                        .then(_ => {
                            const userInfo = {
                                name: data.name,
                                email: data.email
                            };
                            axiosPublic.post('/user', userInfo)
                                .then(result => {
                                    if (result.data.insertedId) {
                                        Swal.fire({
                                            title: "Sign Up ",
                                            icon: "success",
                                            draggable: true
                                        });
                                        navigate('/')
                                    }
                                })
                        })
                }
            })
    };
    return (
        <div
            style={{
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
            className="hero min-h-screen">
            <Helmet>
                <title>Bistro Boss | Sign Up</title>
            </Helmet>
            <div className="hero-content gap-8 flex-col lg:flex-row">
                <div className='flex-1 lg:mx-20 min-w-[450px]'>
                    <div className="w-full">
                        <h2 className='text-3xl pb-8 font-bold text-center'>Sign Up</h2>
                        <form onSubmit={handleSubmit(onSubmit)} action="">
                            <fieldset className="fieldset">
                                <label className="fieldset-label font-bold text-lg">Name</label>
                                <input type="text" {...register("name", { required: true })} className="input mb-2 w-full" placeholder="Name" />
                                {errors.name?.type === 'required' && <p className='text-red-500'>Name is required !</p>}
                                <label className="fieldset-label font-bold text-lg">Email</label>
                                <input type="email" {...register("email", { required: true })} className="input mb-2 w-full" placeholder="Email" />
                                {errors.email?.type === 'required' && <p className='text-red-500'>Email is require!</p>}
                                <label className="fieldset-label  font-bold text-lg">Password</label>
                                <input type="password" {...register("password", { required: true, minLength: 6, maxLength: 20, pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()-+]).+$/ })} className="input w-full" placeholder="Password" />
                                {errors.password?.type === 'required' && <p className='text-red-500'>Password is require!</p>}
                                {errors.password?.type === 'minLength' && <p className='text-red-500'>Password mus be 6 characters!</p>}
                                {errors.password?.type === 'maxLength' && <p className='text-red-500'>Password must be less than 20 characters!</p>}
                                {errors.password?.type === 'pattern' && <p className='text-red-500'>Must use one uppercase, one lowercase, one number <br /> and one special character!</p>}
                                <button type='submit' className="btn  text-white bg-[#D1A054] mt-4">Sign Up</button>
                            </fieldset>
                        </form>
                        <p className='text-lg py-4 text-center  text-[#D1A054]'>Already registered?  <Link to={'/login'}>
                            <button className='btn btn-link font-bold text-lg text-[#D1A054]'>Go to log in</button></Link></p>
                        <p className='text-center '>Or sign in with</p>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
                <div className='flex-1 hidden lg:flex'>
                    <img className='p-8' src={background} alt="" />
                </div>


            </div>
        </div>
    );
};

export default SignUp;