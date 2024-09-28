import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ArrowBigDown, MenuIcon, SquareChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { NavLink, Logo } from "@/types";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

interface SheetMenuProps {
  logo: Logo;
  links: NavLink[];
}

export default function SheetMenu({ logo, links }: SheetMenuProps) {
  console.log(" ");
  console.log("Link Table:");
  console.table(links);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size={"icon"} aria-label="Side Bar Button">
          <MenuIcon className="h-[1.2rem] w-[1.2rem]" />
        </Button>
      </SheetTrigger>
      <SheetContent side={"left"} className="overflow-y-auto">
        <SheetHeader>
          <SheetTitle>
            <div className="flex items-center gap-2 justify-center">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={200}
                height={300}
                className="lg:w-16 w-10 h-auto"
                priority
              />
              <span>{logo.title}</span>
            </div>
          </SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <div className="flex flex-col lg:space-y-8 space-y-2 mt-4">
          {links.map((link) => (
            <Collapsible key={link.title}>
              <CollapsibleTrigger asChild>
                {link.href ? (
                  <SheetClose asChild>
                    <Link
                      href={link.href}
                      passHref
                      className="block p-3 rounded-lg text-sm font-medium text-foreground hover:text-white/50 transition" // Added block and padding
                    >
                      {link.title}
                    </Link>
                  </SheetClose>
                ) : (
                  <div
                    className="flex items-center p-3 rounded-lg text-sm font-medium text-foreground hover:text-white/50 transition hover:cursor-pointer" // Added padding and rounded corners
                  >
                    <SquareChevronDown className="mr-2 h-4 w-4" />
                    {link.title}
                  </div>
                )}
              </CollapsibleTrigger>
              {link.subLinks && (
                <CollapsibleContent>
                  <div className="ml-6 mt-2 flex flex-col space-y-1">
                    {link.subLinks.map((subLink) => (
                      <Link href={subLink.href} passHref key={subLink.href}>
                        <SheetClose asChild>
                          <div className="p-3  hover:bg-gray-100 transition rounded-xl">
                            <span className="block text-sm text-purple-500">
                              {subLink.title}
                            </span>
                            {subLink.description && (
                              <p className="text-xs text-gray-500">
                                {subLink.description}
                              </p>
                            )}
                          </div>
                        </SheetClose>
                      </Link>
                    ))}
                  </div>
                </CollapsibleContent>
              )}
            </Collapsible>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
