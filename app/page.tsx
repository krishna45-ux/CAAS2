import Hero from './components/home/Hero';
import Bottleneck from './components/home/Bottleneck';
import Booking from './components/home/Booking';
import Stories from './components/home/Stories';
import Industries from './components/home/Industries';
import Gear from './components/home/Gear';
import {
  Marquee, Statement, Shoot, Crew, FunFact, Portfolio, Pricing, Monthly, FinalCta,
} from './components/home/Sections';

export default function Home() {
  return (
    <main className="home" id="top" data-nav="dark">
      {/* pinned cinematic frame — the page climbs over it */}
      <Hero />

      <div className="home__body">
        <Marquee />
        <Statement />
        <Shoot />
        <Crew />
        <Bottleneck />
        <Booking />
        <Stories />
        <FunFact />
        <Industries />
        <Portfolio />
        <Gear />
        <Pricing />
        <Monthly />
        <FinalCta />
      </div>
    </main>
  );
}
