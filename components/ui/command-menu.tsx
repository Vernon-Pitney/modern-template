"use client";
import {
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "@/components/ui/command";
import { SearchIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/types";
import Link from "next/link";

interface CommandMenuProps {
  links: NavLink[];
}

export default function CommandMenu({ links }: CommandMenuProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <div>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setOpen((open) => !open)}
        aria-label="Search Button"
      >
        <SearchIcon className="h-[1.2rem] w-[1.2rem]" />
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found...</CommandEmpty>
          <CommandGroup heading="Links">
            {links.map((link) => (
              <div key={link.title}>
                <Link
                  href={`${link.href}`}
                  onClick={() => setOpen(false)}
                  passHref
                >
                  <CommandItem>{link.title}</CommandItem>
                </Link>
                {link.subLinks &&
                  link.subLinks.map((subLink) => (
                    <Link
                      key={subLink.title}
                      href={subLink.href}
                      onClick={() => setOpen(false)}
                      passHref
                    >
                      <CommandItem className="ml-4">
                        {subLink.title}
                      </CommandItem>
                    </Link>
                  ))}
              </div>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </div>
  );
}
