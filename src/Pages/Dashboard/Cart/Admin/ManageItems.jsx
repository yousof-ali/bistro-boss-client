import React from 'react';
import SectionTitle from '../../../../Components/SectionTitle';
import userMenu from '../../../../hook/useMenu';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../../hook/useAxiosSecure';
import { Link } from 'react-router-dom';

const ManageItems = () => {
    const [menu, , refetch] = userMenu();
    console.log(menu);
    const axiosSecure = useAxiosSecure()

    const handleEdit = (id) => {
             console.log(id);
    };


    const handleDelete = async (id) => {
        console.log("Attempting to delete ID:", id); // Debugging

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const res = await axiosSecure.delete(`/menu-delete/${id}`);
                    console.log("Delete Response:", res.data); // Debugging

                    if (res.data.deletedCount > 0) {
                        Swal.fire("Deleted!", "Your item has been deleted.", "success");
                        refetch(); // Refresh menu list
                    } else {
                        Swal.fire("Error", "Item not found or already deleted.", "error");
                    }
                } catch (error) {
                    console.error("Delete Error:", error);
                    Swal.fire("Error", "Something went wrong!", "error");
                }
            }
        });
    };


    return (
        <div className='p-8'>
            <div>
                <SectionTitle Heading={'MANAGE ALL ITEMS'} subHeading={'---Hurry Up!---'}></SectionTitle>
            </div>
            <div className='bg-base-200 p-4 rounded'>
                <h2 className='text-2xl font-bold'>Total Items : {menu.length}</h2>
                <div className="mt-6 max-h-screen overflow-y-auto">
                    <table className="table w-full ">
                        {/* head */}
                        <thead className='bg-[#D1A054]     text-white'>
                            <tr className=''>
                                <th>#</th>
                                <th>Item Image</th>
                                <th>Item Name</th>
                                <th>Price</th>
                                <th>ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                menu.map((single, indx) =>
                                    <tr key={indx}>
                                        <td>{indx + 1}</td>
                                        <td>

                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src={single.image}
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>


                                        </td>
                                        <td>

                                            {single._id}


                                        </td>
                                        <td>
                                            {single.price}
                                        </td>
                                        <td><div className='flex gap-4'>
                                            <Link to={`update/${single._id}`}><button  className='btn btn-accent'>Edit</button></Link>
                                            <button onClick={() => handleDelete(single._id)} className='btn btn-error'>Delete</button></div></td>

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

export default ManageItems;