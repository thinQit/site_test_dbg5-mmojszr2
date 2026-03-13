export interface NavItem {
  label: string;
  href: string;
}

export interface CTA {
  label: string;
  href: string;
}

export interface BaseSection {
  id: string;
  type: string;
  headline: string;
  subheadline?: string;
  primaryCta?: CTA;
  secondaryCta?: CTA;
}

export interface MenuItem {
  name: string;
  description: string;
  price: string;
}

export interface MenuTab {
  label: string;
  items: MenuItem[];
}

export interface Testimonial {
  name: string;
  title?: string;
  quote: string;
}
