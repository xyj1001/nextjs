import { Footer } from "./_components/footer";
import { Hero } from "./_components/hero";
import { Navbar } from "./_components/navbar";
import { Projects } from "./_components/projects";
import { Skills } from "./_components/skills";
import { InfiniteMovingCardsDemo } from "./_components/card"
import { CardLeft } from "./_components/card-left"
import { FlipWordsDemo } from "./_components/Flip-Words"
import { StickyScrollRevealDemo } from "./_components/Sticky-Scroll-Reveal"
export default function Home() {
  return (
    <main className="min-h-screen bg-[#09090B]">
      <div className="dark:bg-grid-white/[0.05] bg-grid-black/[0.2] relative bg-white dark:bg-[#09090B]">
        <div className="mx-auto max-w-7xl p-5">
          <Navbar />
         
       
          <Hero />
     
        </div>
        <div className="absolute -bottom-5 left-0 h-10 w-full bg-gradient-to-t from-[#09090B] xl:bottom-0 xl:h-32"></div>
      </div>
      <div className="mx-auto mt-20 max-w-7xl p-5">
        {/* <Projects /> */}
        
        <StickyScrollRevealDemo />
        <InfiniteMovingCardsDemo />
        <CardLeft />
        <Skills />
       
        <FlipWordsDemo />
        <Footer />
  
      </div>
    </main>
  );
}
