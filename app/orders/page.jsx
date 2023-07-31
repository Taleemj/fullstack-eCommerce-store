"use client";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getSession, useSession } from "next-auth/react";
import { db } from "../../firebaseconfig";
import { getDoc, doc } from "firebase/firestore";

const Page = () => {
  const { data: session, status } = useSession();
  const getUserOrders = async () => {
    const docRef = doc(db, "users", `${session.user.email}`);
    const orders = await getDoc(docRef);
    console.log(orders);
  };
  useEffect(() => {
    getUserOrders();
  }, []);

  return (
    <>
      <Header />
      <main className="mx-w-screen-lg mx-auto p-10">
        <h1 className="text-3xl border-b mb-2 pb-1 border-yellow-400">
          Your orders
        </h1>
        {session ? (
          <h2>2 orders</h2>
        ) : (
          <h2>please sign in to see your orders</h2>
        )}
      </main>

      <Footer />
    </>
  );
};

export default Page;

// export async function getServerSideProps(context) {
//   const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
//   const session = getSession(context);

//   if (!session) {
//     return {
//       props: {},
//     };
//   }
//   const stripeOrders = await db
//     .collections("users")
//     .doc(`${session.user.email}`)
//     .collections("orders")
//     .orderBy("timestamp", "desc")
//     .get();
// }
