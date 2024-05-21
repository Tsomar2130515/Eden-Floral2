"use client"

import { useEffect, useState } from 'react';

import { useStripe, useElements } from '@stripe/react-stripe-js';

import { PaymentElement } from '@stripe/react-stripe-js';

import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51PEFIt090pOZzONNAeqc2bb1yMvnlD6CdpWqitNSja119DQ2sOucEFzn0GguQGpDzEjSZrAqIFr1kq3ifIXSIO4q00enn7qMqo');


  const PaymentForm = () =>  
  {
  
    const stripe = useStripe();

  const elements = useElements();

  const [message, setMessage] = useState(null);

  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e) => 
  {
    e.preventDefault();

    if (!stripe || !elements) 
    {
      return;
    }
    setIsProcessing(true);

    const { error } = await stripe.confirmPayment(
      {

      elements,

      confirmParams: 
      {
        return_url: "http://localhost:3000/Paiement/"
      },
      redirect: 'if_required'

    });

    if (error) 
    {
      setMessage(error.message);

    } 
    else if(paymentIntent && paymentIntent.status === "succeeded") 
    {
      setMessage("Paiement réussi");
    } 
    else 
    {
      setMessage("Paiement échoué");
    }

    setIsProcessing(false);
  }

  return (
    <form id="payment-form" onSubmit={handleSubmit}>

      <div className="PaymentElement">

        <PaymentElement />

      </div>

      <button disabled={isProcessing} id="submit">
        <span id="button-text">

          {isProcessing ? "Traitement..." : "Payer maintenant"}

        </span>

      </button>

      {message && <div id="error-message">{message}</div>}

    </form>
    
  )
}
export default PaymentForm

