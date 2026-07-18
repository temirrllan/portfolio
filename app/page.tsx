import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Sections from "@/components/Sections";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div id="top">
      <Header />
      <main className="mx-auto max-w-content px-6">
        <Hero />
        <Sections />
      </main>
      <div className="mx-auto max-w-content px-6">
        <Footer />
      </div>
    </div>
  );
}
