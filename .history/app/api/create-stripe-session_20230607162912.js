const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const publishableKey = process.env.STRIPE_PUBLISHABLE_KEY;
const stripePromise = loadStripe(publishableKey);

async function CreateStripeSession(req, res) {
  const { priceId } = req.body;

  const transformedItem = {
    price_data: {
      currency: "usd",
      product_data: {
        name: "T-shirt",
        images: [
          "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
        ],
      },
      unit_amount: 2000,
    },
    quantity: 1,
    description: "Comfortable cotton t-shirt",
  };

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [transformedItem],
    mode: "payment",
    success_url: "youtube.com",
    cancel_url: "google.com",
  });

  res.status(200).json({ id: session.id });
}
