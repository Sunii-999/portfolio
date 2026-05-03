import Header from "@/components/Header/Header";
import Navbar from "@/components/Navbar/Navbar";
import References from "@/components/References/References";

export default function Home() {
  return (
      <main className="flex flex-1 w-full  flex-col items-center justify-between py-32 px-16 bg-white  sm:items-start">
        <Navbar />
        <Header />
        <References />
      </main>
  );
}
