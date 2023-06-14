import Banner from "@/components/Banner";
import Header from "@/components/Header";
import ProductsFeed from "@/components/ProductsFeed";
import Footer from "@/components/Footer";
import Image from "next/image";

export default async function Home() {
  const products = await (
    await fetch("https://fakestoreapi.com/products")
  ).json();
  return (
    <div className="relative pb-24 min-h-screen bg-gray-100">
      <Header />
      <Banner />
      <main className="max-w-6xl mx-auto">
        <ProductsFeed products={products} />
      </main>
      <Footer />
    </div>
  );
}
