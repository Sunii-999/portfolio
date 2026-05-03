import FeaturedProjects from "@/components/FeaturedProjects/FeaturedProjects";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import References from "@/components/References/References";

export default function Home() {
  return (
    <main className="bg-white">
      <Header />
      <References />
      <FeaturedProjects />
      <Footer />
    </main>
  );
}
