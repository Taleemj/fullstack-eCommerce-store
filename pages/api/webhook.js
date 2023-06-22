import { buffer } from "micro";
import * as admin from "firebase-admin";
import Stripe from "stripe";

const serviceAccount = require("../../firebaseadminpermissions.json");
const app = !admin.apps.length
  ? admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    })
  : admin.app();

const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
const endpointsecret = process.env.STRIPE_SIGNING_SECRET;

const fullfilledorder = async (session) => {
  return app
    .firestore()
    .collection("users")
    .doc(session.metadata.email)
    .collection("orders")
    .doc(session.id)
    .set({
      amount: session.amount_total / 100,
      amount_shipping: session.total_details.amount_shipping / 100,
      images: JSON.parse(session.metadata.images),
    });
};

export default async function (req, res) {
  if (req.method == "POST") {
    const requestBuffer = await buffer(req);
    const payload = requestBuffer.toString();
    const sig = req.headers["stripe-signature"];

    let event;

    try {
      event = stripe.webhooks.constructEvent(payload, sig, endpointsecret);
    } catch (error) {
      return res.status(200).send(error.message);
    }

    if ((event.type = "checkout.session.completed")) {
      const session = event.data.object;

      return fullfilledorder(session)
        .then(() => res.status(200))
        .catch((err) => res.status(400).send("webhook error", err.message));
    }
  }
}

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};
