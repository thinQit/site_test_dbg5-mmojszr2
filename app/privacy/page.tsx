export const dynamic = 'force-dynamic';

import SectionHeader from "@/components/SectionHeader";
import ScrollReveal from "@/components/ScrollReveal";
import { Card } from "@/components/ui/card";

export default function PrivacyPage() {
  return (
    <main className="bg-background text-foreground">
      <section className="relative min-h-[80vh] flex items-center justify-center animate-fade-in-up bg-cover bg-center" style={{ backgroundImage: "url('https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577705/site-images/hero-backgrounds/12981881.jpg')" }}>
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center px-4 text-primary-foreground">
          <h1 className="text-5xl md:text-7xl font-bold font-[var(--font-heading)]">Privacy Policy</h1>
          <p className="mt-4 text-base md:text-lg">A simple policy: we only use your information to respond to requests and confirm reservations or pickup orders.</p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-muted animate-fade-in-up">
        <div className="max-w-4xl mx-auto px-4">
          <ScrollReveal>
            <SectionHeader headline="What We Collect" subheadline="We keep it minimal and practical." />
            <Card className="p-8 bg-card border-border card-hover">
              <div className="space-y-6 text-muted-foreground">
                <div>
                  <h3 className="text-xl font-semibold text-foreground">Information you provide</h3>
                  <p>When you submit forms, we collect details you enter such as name, email, phone, and message.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">How we use it</h3>
                  <p>We use your information to confirm reservations, respond to messages, coordinate catering, and send the Bake List email if subscribed.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">Data retention</h3>
                  <p>We retain messages and requests only as long as needed for customer service and basic recordkeeping.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">Contact</h3>
                  <p>If you have questions, email hello@sunrisebakery.com.</p>
                </div>
                <p className="text-sm">Last updated: 2026-01-15</p>
              </div>
            </Card>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
