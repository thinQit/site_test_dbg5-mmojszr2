export const dynamic = 'force-dynamic';

import FeaturesCards3D from "@/components/FeaturesCards3D";
import ReservationCTABand from "@/components/ReservationCTABand";
import ScrollReveal from "@/components/ScrollReveal";

export default function CateringPage() {
  return (
    <main className="bg-background text-foreground">
      <section className="relative min-h-[80vh] flex items-center justify-center animate-fade-in-up bg-cover bg-center" style={{ backgroundImage: "url('https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577075/site-images/restaurant/11526866.jpg')" }}>
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center px-4 text-primary-foreground">
          <h1 className="text-5xl md:text-7xl font-bold font-[var(--font-heading)]">Catering</h1>
          <p className="mt-4 text-base md:text-lg">Office breakfasts, weekend gatherings, and events—built around fresh sourdough and pastries.</p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-background animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal>
            <FeaturesCards3D
              title="Popular Catering Packages"
              subtitle="Simple, crowd-pleasing options with clear pricing."
              features={[
                { icon: "Package", title: "Morning Pastry Box • $48", description: "8 assorted pastries, optional jam sampler, warm on request." },
                { icon: "Sandwich", title: "Sourdough Sandwich Lunch • $18/person", description: "Minimum 8 people, includes side salad or soup." },
                { icon: "Utensils", title: "Event Bread + Spreads • $95", description: "3 loaves, 2 seasonal spreads, cultured butter." },
              ]}
            />
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-muted animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4">
          <ReservationCTABand
            headline="Tell us your headcount—we’ll handle the rest."
            subheadline="We’ll recommend quantities and confirm timing quickly."
            primaryCta={{ label: "Contact for Catering", href: "/contact" }}
            secondaryCta={{ label: "Location & Hours", href: "/location" }}
          />
        </div>
      </section>
    </main>
  );
}
