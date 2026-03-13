export const dynamic = 'force-dynamic';

import OrderPickupForm from "@/components/OrderPickupForm";
import ScrollReveal from "@/components/ScrollReveal";

export default function OrderPage() {
  return (
    <main className="bg-background text-foreground">
      <section className="relative min-h-[80vh] flex items-center justify-center animate-fade-in-up bg-cover bg-center" style={{ backgroundImage: "url('https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577696/site-images/hero-backgrounds/12966920.jpg')" }}>
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center px-4 text-primary-foreground">
          <h1 className="text-5xl md:text-7xl font-bold font-[var(--font-heading)]">Order for Pickup</h1>
          <p className="mt-4 text-base md:text-lg">Pre-order loaves and a few favorites—ready when you are.</p>
        </div>
      </section>

      <section id="order-form" className="py-20 md:py-28 bg-background animate-fade-in-up">
        <div className="max-w-3xl mx-auto px-4">
          <ScrollReveal>
            <OrderPickupForm />
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
