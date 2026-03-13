export const dynamic = 'force-dynamic';

import AceternityHeroAurora from "@/components/AceternityHeroAurora";
import SectionHeader from "@/components/SectionHeader";
import MenuTabs from "@/components/MenuTabs";
import ReservationCTABand from "@/components/ReservationCTABand";
import ChefStory from "@/components/ChefStory";
import PhotoGalleryMasonry from "@/components/PhotoGalleryMasonry";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import LocationMapCard from "@/components/LocationMapCard";
import ScrollReveal from "@/components/ScrollReveal";

export default function HomePage() {
  return (
    <main className="bg-background text-foreground">
      <div className="animate-fade-in-up">
        <AceternityHeroAurora
          badge="Open daily • 7:00am–3:00pm"
          headline="Sunrise Sourdough, Baked Fresh Every Morning"
          subheadline="Slow-fermented loaves, laminated pastries, and seasonal spreads—crafted with organic flour and a 12-year starter we feed daily."
          primaryCta={{ label: "Reserve a Table", href: "/reservations" }}
          secondaryCta={{ label: "View Today’s Menu", href: "/menu" }}
          backgroundImageUrl="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577087/site-images/restaurant/11236793.jpg"
          overlayClassName="bg-black/40"
          minHeightClassName="min-h-[80vh]"
        />
      </div>

      <section className="py-20 md:py-28 bg-background animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal>
            <SectionHeader
              headline="Today’s Bakery Menu"
              subheadline="A curated selection that changes with the seasons—always anchored by our signature sourdough."
            />
            <MenuTabs
              tabs={[
                {
                  label: "Sourdough Loaves",
                  items: [
                    { name: "Sunrise Country Sourdough", description: "Organic wheat + rye, 24-hour fermentation, blistered crust.", price: "$9" },
                    { name: "Olive & Thyme Sourdough", description: "Castelvetrano olives, thyme, and a touch of lemon zest.", price: "$11" },
                    { name: "Seeded Harvest Loaf", description: "Flax, sesame, sunflower, and pumpkin seeds; hearty crumb.", price: "$11" },
                    { name: "Whole Wheat Sourdough", description: "Stone-milled whole wheat, honey-kissed finish.", price: "$10" },
                  ],
                },
                {
                  label: "Pastries",
                  items: [
                    { name: "Butter Croissant", description: "72-hour lamination, crisp layers, cultured butter.", price: "$5" },
                    { name: "Almond Croissant", description: "House almond cream, toasted almonds, powdered sugar.", price: "$6.50" },
                    { name: "Cinnamon Morning Bun", description: "Brown sugar, cinnamon, orange zest glaze.", price: "$6" },
                    { name: "Seasonal Fruit Galette Slice", description: "Rotating fruit (apple, pear, berry), flaky crust.", price: "$6.50" },
                  ],
                },
              ]}
              primaryCta={{ label: "See Full Menu", href: "/menu" }}
              secondaryCta={{ label: "Order for Pickup", href: "/order" }}
            />
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-muted animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal>
            <ReservationCTABand
              headline="Save a Seat for the Morning Rush"
              subheadline="Reserve a table for brunch, or pre-order loaves for weekend pickup. Walk-ins always welcome when space allows."
              primaryCta={{ label: "Book a Reservation", href: "/reservations" }}
              secondaryCta={{ label: "Pre-Order Loaves", href: "/order" }}
              reservationDetails={[
                "Reservations available daily 8:00am–1:30pm (90-minute seating).",
                "Weekend loaves often sell out by 11:00am—pre-order recommended.",
                "Large parties (7+) please call: (415) 555-0198.",
              ]}
            />
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-background animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal>
            <ChefStory
              headline="Meet the Baker Behind the Starter"
              subheadline="Chef-owner Elena Marquez built Sunrise Bakery around one idea: great bread takes time—and it’s worth it."
              primaryCta={{ label: "Our Story", href: "/about" }}
              secondaryCta={{ label: "Catering & Events", href: "/catering" }}
              chef={{
                name: "Elena Marquez",
                title: "Chef-Owner & Head Baker",
                bio: "Elena trained in artisan bread and viennoiserie in Northern California, then spent a decade running production for neighborhood bakeries. She started “Sol,” Sunrise’s sourdough culture, in 2014 and still feeds it twice a day.",
                signature: "Signature: Olive & Thyme Sourdough + seasonal citrus marmalade",
                imageUrl:
                  "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577102/site-images/restaurant/12387873.jpg",
              }}
              values={[
                { title: "Time & technique", description: "Cold proofing, hand shaping, and steam-baked crusts for depth of flavor." },
                { title: "Ingredient integrity", description: "Organic flour, cultured butter, and seasonal produce whenever possible." },
                { title: "Neighborhood-first", description: "We donate day-old bread weekly to local community fridges." },
              ]}
            />
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-muted animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal>
            <PhotoGalleryMasonry
              headline="A Peek Inside the Oven"
              subheadline="From the first fold to the final crackle—here’s what’s baking this week."
              images={[
                { url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577700/site-images/hero-backgrounds/11829357.jpg", alt: "Close-up crumb shot", caption: "24-hour fermentation for a light, open crumb." },
                { url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771576893/site-images/corporate/10041276.jpg", alt: "Tray of croissants", caption: "Small-batch croissants—baked in limited runs." },
                { url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577101/site-images/restaurant/11669573.jpg", alt: "Loaves baking in oven", caption: "Steam-baked for a thin, crackling crust." },
                { url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577357/site-images/team-people/1181738.jpg", alt: "Toast plating", caption: "Breakfast built on bread that can carry the toppings." },
                { url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577327/site-images/team-people/12899112.jpg", alt: "Bakery front counter", caption: "Warm, welcoming, and always smelling like butter." },
                { url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577047/site-images/restaurant/10456027.jpg", alt: "Seasonal galette", caption: "Seasonal galettes—rotating fruit all year." },
              ]}
              primaryCta={{ label: "Follow on Instagram", href: "https://instagram.com/" }}
              secondaryCta={{ label: "See Menu", href: "/menu" }}
            />
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-background animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal>
            <TestimonialsCarousel
              headline="Loved by Early Risers"
              subheadline="Real notes from neighbors who make Sunrise part of their routine."
              testimonials={[
                {
                  quote: "The country sourdough is unreal—thin crust, tangy, and perfect for sandwiches. I pre-order every Friday so I don’t miss out.",
                  name: "Maya L.",
                  designation: "Weekend regular",
                  src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771576895/site-images/corporate/10041266.jpg",
                },
                {
                  quote: "Best croissant layers in the neighborhood. Not overly sweet, just buttery and crisp. The latte is consistently excellent too.",
                  name: "Jordan K.",
                  designation: "Coffee + pastry fan",
                  src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577325/site-images/team-people/10347164.jpg",
                },
                {
                  quote: "We booked a table for a birthday brunch and everything felt thoughtful—from the toast to the soup. Warm service and beautiful space.",
                  name: "Priya S.",
                  designation: "Brunch meetup host",
                  src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577061/site-images/restaurant/12603336.jpg",
                },
              ]}
            />
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-muted animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal>
            <LocationMapCard
              headline="Find Sunrise Bakery"
              subheadline="Stop by for a loaf, stay for a slow morning."
              address={{ line1: "214 Clement Street", line2: "San Francisco, CA 94118" }}
              hours={[
                { days: "Mon–Fri", hours: "7:00am–3:00pm" },
                { days: "Sat–Sun", hours: "7:00am–4:00pm" },
              ]}
              contact={{ phone: "(415) 555-0198", email: "hello@sunrisebakery.com" }}
              parking="Street parking available. Bike rack out front. Closest bus lines: 1, 2, 38R."
              primaryCta={{ label: "Get Directions", href: "https://maps.google.com/?q=Sunrise%20Bakery" }}
              secondaryCta={{ label: "Contact Us", href: "/contact" }}
              mapEmbed={{ provider: "google", query: "214 Clement Street San Francisco CA 94118" }}
            />
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
