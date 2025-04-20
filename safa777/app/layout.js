import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Safa777 Game Download best online app |safa777 - Real Earning App",
  description:
    "Safa777 is a trending new casino app in Pakistan, offering exciting slot games and real cash rewards. Play,bet and earn effortlessly on your Android device.",
  keywords:
    "Safa777 game download,Safa777 app download Pakistan,casino earning app Pakistan,Safa777 game,Safa777 casino app,Safa777 new earning app,real cash casino app,Safa777 real money game",
  author: "zeeshan",
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title: "Create Next App",
    description: "Next.js app for building scalable applications",
    url: "https://safa777game.pro",
    image: "/path/to/og-image.jpg",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@yourtwitterhandle",
    title: "Create Next App",
    description: "Next.js app for building scalable applications",
    image: "/path/to/twitter-image.jpg",
  },
  alternates: {
    canonical: "https://www.safa777game.pro",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="robots" content="index, follow" />
        <meta
          name="google-site-verification"
          content="x3saE4s9ZXsm3f3Fcfzi2hPA8KIuS4PxfHmlpSjlJmc"
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-b from-[#e8ebeb] to-[#99f8a4] `}
        cz-shortcut-listen="true"
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
