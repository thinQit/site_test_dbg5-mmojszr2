export const dynamic = 'force-dynamic';

import ContactForm from "@/components/ContactForm";
import NewsletterForm from "@/components/NewsletterForm";
import ScrollReveal from "@/components/ScrollReveal";

export default function ContactPage() {
  return (
    <main className="bg-background text-foreground">
      <section className="relative min-h-[80vh] flex items-center justify-center animate-fade-in-up bg-cover bg-center" style={{ backgroundImage: "url('https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577358/site-images/team-people/1181401.jpg')" }}>
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center px-4 text-primary-foreground">
          <h1 className="text-5xl md:text-7xl font-bold font-[var(--font-heading)]">Contact</h1>
          <p className="mt-4 text-base md:text-lg">Questions about allergens, catering, or pre-orders? We’re happy to help.</p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-background animate-fade-in-up">
        <div className="max-w-3xl mx-auto px-4">
          <ScrollReveal>
            <ContactForm />
          </ScrollReveal>
        </div>
      </section>

      <section id="newsletter" className="py-20 md:py-28 bg-muted animate-fade-in-up">
        <div className="max-w-2xl mx-auto px-4">
          <ScrollReveal>
            <NewsletterForm />
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
