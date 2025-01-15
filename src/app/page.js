import Banner from "@/components/home/Banner";
import Header from "@/components/home/Header";
import ItemsSection from "@/components/home/ItemsSection";
import LastSection from "@/components/home/LastSection";
import Footer from "@/components/home/Footer";

export default function Home() {
  return (
    <div className="min-h-[100vh]">
      <header className="">
        <Header/>
      </header>
      <main>
        <section id="section-1" className="w-full bg-banner-bg3 min-h-[100vh] bg-cover p-auto shadow-2xl pt-20">
          <Banner/>
        </section>
        <div className="w-full bg-gradient-to-r from-color1 via-color2 via-color3 to-color4">
          <h1 className="w-full font-title text-4xl md:text-6xl font-semibold text-center p-6 text-black shadow-xl">Products</h1>
        </div>
        <section id="section-2" className="w-full bg-gradient-to-r from-white via-color1 to-color2">
          <ItemsSection/>
        </section>
        <section id="section-3" className="w-full bg-gradient-to-r from-white via-color1 to-color2">
          <LastSection/>
        </section>
      </main>
      <footer className="bg-neutral">
        <Footer/>
      </footer>
    </div>
  );
}
