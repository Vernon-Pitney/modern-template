export interface SubLink {
  title: string;
  href: string;
  description: string;
}

export interface NavLink {
  title: string;
  href?: string;
  subLinks?: SubLink[];
}

export interface Logo {
  title?: string;
  src: string;
  href: string;
  alt: string;
}
