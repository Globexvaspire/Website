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
        <section id="section-2" className="w-full pt-10 2xl:pt-12 bg-gradient-to-r from-white via-color1 to-color2">
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
