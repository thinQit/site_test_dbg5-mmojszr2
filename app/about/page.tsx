export const dynamic = 'force-dynamic';

import ChefStory from "@/components/ChefStory";
import FeaturesCards3D from "@/components/FeaturesCards3D";
import ScrollReveal from "@/components/ScrollReveal";

export default function AboutPage() {
  return (
    <main className="bg-background text-foreground">
      <section className="relative min-h-[80vh] flex items-center justify-center animate-fade-in-up bg-cover bg-center" style={{ backgroundImage: "url('https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577351/site-images/team-people/12903244.jpg')" }}>
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center px-4 text-primary-foreground">
          <h1 className="text-5xl md:text-7xl font-bold font-[var(--font-heading)]">About Sunrise Bakery</h1>
          <p className="mt-4 text-base md:text-lg">A neighborhood bakery built around sourdough—patient fermentation, honest ingredients, and mornings worth slowing down for.</p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-background animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal>
            <FeaturesCards3D
              title="How We Bake"
              subtitle="Sourdough is simple on paper—flour, water, salt, time."
              features={[
                { icon: "Wheat", title: "Feed & mix", description: "We refresh our starter twice daily with organic flour and filtered water." },
                { icon: "Clock3", title: "Bulk ferment", description: "Slow fermentation develops flavor and strength without shortcuts." },
                { icon: "Hand", title: "Shape & cold proof", description: "Hand-shaped loaves rest overnight for complexity and crust." },
                { icon: "Flame", title: "Bake with steam", description: "Steam helps create a thin crackling crust and signature ear." },
              ]}
            />
          </ScrollReveal>
        </div>
      </section>

      <section id="team" className="py-20 md:py-28 bg-muted animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4">
          <ChefStory
            headline="Our Team"
            subheadline="A small crew with flour on our sleeves and pride in every bake."
            primaryCta={{ label: "Contact Us", href: "/contact" }}
            secondaryCta={{ label: "Catering", href: "/catering" }}
            chef={{
              name: "Elena Marquez",
              title: "Chef-Owner & Head Baker",
              bio: "Sourdough devotee, croissant perfectionist, and the person who names every seasonal jam.",
              imageUrl: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771576897/site-images/corporate/10041273.jpg",
            }}
            values={[
              { title: "Noah Kim", description: "Pastry Lead — lamination nerd behind the morning bun that sells out first." },
              { title: "Sofia Patel", description: "Front of House — coffee dial-in, warm welcomes, and pairing recommendations." },
            ]}
          />
        </div>
      </section>
    </main>
  );
}
