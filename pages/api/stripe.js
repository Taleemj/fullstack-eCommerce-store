import Stripe from "stripe";
import { NextResponse } from "next/server";
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if ((req.method = "POST")) {
    const { items, email } = req.body;
    const session = await stripe.checkout.sessions.create({
      submit_type: "pay",
      mode: "payment",
      payment_method_types: ["card"],
      billing_address_collection: "auto",
      shipping_options: [
        { shipping_rate: "shr_1NLlx9FgXbwn426rxlDUfdcm" },
        { shipping_rate: "shr_1NLlwOFgXbwn426rxJxKKtMx" },
      ],
      line_items: items.map((item) => {
        return {
          description: items.description,
          price_data: {
            currency: "usd",
            product_data: {
              name: item.title,
              images: [item.image],
            },
            unit_amount: item.price * 100,
          },
          quantity: 1,
        };
      }),
      success_url: `${req.headers.origin}/success`,
      cancel_url: `${req.headers.origin}/checkout`,
      metadata: {
        email: email,
        images: JSON.stringify(items.map((item) => item.image)),
      },
    });
    res.status(200).json({ id: session.id });
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
