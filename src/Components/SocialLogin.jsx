import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import useAuth from '../hook/useAuth';
import userAxiosPublic from '../hook/userAxiosPublic';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const { googleLogin } = useAuth()
    const axiosPublic = userAxiosPublic()
    const navigate = useNavigate();
    const handleGoogleLogin = () => {
        googleLogin()
            .then(res => {
                if (res.user) {
                    const user = {
                        name: res.user.displayName,
                        email: res.user.email
                    }
                    axiosPublic.post('/user', user)
                        .then(result => {
                            console.log(result.data); 
                            if (result.data.insertedId) {
                                Swal.fire({
                                    title: "Login with Google",
                                    icon: "success",
                                    draggable: true
                                });
                                navigate('/');
                            } else {
                                Swal.fire({
                                    title: "Welcome Back!",
                                    icon: "info",
                                    text: "You're already registered."
                                });
                                navigate('/');
                            }
                        })
                        .catch(error => {
                            console.error("Error saving user:", error);
                        });
                }
            })

    }
    return (
        <div>
            <div onClick={handleGoogleLogin} className='flex justify-center my-4'>
                <button className='btn btn-neutral'>
                    <FaGoogle /> Google
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;