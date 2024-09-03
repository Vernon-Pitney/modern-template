import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SDUSD JROTC | Chain of Command",
  description: "",
};

export default function BrigadeAwardsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}
