import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const DmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});


export const metadata: Metadata = {
  title: "Terms and Condition",
  description: "Terms and condition page for the Rooted bible quiz app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${DmSans.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
