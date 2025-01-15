import React from "react";
import Footer from "@/components/home/Footer";
import AboutHeader from "@/components/about/AboutHeader";
import AboutBanner from "@/components/about/AboutBanner";
import AboutWelcome from "@/components/about/AboutWelcome";
import AboutIntroducing from "@/components/about/AboutIntroducing";
import AboutLearn from "@/components/about/AboutLearn";
import AboutReviews from "@/components/about/AboutReviews";
import AboutFAQ from "@/components/about/AboutFAQ";

const AboutPage = () => {
    return (
        <div className="min-h-[100vh]">
      <header className="">
        <AboutHeader/>
      </header>
      <main>
        <section id="section-1" className="w-full min-h-[100vh] bg-about-bg3 bg-no-repeat bg-cover bg-color3 flex items-center">
          <AboutBanner/>
        </section>
        <div className="w-full">
          <h1 className="bg-neutral p-6 lg:p-10 text-white font-title text-2xl lg:text-4xl text-center shadow-2xl">&quot;Greatness begins with the courage to start something new&quot;</h1>
        </div>
        <section id="section-2" className="w-full bg-white">
          <AboutWelcome/>
        </section>
        <div className="w-full">
          <h1 className="bg-neutral p-6 lg:p-10 text-white font-title text-2xl lg:text-4xl text-center shadow-2xl">Enroll Now and start earning!</h1>
        </div>
        <section id="section-3" className="bg-white w-full">
            <AboutIntroducing/>
        </section>
        <section id="section-4" className="bg-white w-full">
            <AboutLearn/>
        </section>
        <div className="w-full">
          <h1 className="bg-neutral p-6 lg:p-10 text-white font-title text-2xl lg:text-4xl text-center shadow-2xl">What people say about me and my products?</h1>
        </div>
        <section id="section-5" className="bg-gradient-to-b from-color1 to-white w-full">
          <AboutReviews/>
        </section>
        <section id="section-6" className="w-full bg-gradient-to-b from-white via-color3 to-white">
          <AboutFAQ/>
        </section>
        <div className="w-full bg-neutral shadow-2xl flex justify-center p-4 lg:p-8">
          <div className="w-fit border-l border-r border-white p-6">
            <h1 className="text-white font-title text-4xl lg:text-6xl text-center">Enroll &amp; Start Your Journey as a Virtual Assistant</h1>
          </div>
        </div>
      </main>
      <footer className="bg-neutral">
        <Footer/>
      </footer>
    </div>
    )
}

export default AboutPage;