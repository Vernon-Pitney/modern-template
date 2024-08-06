import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SDUSD JROTC | Brigade Awards",
  description: "Here you can see all the schools that won awards from the brigade, as well as the individuals who excelled.",
};

export default function BrigadeAwardsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}
