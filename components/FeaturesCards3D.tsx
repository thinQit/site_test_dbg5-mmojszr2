"use client";
import React from "react";
import { CardContainer, CardBody, CardItem } from "@/components/ui/effects/3d-card-effect";
import { Sparkles, Salad, Wine, Beef, Fish, CakeSlice, UtensilsCrossed, Flame, Package } from 'lucide-react';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface FeaturesCards3DProps {
  badge?: string;
  headline: string;
  subheadline?: string;
  features: Feature[];
}

const iconMap: Record<string, React.ElementType> = { Flame, Package, 
  Sparkles,
  Salad,
  Wine,
  Beef,
  Fish,
  CakeSlice,
  UtensilsCrossed,
};

export default function FeaturesCards3D({
  badge = "Menu Highlights",
  headline = "Signature Plates Crafted with Seasonal Ingredients",
  subheadline = "From wood-fired specialties to delicate desserts, every course is designed to delight.",
  features = [
    {
      icon: "Beef",
      title: "Burgundy Braised Short Rib",
      description: "Slow-cooked short rib with olive herb polenta and roasted root vegetables.",
    },
    {
      icon: "Fish",
      title: "Citrus Seared Sea Bass",
      description: "Pan-seared sea bass with saffron risotto, charred lemon, and garden herbs.",
    },
    {
      icon: "CakeSlice",
      title: "Honey Almond Torte",
      description: "Warm almond torte topped with vanilla cream and caramelized orchard fruit.",
    },
  ],
}: Partial<FeaturesCards3DProps>) {
  return (
    <section className="py-20 md:py-28 bg-muted/50">
      <div className="animate-fade-in-up container mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          {badge && (
            <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">{badge}</span>
          )}
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">{headline}</h2>
          {subheadline && <p className="mt-4 text-lg text-muted-foreground">{subheadline}</p>}
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map(function (feature, index) {
            const Icon = iconMap[feature.icon] || UtensilsCrossed;
            return (
              <CardContainer key={index} className="inter-var">
                <CardBody className="card-hover relative group/card border-border w-auto h-auto rounded-xl p-6 border bg-card">
                  <CardItem translateZ="50" className="mb-4 text-primary">
                    {React.createElement(Icon, { className: "h-8 w-8" })}
                  </CardItem>
                  <CardItem translateZ="60" className="text-xl font-bold text-foreground">
                    {feature.title}
                  </CardItem>
                  <CardItem as="p" translateZ="40" className="text-muted-foreground mt-2 text-sm">
                    {feature.description}
                  </CardItem>
                </CardBody>
              </CardContainer>
            );
          })}
        </div>
      </div>
    </section>
  );
}
