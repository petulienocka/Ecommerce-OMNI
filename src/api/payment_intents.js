import Stripe from 'stripe';

const stripe = new Stripe(process.env.SECRET_KEY);

const API = async (req, res) => {
    if (req.method === 'POST') {
        try {
            const { amount } = req.body;

            const paymentIntent = await stripe.paymentIntents.create({
                amount,
                currency: 'dkk',
            });

            res.status(200).send(paymentIntent.client_secret);
        } catch (err) {
            res.status(500).json({ statusCode: 500, message: err.message });
        }
    } else {
        res.setHeader('Allow', 'POST');
        res.status(405).end('Method Not Allowed');
    }
};

export default API;
