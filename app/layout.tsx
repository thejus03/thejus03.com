import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Roboto_Mono, Space_Grotesk } from "next/font/google";

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Thejus Unnikrishnan",
  description: "Personal portfolio of Thejus Unnikrishnan - software engineer and CS student at NUS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `if (window.matchMedia("(max-width: 639px)").matches) { document.documentElement.dataset.theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"; } else { try { document.documentElement.dataset.theme = localStorage.getItem("theme") === "light" ? "light" : "dark"; } catch {} }`,
          }}
        />
      </head>
      <body
        className={`${robotoMono.className} ${spaceGrotesk.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
