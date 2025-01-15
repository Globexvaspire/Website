import { Geist, Geist_Mono, Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfairDisplay",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});


export const metadata = {
  title: "GlobeXVAspire",
  description: "GlobeXVAspire Site",
  icons: {
    icon: "/images/globexvaspire-logo.png"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body
        className={`${playfairDisplay.variable} ${montserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
