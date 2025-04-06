import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';

const CheckOutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const[error,setError] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!stripe || !elements){
            return;
        }
        const card = elements.getElement(CardElement);
        if(card === null){
            return
        }

        const {error,paymentMethod} = await stripe.createPaymentMethod({
            type:'card',
            card
        })
        if(error){
            console.log('pyment error',error);
            setError(error.message)
        }
        else{
            console.log('pyment method',paymentMethod)
            setError('');
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button className='btn btn-neutral my-4' type="submit" disabled={!stripe}>
                Pay
            </button>
            <p className='text-sm text-red-500'>{error}</p>
        </form>
    );
};

export default CheckOutForm;