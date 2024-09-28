import Image from "next/image";
import { Button } from "@/components/ui/button";
import * as motion from "framer-motion/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SectionTitle from "@/components/section-title";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

export default function Home() {
  return (
    <div>
      <section className="bg-gradient-to-t from-purple-500/20 pt-20">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between space-y-10 lg:space-y-0 lg:space-x-20">
          <div className="max-w-lg lg:text-left text-center">
            <h1>
              <TextGenerateEffect
                words={"Motivating Young People To Be Better Citizens"}
                className="text-5xl font-bold text-foreground"
              />
            </h1>
            <motion.h2
              className="mt-5 text-lg text-muted-foreground"
              initial={{ opacity: 0, x: -50 }}
              transition={{ type: "just", duration: 1.4 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              Learn about the SDUSD JROTC Brigade, a community of 14 schools
              dedicated to developing leadership, citizenship, and personal
              growth among young people.
            </motion.h2>
            <motion.div
              viewport={{ once: true }}
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 2 }}
            >
              <Button
                variant={"default"}
                className="mt-5 hover:scale-125 transition-transform duration-300"
              >
                Learn More
              </Button>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <Image
              src={"/home-hero.svg"}
              alt={
                "Illustration of students participating in a leadership program"
              }
              width={600}
              height={400}
              className="rounded-3xl shadow-xl h-auto w-[35rem]"
              priority
            />
          </motion.div>
        </div>
      </section>
      <section className="bg-gradient-to-b from-purple-500/20 pt-20 pb-20">
        <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-x-4 gap-x-0 lg:gap-y-0 gap-y-4 container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle>About JROTC</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  JROTC is a high school program that builds leadership,
                  perseverance, and character. It prepares students for college
                  and careers.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Joint Brigade JROTC</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Joint Brigade unites all 14 units, focusing on
                  self-improvement, camaraderie, and leadership development.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
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
          </motion.div>
        </div>
      </section>
      <section className="pt-14 pb-32">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <SectionTitle title={"Brigade Introduction"} />
        </motion.div>
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center lg:mt-12 mt-24 lg:space-x-20 space-y-10 lg:space-y-0">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <Image
              src={"/brigade-intro.png"}
              alt={"Brigade introduction"}
              width={600}
              height={400}
              className="rounded-3xl shadow-xl h-auto w-[35rem] "
              priority
            />
          </motion.div>
          <div>
            <motion.h1
              className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-foreground text-center lg:text-left"
              initial={{ opacity: 0, y: -50 }}
              transition={{ type: "just", duration: 1.4 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              Empowering Tomorrow&apos;s Leaders Today
            </motion.h1>
            <motion.p
              className="mt-5 text-lg text-muted-foreground max-w-3xl text-center lg:text-left"
              initial={{ opacity: 0, x: 50 }}
              transition={{ type: "just", duration: 1.4 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              The San Diego Unified School District (SDUSD) hosts JROTC programs
              across 14 schools, fostering leadership and growth in students.
              Our units consistently achieve top national rankings, participate
              in unique STEM initiatives like cybersecurity and robotics, and
              are proudly led by students.
            </motion.p>
            <motion.p
              className="mt-5 text-lg text-muted-foreground text-center lg:text-left"
              initial={{ opacity: 0, x: -50 }}
              transition={{ type: "just", duration: 1.4, delay: 0.4 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
            ></motion.p>
            <motion.div
              className="text-center lg:text-left"
              viewport={{ once: true }}
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 2 }}
            >
              <Button
                variant={"default"}
                className="mt-2 hover:scale-125 transition-transform duration-300"
              >
                Discover More
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
