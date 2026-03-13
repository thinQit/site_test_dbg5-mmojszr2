export const dynamic = 'force-dynamic';

import LocationMapCard from "@/components/LocationMapCard";
import ReservationCTABand from "@/components/ReservationCTABand";
import ScrollReveal from "@/components/ScrollReveal";

export default function LocationPage() {
  return (
    <main className="bg-background text-foreground">
      <section className="relative min-h-[80vh] flex items-center justify-center animate-fade-in-up bg-cover bg-center" style={{ backgroundImage: "url('https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577698/site-images/hero-backgrounds/13216333.jpg')" }}>
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center px-4 text-primary-foreground">
          <h1 className="text-5xl md:text-7xl font-bold font-[var(--font-heading)]">Location & Hours</h1>
          <p className="mt-4 text-base md:text-lg">Your neighborhood sourdough stop in the Richmond District.</p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-background animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal>
            <LocationMapCard
              headline="Visit Us"
              subheadline="Easy to reach by bus, bike, or a quick walk."
              address={{ line1: "214 Clement Street", line2: "San Francisco, CA 94118" }}
              hours={[
                { days: "Mon–Fri", hours: "7:00am–3:00pm" },
                { days: "Sat–Sun", hours: "7:00am–4:00pm" },
              ]}
              contact={{ phone: "(415) 555-0198", email: "hello@sunrisebakery.com" }}
              primaryCta={{ label: "Open in Maps", href: "https://maps.google.com/?q=214%20Clement%20Street%20San%20Francisco%20CA%2094118" }}
              secondaryCta={{ label: "Reserve a Table", href: "/reservations" }}
              mapEmbed={{ provider: "google", query: "214 Clement Street San Francisco CA 94118" }}
            />
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-muted animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4">
          <ReservationCTABand
            headline="Make it a morning."
            subheadline="Reserve a table, then take a loaf home for later."
            primaryCta={{ label: "Reserve", href: "/reservations" }}
            secondaryCta={{ label: "Order Pickup", href: "/order" }}
          />
        </div>
      </section>
    </main>
  );
}
