const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

async function CreateStripeSession(req, res) {
  const { priceId } = req.body;

  const transformedItem = {
    price_data: {
      currency: "usd",
      product_data: {
        name: "T-shirt",
        images: ["https://example.com/t-shirt.png"],
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
    success_url: "https://example.com/success",
    cancel_url: "https://example.com/cancel",
  });

  res.status(200).json({ id: session.id });
}
