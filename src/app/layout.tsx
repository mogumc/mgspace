import type { Metadata } from "next";
import HeroContainer from "@/components/HeroContainer";
import Navbar from "@/components/Navbar";
import ThemeProviderWrapper from "@/components/ThemeProvider";
import { PageTransitionProvider } from "@/components/PageTransitionProvider";
import BackgroundLayer from "@/components/BackgroundLayer";
import { siteConfig } from "@/lib/config.server";

export const metadata: Metadata = {
  title: siteConfig.title || "MoGuSpace",
  description: siteConfig.description || "A minimal geometric portfolio",
  icons: {
    icon: siteConfig.favicon || "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh">
      <body>
        <ThemeProviderWrapper>
          <BackgroundLayer src={siteConfig.background} />
          <Navbar config={siteConfig} />
          <HeroContainer>
            <PageTransitionProvider>
              {children}
            </PageTransitionProvider>
          </HeroContainer>
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}
