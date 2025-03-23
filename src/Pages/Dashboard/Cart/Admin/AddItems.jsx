import React from 'react';
import SectionTitle from '../../../../Components/SectionTitle';
import { useForm } from 'react-hook-form';

const AddItems = () => {
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => console.log(data)
    return (
        <div className='p-6 bg-white'>
            <SectionTitle Heading={'ADD AN ITEMS'} subHeading={'Whats new?'}></SectionTitle>
            <div className='mt-4 p-8 rounded lg:p-16 bg-base-200'>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Recipe name*</legend>
                        <input {...register('name',{required:true})} type="text" className="input w-full" placeholder="Recipe name" />

                    </fieldset>

                    <div className='flex gap-4'>
                        <fieldset className='w-1/2'>
                            <legend className="fieldset-legend">Category*</legend>
                            <select {...register('category',{required:true})} className="select select-bordered w-full ">
                                <option disabled selected>Select a category</option>
                                <option value={'drinks'}>drinks</option>
                                <option value={'salad'}>salad </option>
                                <option value={'dessert'}>dessert</option>
                                <option value={'soup'}>soup</option>
                            </select>
                        </fieldset>
                        <fieldset className="fieldset w-1/2">
                            <legend className="fieldset-legend">Price*</legend>
                            <input {...register('price',{required:true})} type="number
                            " className="input w-full" placeholder="Price" />

                        </fieldset>
                    </div>
                    <fieldset>
                    <legend className="fieldset-legend">Recipe Details*</legend>
                        <textarea {...register('recipe',{required:true})} type="text" placeholder="Secondary" className="w-full mt-6 textarea textarea-secondary"></textarea>
                    </fieldset>
                    <fieldset className='my-6'>
                   <input type="file" {...register('image',{required:true})} className='file-input' placeholder='choice a file'/>
                    </fieldset>
                    <button className='btn btn-primary'>Add Item</button>
                </form>
            </div>
        </div>
    );
};

export default AddItems;