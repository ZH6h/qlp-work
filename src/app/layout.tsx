import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "前端开发作品集 | 现代Web技术展示",
  description: "专业前端开发作品集，展示React、Next.js、CSS3等现代Web开发技术的实际应用项目。",
  keywords: ["前端开发", "React", "Next.js", "CSS3", "JavaScript", "作品集", "Web开发"],
  authors: [{ name: "前端开发者" }],
  creator: "前端开发者",
  publisher: "个人作品集",
  openGraph: {
    title: "前端开发作品集",
    description: "专业前端开发作品集，展示现代Web开发技术",
    type: "website",
    locale: "zh_CN",
  },
  twitter: {
    card: "summary_large_image",
    title: "前端开发作品集",
    description: "专业前端开发作品集，展示现代Web开发技术",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
