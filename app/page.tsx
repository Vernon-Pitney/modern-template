import Image from "next/image";
import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <div>
      <section className="bg-gradient-to-t from-purple-500/20 pt-20">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between space-y-10 lg:space-y-0 lg:space-x-20">
          <div className="max-w-lg lg:text-left text-center ">
            <h1 className="text-5xl font-bold text-foreground">
              Motivating Young People To Be Better Citizens
            </h1>
            <p className="mt-5 text-lg text-muted-foreground">
              Learn about the SDUSD JROTC Brigade, a community of 14 schools
              dedicated to developing leadership, citizenship, and personal
              growth among young people.
            </p>
            <Button variant={"default"} className="mt-5">
              Learn More
            </Button>
          </div>
          <div>
            <Image
              src={"/home-hero.svg"}
              alt={"Innovation Main Hero"}
              width={600}
              height={400}
              className="rounded-xl shadow-xl "
              priority
            />
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-b from-purple-500/20 pt-20 pb-20">
        <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-x-4 gap-x-0 lg:gap-y-0 gap-y-4 container">
          <Card>
            <CardHeader>
              <CardTitle>About JROTC</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                JROTC is a high school program that builds leadership,
                perseverance, and character. It prepares students for college
                and careers while offering daily classes and after-school
                activities.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Joint Brigade JROTC</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Joint Brigade unites all 14 units, focusing on self-improvement,
                camaraderie, and leadership development.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Our Activities</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We organize field trips like the Miramar Air Show and Air &
                Space Museum visits, and events such as the cadet ball and
                athletic drills.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
      <section className="bg-background pt-20 pb-20 border-b border-t">
        <div className="container ">
          <iframe
            src="https://www.google.com/maps/d/embed?mid=1uw7N6i7fmpsdyIWkNTKVGx7rp36K-2k&ehbc=2E312F"
            width="640"
            height="480"
            className="w-full rounded-xl"
          ></iframe>
        </div>
      </section>
    </div>
  );
}
