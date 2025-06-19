import { TunisianHero } from '@/components/TunisianHero'
import { TunisianExperiences } from '@/components/TunisianExperiences'
import { TunisianGuides } from '@/components/TunisianGuides'
import { TunisianTestimonials } from '@/components/TunisianTestimonials'
import { TravelCategories } from '@/components/TravelCategories'
import { HowItWorks } from '@/components/HowItWorks'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <TunisianHero />
      <TunisianExperiences />
      <TunisianGuides />
      <TravelCategories />
      <HowItWorks />
      <TunisianTestimonials />
    </main>
  )
}
