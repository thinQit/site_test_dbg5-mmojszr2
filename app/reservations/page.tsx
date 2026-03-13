export const dynamic = 'force-dynamic';

import ReservationForm from "@/components/ReservationForm";
import ReservationCTABand from "@/components/ReservationCTABand";
import ScrollReveal from "@/components/ScrollReveal";

export default function ReservationsPage() {
  return (
    <main className="bg-background text-foreground">
      <section className="relative min-h-[80vh] flex items-center justify-center animate-fade-in-up bg-cover bg-center" style={{ backgroundImage: "url('https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577698/site-images/hero-backgrounds/13551579.jpg')" }}>
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center px-4 text-primary-foreground">
          <h1 className="text-5xl md:text-7xl font-bold font-[var(--font-heading)]">Reservations</h1>
          <p className="mt-4 text-base md:text-lg">Book a cozy table for brunch, meetings, or a slow morning with fresh bread.</p>
        </div>
      </section>

      <section id="reservation-form" className="py-20 md:py-28 bg-background animate-fade-in-up">
        <div className="max-w-3xl mx-auto px-4">
          <ScrollReveal>
            <ReservationForm />
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-muted animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4">
          <ReservationCTABand
            headline="Want to guarantee bread too?"
            subheadline="Add a pre-order loaf to your visit and pick it up on the way out."
            primaryCta={{ label: "Pre-Order Loaves", href: "/order" }}
            secondaryCta={{ label: "See Menu", href: "/menu" }}
          />
        </div>
      </section>
    </main>
  );
}
