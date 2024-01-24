import React,{useState} from 'react'

import {Elements,CardElement,useElements, useStripe,PaymentElement} from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js';





const products=[
    {id:1, name:'nasi', price:100},
    {id:2, name:'amir', price:200},
  ]


  const stripePublicKey = process.env.NEXT_PUBLIC_VITE_STRIPE_PK;

  if (!stripePublicKey) {
    throw new Error('Stripe public key is not defined.');
  }
 const stripePromise = loadStripe(stripePublicKey);


function PaymentCo() {
    const elements=useElements()
    const stripe=useStripe()
   
  const handleSubmit=async(e:any)=>{
    e.preventDefault()
    if(!stripe||!elements){
        return
    }
 
    const {clientSecret} = await fetch('/api/v1/payment/config', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            patmentMethodType:'card', currency:'eur'
        })
    }).then(res => res.json())
   
  }
  const paymentElementOptions:any = {
    layout: "tabs",
  };
  const cardElementOptions = {
    style: {
      base: {
        fontSize: '18px',
        color: '#424770',
        '::placeholder': {
          color: '#aab7c4',
          border: '1px solid #941e1e'
        },
        border: '1px solid #941e1e', // Add border styling
        borderRadius: '4px', // Optional: Add border-radius for rounded corners
        padding: '10px', // Optional: Add padding for spacing
      },
      invalid: {
        color: '#9e2146',
      },
    },
  };

  return (
    <>
    
     <form onSubmit={handleSubmit}>
     <Elements stripe={stripePromise}>

     <div style={{width:'50%',height:'50vh',backgroundColor:'#f5f5f5', margin:'auto',marginTop:'100px'}}>
    
  <div className="form-row">
    <label >
      Credit or debit card number
    </label>
    {/* <div style={{border:'1px solid #941e1e', borderRadius:'4px',padding:'10px'}}> */}
<CardElement options={cardElementOptions} />
    {/* </div> */}
    <div id="card-element">
      
    
    </div>
  
    <div id="card-errors" role="alert"></div>
  </div>
  <div className="form-row">
    <label >
      Country
    </label>
    <input name="country" className="field" placeholder="Choose country"/>
 </div>

 

    <br/>
    <button type="submit" disabled={!stripe}>
        Pay
      </button>
    </div>
  
  </Elements>
  </form>
    </>
  )
}

export default PaymentCo




{/* <input type="text" placeholder='Card Number' />
<input type="text" placeholder='MM /YY' />
<input type="text" placeholder='CVC' /> */}