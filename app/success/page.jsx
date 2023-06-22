import Header from "@/components/Header";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import Footer from "@/components/Footer";

const Page = () => {
  return (
    <div className="h-screen bg-gray-100">
      <Header />

      <main className="w-full md:py-10">
        <div className="bg-white flex md:w-[55%] mx-auto flex-col md:p-10 p-4">
          <div className="flex items-center space-x-2 mb-5">
            <CheckCircleIcon className="text-green-500 h-10" />
            <h1 className="text-3xl">Your order has been confirmed</h1>
          </div>
          <p>
            Thank you for shoping at thestore Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Temporibus, ab ratione quae totam rem
            assumenda aspernatur cum vero in eius.
          </p>

          <Link href={"/orders"} className="w-full">
            <button className="button mt-8 w-full">Go to my orders</button>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Page;
