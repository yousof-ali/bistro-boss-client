import React from 'react';
import SectionTitle from '../../../../Components/SectionTitle';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../../hook/useAxiosSecure';
import Swal from 'sweetalert2';
import { FaUser } from 'react-icons/fa';

const Allusers = () => {
    const axiosSecure = useAxiosSecure()

    const { data: users = [],refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })

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
                axiosSecure.delete(`/user/${id}`)
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

    const handleMakeAdmin = (user) => {
        axiosSecure.patch(`/user/admin/${user._id}`)
        .then(res => {
            if(res.data.modifiedCount>0){
                refetch()
                Swal.fire({
                    title: "Admin Maked!",
                    text: `${user.name} in an Admin now.`,
                    icon: "success"
                });
            }
        })
    }
    return (
        <div className='p-6'>
            <SectionTitle Heading={'MANAGE ALL USERS'} subHeading={'How Many'}></SectionTitle>
            <div className=' p-4 bg-white'>
                <div>
                    <h2 className='text-2xl font-bold'>TOTAL USERS : {users.length}</h2>
                </div>
                <div className="mt-6">
                    <table className="table ">
                        {/* head */}
                        <thead className='bg-[#D1A054]    text-white'>
                            <tr className=''>
                                <th>#</th>
                                <th>NAME</th>
                                <th>EMAIL</th>
                                <th>ROLE</th>
                                <th>ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                users.map((single, indx) =>
                                    <tr key={indx}>
                                        <td>{indx + 1}</td>
                                        <td>

                                            {single.name}


                                        </td>
                                        <td>
                                            {single.email}
                                        </td>
                                        <td>{single.role==='Admin'?"Admin":<button onClick={() => handleMakeAdmin(single)} className='btn btn-accent'><FaUser></FaUser>User</button>}</td>
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

export default Allusers;