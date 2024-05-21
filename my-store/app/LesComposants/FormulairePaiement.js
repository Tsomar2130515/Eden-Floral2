import React, { useState } from 'react';

import { Elements } from '@stripe/react-stripe-js';

import { loadStripe } from '@stripe/stripe-js';

import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('YOUR_PUBLISHABLE_KEY');

const PaymentForm = () => 
{
  const stripe = useStripe();

  const elements = useElements();

  const [error, setError] = useState(null);

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => 
  {
    event.preventDefault();

    setLoading(true);

    if (!stripe || !elements) 
    {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod(
    {
      type: 'card',

      card: cardElement,

    });

    setLoading(false);

    if (error) 
    {
      console.error('[createPaymentMethod error]', error);

      setError(error.message);

    } 
    else 
    {
      console.log('[PaymentMethod]', paymentMethod);
    }

  };

  return (
    <form onSubmit={handleSubmit}>

      <div>

        <label>

          Card details

          <CardElement className="card-element" />

        </label>

      </div>

      {error && <div style={{ color: 'red' }}>{error}</div>}

      <button type="submit" disabled={!stripe || loading}>

        {loading ? 'Processing...' : 'Pay'}

      </button>

    </form>

  );

};

export default function StripeElements() 
{
  return (

    <Elements stripe={stripePromise}>

      <PaymentForm />
      
    </Elements>
  );
}
