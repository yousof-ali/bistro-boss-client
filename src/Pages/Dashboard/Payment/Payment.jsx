import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheckOutForm from './CheckOutForm';

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PK);

const Payment = () => {
    return (
      <div>
         <Elements stripe={stripePromise}>
             <CheckOutForm></CheckOutForm>
         </Elements>
      </div>
    );
};

export default Payment;