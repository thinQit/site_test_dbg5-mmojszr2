export const dynamic = 'force-dynamic';

import SectionHeader from "@/components/SectionHeader";
import MenuTabs from "@/components/MenuTabs";
import ReservationCTABand from "@/components/ReservationCTABand";
import ScrollReveal from "@/components/ScrollReveal";

export default function MenuPage() {
  return (
    <main className="bg-background text-foreground">
      <section className="relative min-h-[80vh] flex items-center justify-center animate-fade-in-up bg-cover bg-center" style={{ backgroundImage: "url('https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577097/site-images/restaurant/11775401.jpg')" }}>
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 max-w-3xl px-4 text-center text-primary-foreground">
          <h1 className="text-5xl md:text-7xl font-bold font-[var(--font-heading)]">Menu</h1>
          <p className="mt-4 text-base md:text-lg">Baked daily. Rotating seasonally. Always sourdough-forward.</p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-background animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal>
            <SectionHeader headline="All-Day Offerings" subheadline="Loaves, pastries, breakfast, lunch, and drinks—priced transparently." />
            <MenuTabs
              tabs={[
                { label: "Bread", items: [{ name: "Sunrise Country Sourdough", description: "Organic wheat + rye, long-fermented, classic tang.", price: "$9" }] },
                { label: "Pastries", items: [{ name: "Butter Croissant", description: "Crisp, layered, cultured butter.", price: "$5" }] },
                { label: "Breakfast", items: [{ name: "Avocado Sourdough Toast", description: "Chili flakes, lemon, flaky salt.", price: "$12" }] },
                { label: "Lunch", items: [{ name: "Roasted Veggie Sourdough Melt", description: "Onion jam, provolone, roasted vegetables.", price: "$15" }] },
                { label: "Drinks", items: [{ name: "House Drip Coffee", description: "Rotating single-origin.", price: "$3.50" }] },
              ]}
              primaryCta={{ label: "Pre-Order Loaves", href: "/order" }}
              secondaryCta={{ label: "Questions? Contact Us", href: "/contact" }}
            />
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-muted animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4">
          <ReservationCTABand
            headline="Planning a weekend? Pre-order your loaf."
            subheadline="Guarantee your favorites and skip the sell-out stress."
            primaryCta={{ label: "Order Pickup", href: "/order" }}
            secondaryCta={{ label: "Reserve a Table", href: "/reservations" }}
          />
        </div>
      </section>
    </main>
  );
}
