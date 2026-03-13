"use client";
import { AuroraBackground } from "@/components/ui/backgrounds/aurora-background";
import { TextGenerateEffect } from "@/components/ui/text/text-generate-effect";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface HeroAuroraProps {
  badge?: string;
  headline: string;
  subheadline: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

export default function HeroAurora({
  badge = "Fine Dining • Seasonal Menu",
  headline = "Savor Elevated Cuisine in a Warm, Intimate Setting",
  subheadline = "Discover handcrafted dishes, curated wines, and unforgettable evenings at Ember & Vine.",
  primaryCta = { label: "Reserve a Table", href: "#reservation" },
  secondaryCta = { label: "View Menu", href: "#menu" },
}: Partial<HeroAuroraProps>) {
  return (
    <AuroraBackground auroraColors={["#f59e0b", "#ef4444", "#f97316", "#fbbf24", "#fca5a5"]}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
        className="animate-fade-in-up relative flex flex-col gap-4 items-center justify-center px-4 py-24 md:py-36"
      >
        {badge && (
          <span className="mb-2 inline-block rounded-full border border-border bg-background/50 backdrop-blur-sm px-4 py-1.5 text-sm font-medium text-foreground">
            {badge}
          </span>
        )}
        <TextGenerateEffect
          words={headline}
          className="text-4xl font-bold text-center tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl max-w-4xl"
        />
        <p className="mt-4 max-w-2xl text-center text-lg text-muted-foreground md:text-xl">{subheadline}</p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
          <Button size="lg" className="px-8 py-6 text-lg transition-all duration-200 hover:scale-105" asChild>
            <a href={primaryCta.href}>{primaryCta.label}</a>
          </Button>
          {secondaryCta && (
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-6 text-lg transition-all duration-200 hover:scale-105"
              asChild
            >
              <a href={secondaryCta.href}>{secondaryCta.label}</a>
            </Button>
          )}
        </div>
      </motion.div>
    </AuroraBackground>
  );
}
