import React from 'react'
import PaymentCo from '../../components/Payment/PaymentCo'
import {Elements,CardElement,useElements, useStripe} from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js';


const stripePublicKey = process.env.NEXT_PUBLIC_VITE_STRIPE_PK;

if (!stripePublicKey) {
  throw new Error('Stripe public key is not defined.');
}
const stripePromise = loadStripe(stripePublicKey);

function Payment() {
  return (
    <div>
        <Elements stripe={stripePromise}>
        <PaymentCo />
         </Elements>
    </div>
  )
}

export default Payment