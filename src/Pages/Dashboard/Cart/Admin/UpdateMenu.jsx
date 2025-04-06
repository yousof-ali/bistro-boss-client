import React, { useEffect, useState } from 'react';
import userAxiosPublic from '../../../../hook/userAxiosPublic';
import useAxiosSecure from '../../../../hook/useAxiosSecure';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import SectionTitle from '../../../../Components/SectionTitle';
import Swal from 'sweetalert2';

const UpdateMenu = () => {
    const { id } = useParams();
    const { register, handleSubmit, setValue } = useForm()
    const [oldData, setOldData] = useState({})
    const axiosSecure = useAxiosSecure()
    const axiosPublic = userAxiosPublic()


    useEffect(() => {
        axiosPublic.get(`/single-menu/${id}`)
            .then(res => {
                setValue('name', res.data.name);
                setValue('category', res.data.category);
                setValue('price', res.data.price);
                setValue('recipe', res.data.recipe);
            })

    }, [id, axiosPublic, setValue])



    const onSubmit = async (data) => {
        const newData = {
            name: data.name,
            category: data.category,
            price: parseFloat(data.price),
            recipe: data.recipe
        }
        const res = await axiosSecure.patch(`/menu-update/${id}`, newData);
        if (res.data.modifiedCount) {
            Swal.fire({
                title: "Menu updated Done! ",
                icon: "success",
                draggable: true
            });
        };

    };
    return (
        <div className='p-6 bg-white'>
            <SectionTitle Heading={'UPDATE ITEMS'} subHeading={'Whats new?'}></SectionTitle>
            <div className='mt-4 p-8 rounded lg:p-16 bg-base-200'>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Recipe name*</legend>
                        <input  {...register('name', { required: true })} type="text" className="input w-full" placeholder="Recipe name" />

                    </fieldset>

                    <div className='flex gap-4'>
                        <fieldset className='w-1/2'>
                            <legend className="fieldset-legend">Category*</legend>
                            <select {...register('category', { required: true })} className="select select-bordered w-full">
                                <option value="drinks">Drinks</option>
                                <option value="salad">Salad</option>
                                <option value="dessert">Dessert</option>
                                <option value="soup">Soup</option>
                            </select>
                        </fieldset>
                        <fieldset className="fieldset w-1/2">
                            <legend className="fieldset-legend">Price*</legend>
                            <input  {...register('price', { required: true })} type="number
                            " className="input w-full" placeholder="Price" />

                        </fieldset>
                    </div>
                    <fieldset>
                        <legend className="fieldset-legend">Recipe Details*</legend>
                        <textarea  {...register('recipe', { required: true })} type="text" placeholder="Secondary" className="w-full  textarea textarea-secondary"></textarea>
                    </fieldset>
                    <button className='btn mt-8 btn-primary'>Update Now</button>
                </form>
            </div>
        </div>
    );
};

export default UpdateMenu;