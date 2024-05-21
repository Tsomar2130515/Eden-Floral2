import { loadStripe } from '@stripe/stripe-js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  
  const stripe = await loadStripe(process.env.STRIPE_SECRET_KEY);

  try {
    
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 1000, 
      currency: 'CAD',
    });

    
    res.status(200).json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
}
