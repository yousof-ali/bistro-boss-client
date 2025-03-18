import React from 'react';
import useAuth from '../hook/useAuth';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const FoodCard = ({ data }) => {
    const { user } = useAuth();
    const { name, price, image, recipe, _id } = data
    const navigate = useNavigate();
    const location = useLocation();
    const handleAddtoCart = food => {
        if (user && user?.email) {
            const productInfo = {
                productId: _id,
                userEmail: user.email,
                name,
                price
            }
            axios.post('http://localhost:5000/cart', { productInfo })
                .then(result => {
                    if (result.data.insertedId) {
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title:`${name} added to the cart`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                })
        } else {
            Swal.fire({
                title: "You are not loged In",
                text: "Do you want to login now?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Log In!"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            });
        }
    };
    return (
        <div className="card bg-base-100  shadow-sm">
            <figure className='relative'>
                <img
                    src={image}
                    alt="food" />
                <p className='p-1 rounded bg-black absolute top-4 right-4 text-white'>${price}</p>
            </figure>
            <div className="card-body">
                <h2 className="text-center text-xl font-semibold ">{name}</h2>
                <p>{recipe}</p>

                <div className="card-actions justify-center mt-4">
                    <button onClick={() => handleAddtoCart(data)} className='btn btn-outline border-0 border-b-3  hover:bg-black bg-base-200 text-yellow-600'>ADD TO CART</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;