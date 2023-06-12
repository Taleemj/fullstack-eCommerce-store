import Banner from "@/components/Banner";
import Header from "@/components/Header";
import ProductsFeed from "@/components/ProductsFeed";
import Image from "next/image";

export default async function Home() {
  const products = await (
    await fetch("https://fakestoreapi.com/products")
  ).json();
  return (
    <div className="bg-gray-100">
      <Header />
      <main className="max-w-6xl mx-auto">
        <Banner />
        <ProductsFeed products={products} />
      </main>
    </div>
  );
}
