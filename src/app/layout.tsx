import type { Metadata } from "next";
import HeroContainer from "@/components/HeroContainer";
import Navbar from "@/components/Navbar";
import ThemeProviderWrapper from "@/components/ThemeProvider";
import { PageTransitionProvider } from "@/components/PageTransitionProvider";
import BackgroundLayer from "@/components/BackgroundLayer";
import { siteConfig } from "@/lib/config.server";

// 使用配置的 url 作为 metadataBase，如果没有配置则使用相对路径
const baseUrl = siteConfig.seo?.url || '';

export const metadata: Metadata = {
  metadataBase: baseUrl ? new URL(baseUrl) : undefined,
  title: siteConfig.title || "MoGuSpace",
  description: siteConfig.seo?.defaultDescription || siteConfig.description || "A minimal geometric portfolio",
  icons: {
    icon: siteConfig.favicon || "/favicon.png",
  },
  openGraph: {
    title: siteConfig.title || "MoGuSpace",
    description: siteConfig.seo?.defaultDescription || siteConfig.description || "A minimal geometric portfolio",
    url: baseUrl || undefined,
    siteName: siteConfig.seo?.siteName || siteConfig.title,
    ...(siteConfig.seo?.ogImage && {
      images: [
        {
          url: siteConfig.seo.ogImage,
          width: 1200,
          height: 630,
          alt: siteConfig.title || "MoGuSpace",
        },
      ],
    }),
    locale: siteConfig.seo?.locale || "zh-CN",
    type: (siteConfig.seo?.type as any) || "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title || "MoGuSpace",
    description: siteConfig.seo?.defaultDescription || siteConfig.description || "A minimal geometric portfolio",
    ...(siteConfig.seo?.ogImage && {
      images: [siteConfig.seo.ogImage],
    }),
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