import "./globals.css";
import { JetBrains_Mono } from "next/font/google";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata = {
  title: "Sajib Barua",
  description:
    "A professional portfolio showcasing my expertise in digital marketing and SEO strategies to grow businesses online.",
  openGraph: {
    title: "Sajib Barua – Digital Marketer & SEO Expert",
    description:
      "Explore my portfolio, case studies, and strategies for growing businesses with digital marketing and SEO.",
    url: "https://your-domain.com", // Replace with your actual domain
    siteName: "Sajib Barua Portfolio",
    images: [
      {
        url: "/pic.png", // Upload this image to /public
        width: 1200,
        height: 630,
        alt: "Sajib Barua Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sajib Barua – Digital Marketer & SEO Expert",
    description:
      "Check out my portfolio showcasing digital marketing campaigns, SEO expertise, and business growth strategies.",
    images: ["/pic.png"], // Same image
  },
  icons:{
    icon: "/logo.ico",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
        <Header />
        <StairTransition/>
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
