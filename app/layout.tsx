import "./globals.css";
import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "700"],
});

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "Sunrise Bakery | Artisan Sourdough & Pastries in San Francisco",
  description:
    "Sunrise Bakery is an artisan bakery specializing in naturally leavened sourdough, croissants, and seasonal brunch. Visit us on Clement Street or pre-order loaves for weekend pickup.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${lato.variable} font-sans bg-background text-foreground`}>
        <Navbar
          logo="Sunrise Bakery"
          navItems={[
            { label: "Home", href: "/" },
            { label: "Menu", href: "/menu" },
            { label: "Reservations", href: "/reservations" },
            { label: "About", href: "/about" },
            { label: "Location", href: "/location" },
            { label: "Catering", href: "/catering" },
            { label: "Contact", href: "/contact" },
          ]}
          ctaLabel="Reserve a Table"
          ctaHref="/reservations"
        />
        {children}
        <Footer
          brand="Sunrise Bakery"
          description="Sourdough, slow-fermented and baked at dawn. Join our weekly bake list for menu drops and weekend pre-orders."
          columns={[
            {
              title: "Visit",
              links: [
                { label: "214 Clement Street", href: "/location" },
                { label: "San Francisco, CA 94118", href: "/location" },
                { label: "Mon–Fri 7:00am–3:00pm", href: "/location" },
                { label: "Sat–Sun 7:00am–4:00pm", href: "/location" },
              ],
            },
            {
              title: "Explore",
              links: [
                { label: "Menu", href: "/menu" },
                { label: "Order Pickup", href: "/order" },
                { label: "Reservations", href: "/reservations" },
                { label: "Catering", href: "/catering" },
              ],
            },
            {
              title: "Connect",
              links: [
                { label: "hello@sunrisebakery.com", href: "mailto:hello@sunrisebakery.com" },
                { label: "(415) 555-0198", href: "tel:+14155550198" },
                { label: "Instagram", href: "https://instagram.com/" },
                { label: "Privacy", href: "/privacy" },
              ],
            },
          ]}
          copyright="© 2026 Sunrise Bakery. All rights reserved."
        />
      </body>
    </html>
  );
}
