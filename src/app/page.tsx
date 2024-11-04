
import Navbar from "./components/Navbar";

import "../app/css/embla.css"
import {

  EmblaOptionsType
} from 'embla-carousel'
import EmblaCarousel from "./components/EmblaCarousel";
import Footer from "./components/Footer";
import Hero2 from "./components/Hero2";


export default function Home() {
  const OPTIONS: EmblaOptionsType = { direction: 'rtl', loop: true }
  const SLIDE_COUNT = 4
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
  return (
   <section>
    <Navbar />
    <Hero2 />
   <div className="bg-stone-200 dark:bg-stone-950 p-6 my-4">
   <EmblaCarousel slides={SLIDES} options={OPTIONS} />
  
   </div>
  
    <Footer />
   </section>
  );
}
