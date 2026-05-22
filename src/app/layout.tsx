import type { Metadata } from "next";
import HeroContainer from "@/components/HeroContainer";
import Navbar from "@/components/Navbar";
import { siteConfig } from "@/lib/config.server";

export const metadata: Metadata = {
  title: "MoGuSpace",
  description: "A minimal geometric portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh">
      <body>
        <Navbar config={siteConfig} />
        <HeroContainer>
          {children}
        </HeroContainer>
      </body>
    </html>
  );
}
