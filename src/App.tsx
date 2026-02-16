import { Navbar } from '@/components/Navbar';
import { Hero } from '@/sections/Hero';
import { StatsBento } from '@/sections/StatsBento';
import { ProblemSolution } from '@/sections/ProblemSolution';
import { About } from '@/sections/About';
import { TokenStats } from '@/sections/TokenStats';
import { HowItWorksBento } from '@/sections/HowItWorksBento';
import { RoadmapBento } from '@/sections/RoadmapBento';
import { FinalCTA } from '@/sections/FinalCTA';
import { Footer } from '@/sections/Footer';
// import { AboutUSDN } from './sections/AboutUSDN';

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <StatsBento />
        <ProblemSolution />
        {/* <AboutUSDN /> */}
        <About />
        <TokenStats />
        <HowItWorksBento />
        <RoadmapBento />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
