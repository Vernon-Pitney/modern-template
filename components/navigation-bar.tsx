import * as React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import CommandMenu from "@/components/ui/command-menu";
import { NavLink, Logo } from "@/types";
import SheetMenu from "@/components/ui/sheet-menu";

interface NavigationBarProps {
  logo: Logo;
  links: NavLink[];
}

export default function NavigationBar({ logo, links }: NavigationBarProps) {
  return (
    <div>
      <div className="lg:h-32 h-16 border-b flex items-center justify-between px-8 z-40 w-full bg-background">
        <div className="lg:hidden flex">
          <SheetMenu />
        </div>
        <Link href={logo.href} className="flex items-center space-x-1">
          <Image
            src={logo.src}
            alt={logo.alt}
            width={200}
            height={300}
            className="lg:w-16 w-10 h-auto"
            priority
          />
          <span className="lg:text-xl text-base font-extralight">{logo.title}</span>
        </Link>
        <NavigationMenu className="lg:flex hidden">
          <NavigationMenuList>
            {links.map((link) => (
              <NavigationMenuItem key={link.title}>
                {link.subLinks ? (
                  <>
                    <NavigationMenuTrigger className="bg-transparent">
                      {link.title}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                        {link.subLinks.map((subLink) => (
                          <ListItem
                            key={subLink.title}
                            href={subLink.href}
                            title={subLink.title}
                          >
                            {subLink.description}
                          </ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </>
                ) : (
                  <Link href={link.href!} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={`${navigationMenuTriggerStyle()} bg-transparent`}
                    >
                      {link.title}
                    </NavigationMenuLink>
                  </Link>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex items-center ">
          <CommandMenu links={links} />
        </div>
      </div>
    </div>
  );
}

interface ListItemProps {
  href: string;
  title: string;
  children: string;
}

export function ListItem({ href, title, children }: ListItemProps) {
  return (
    <NavigationMenuLink asChild>
      <Link
        href={href}
        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
      >
        <div className="text-sm font-medium leading-none">{title}</div>
        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
          {children}
        </p>
      </Link>
    </NavigationMenuLink>
  );
}
