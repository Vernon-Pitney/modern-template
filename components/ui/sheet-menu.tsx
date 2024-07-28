import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";

export default function SheetMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size={"icon"}>
            <MenuIcon className="h-[1.2rem] w-[1.2rem]"/>
        </Button>
      </SheetTrigger>
      <SheetContent side={"left"}>
        <SheetHeader>
          <SheetTitle>Love you Thuy 💌</SheetTitle>
          <SheetDescription>
            I love you so so much that I made this for practice lol 😻🥰
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
