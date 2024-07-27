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
      >
        <SearchIcon className="h-[1.2rem] w-[1.2rem]" />
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Links">
            {links.map((link) => (
              <div key={link.title}>
                <CommandItem>{link.title}</CommandItem>
                {link.subLinks && link.subLinks.map((subLink) => (
                  <CommandItem key={subLink.title} className="ml-4">
                    {subLink.title}
                  </CommandItem>
                ))}
              </div>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </div>
  );
}
