import React from 'react';
import useCart from '../../../hook/useCart';
import SectionTitle from '../../../Components/SectionTitle';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hook/useAxiosSecure';
import { Link } from 'react-router-dom';


const Cart = () => {
    const [cart,refetch] = useCart();
    const axiosSecure = useAxiosSecure()
    const totalAmount = cart.reduce((total, items) => total + items.price, 0)

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/cart/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })

            }
        });
    }

    return (
        <div>
            <div className=''>
                <SectionTitle Heading={'WANNA ADD MORE?'} subHeading={'My cart'}></SectionTitle>
            </div>
            <div className='bg-white rounded shadow md:mx-12 p-4'>
                <div className='flex justify-between items-center'>
                    <h2 className='text-xl font-bold'>TOTAL ORDERS : {cart.length}</h2>
                    <h2 className='text-xl font-bold'>TOTAL PRICE : {totalAmount}</h2>
                    {
                        cart.length ? <Link to={'pyment'}><button className='btn btn-secondary'>PAY</button></Link>:<button className='btn' disabled>PAY</button>
                    }



                </div>
                <div className="mt-6">
                    <table className="table ">
                        {/* head */}
                        <thead className='bg-[#D1A054]    text-white'>
                            <tr className=''>
                                <th>#</th>
                                <th>ITEM IMAGE</th>
                                <th>ITEM NAME</th>
                                <th>PRICE</th>
                                <th>ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                cart.map((single, indx) =>
                                    <tr key={indx}>
                                        <td>{indx + 1}</td>
                                        <td>

                                            <div className=" h-12 w-12">
                                                <img
                                                    src={single.image
                                                    }
                                                    alt="food" />
                                            </div>


                                        </td>
                                        <td>
                                            {single.name}
                                        </td>
                                        <td>{single.price}</td>
                                        <th>
                                            <button onClick={() => handleDelete(single._id)} className="btn btn-error">DELETE</button>
                                        </th>
                                    </tr>
                                )
                            }


                        </tbody>

                    </table>
                </div>

            </div>
        </div>
    );
};

export default Cart;