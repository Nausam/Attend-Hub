import type { Metadata } from "next";
import { Changa } from "next/font/google";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/Providers/ThemeProvider";

export const metadata: Metadata = {
  title: "Home | Attend Hub",
  description:
    "Attend Hub is a platform that helps you to manage your employees and their attendance.",
  icons: {
    icon: "/assets/images/logo.png",
  },
};

const changa = Changa({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "500"],
  variable: "--font-poppins",
});
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "500"],
  variable: "--font-poppins",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={changa.variable}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
