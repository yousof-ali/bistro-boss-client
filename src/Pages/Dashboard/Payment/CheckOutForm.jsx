import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../hook/useAxiosSecure';
import useCart from '../../../hook/useCart'
import useAuth from '../../../hook/useAuth';
import Swal from 'sweetalert2';


const CheckOutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const[error,setError] = useState('');
    const[clientSecret,setClientSecret] = useState('')
    const [transactionsId,setTransactionsId] = useState('');
    const axiosSecure = useAxiosSecure();
    const[cart] = useCart();
    const {user} = useAuth()
    const totalPrice = cart.reduce((total,item) => total+item.price,0)

    useEffect(() => {
        if(totalPrice>0){
            axiosSecure.post('/create-payment-intent',{price:totalPrice})
         .then(res => {
            setClientSecret(res.data.clientSecret);
            console.log(cart)
         })
        }
        

    },[]);

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
        // confirm payment 
        const {paymentIntent,error:confirmError}  = await stripe.confirmCardPayment(clientSecret,{
            payment_method:{
                card:card,
                billing_details:{
                    email:user?.email || 'anonymous',
                    name:user?.displayName || 'anonymous'
                }
            }
        })
        if(confirmError){
            console.log("confirm error")
        }else{
            console.log('payment intent',paymentIntent);
            if(paymentIntent.status === 'succeeded'){
                console.log('transaction id',paymentIntent.id)
                setTransactionsId(paymentIntent.id);
                const payment = {
                    email:user?.email,
                    price:totalPrice,
                    transactionsId:paymentIntent.id,
                    date:new Date(),
                    cartIds:cart.map(item => item._id),
                    menuItemIds:cart.map(item => item.productId),
                    status:'pending'
                }
                const res = await axiosSecure.post('/payments',payment);
                console.log(res.data);
                if(res,data.paymentResult.insertedId){
                    Swal.fire({
                        title: "Your Payment Successfully Done!",
                        icon: "success",
                        draggable: true
                      });
                }
            }
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
            <button className='btn btn-neutral my-4' type="submit" disabled={!stripe || !clientSecret}>
                Pay
            </button>
            <p className='text-sm text-red-500'>{error}</p>
            {transactionsId&&<p className='text-green-500'>{transactionsId}</p>}
        </form>
    );
};

export default CheckOutForm;