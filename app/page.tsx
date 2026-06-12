import Hero from '@/components/home/Hero';
import CompanyOverview from '@/components/home/CompanyOverview';
import Portfolio from '@/components/home/Portfolio';
import Capabilities from '@/components/home/Capabilities';
import Vision from '@/components/home/Vision';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <CompanyOverview />
      <Portfolio />
      <Capabilities />
      <Vision />
    </main>
  );
}
