import type { Metadata } from "next";
import "@/app/globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";

export const metadata: Metadata = {
  title: "kanpur.dev | Kanpur's Developer Future Starts Here",
  description:
    "The premier developer collective in Kanpur. Forging high-performance engineering systems, monthly dev labs, and epic hackathons.",
  keywords: [
    "Kanpur Dev",
    "kanpur.dev",
    "Kanpur Developers",
    "IIT Kanpur Code",
    "HBTI Kanpur Tech",
    "Indian Dev Community",
    "Uttar Pradesh Engineering",
  ],
  openGraph: {
    title: "kanpur.dev | Kanpur's Developer Future Starts Here",
    description:
      "The premier developer collective in Kanpur. Forging high-performance engineering systems, monthly dev labs, and epic hackathons.",
    url: "https://kanpur.dev",
    siteName: "kanpur.dev",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "kanpur.dev | Kanpur's Developer Future Starts Here",
    description:
      "The premier developer collective in Kanpur. Forging high-performance engineering systems, monthly dev labs, and epic hackathons.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#030305] text-[#f3f4f6]">
        {/* kanpur.dev Core Layout Engine with Cinematic Scroll & Custom Cursor */}
        <SmoothScroll>
          <CustomCursor />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
