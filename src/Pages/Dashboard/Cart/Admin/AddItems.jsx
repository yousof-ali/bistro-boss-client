import React from 'react';
import SectionTitle from '../../../../Components/SectionTitle';
import { useForm } from 'react-hook-form';
import userAxiosPublic from '../../../../hook/userAxiosPublic'

const image_api_key = import.meta.env.VITE_IMAGE_HOSTING_API_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_api_key}`

const AddItems = () => {
    const { register, handleSubmit } = useForm()
    const axiosPublic = userAxiosPublic();
    const onSubmit = async(data) => {
        const imageFile = {image:data.image[0]}
        const res =  await axiosPublic.post(image_hosting_api,imageFile,{
            headers:{
                'content-type':'multipart/form-data'
            }
        });
        console.log(res.data);
          
    } 
    return (
        <div className='p-6 bg-white'>
            <SectionTitle Heading={'ADD AN ITEMS'} subHeading={'Whats new?'}></SectionTitle>
            <div className='mt-4 p-8 rounded lg:p-16 bg-base-200'>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Recipe name*</legend>
                        <input {...register('name', { required: true })} type="text" className="input w-full" placeholder="Recipe name" />

                    </fieldset>

                    <div className='flex gap-4'>
                        <fieldset className='w-1/2'>
                            <legend className="fieldset-legend">Category*</legend>
                            <select defaultValue="" {...register('category', { required: true })} className="select select-bordered w-full">
                                <option value="" disabled>Select a category</option>
                                <option value="drinks">Drinks</option>
                                <option value="salad">Salad</option>
                                <option value="dessert">Dessert</option>
                                <option value="soup">Soup</option>
                            </select>
                        </fieldset>
                        <fieldset className="fieldset w-1/2">
                            <legend className="fieldset-legend">Price*</legend>
                            <input {...register('price', { required: true })} type="number
                            " className="input w-full" placeholder="Price" />

                        </fieldset>
                    </div>
                    <fieldset>
                        <legend className="fieldset-legend">Recipe Details*</legend>
                        <textarea {...register('recipe', { required: true })} type="text" placeholder="Secondary" className="w-full mt-6 textarea textarea-secondary"></textarea>
                    </fieldset>
                    <fieldset className='my-6'>
                        <input type="file" {...register('image', { required: true })} className='file-input' placeholder='choice a file' />
                    </fieldset>
                    <button className='btn btn-primary'>Add Item</button>
                </form>
            </div>
        </div>
    );
};

export default AddItems;