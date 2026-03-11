import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScrollWrapper from "../components/smooth-scroll-wrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Milan Patel | Portfolio",
  description: "Professional portfolio of Milan Patel - Full-Stack Developer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (() => {
                const savedTheme = localStorage.getItem("theme");
                const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
                const theme = savedTheme || (systemPrefersDark ? "dark" : "light");
                document.documentElement.dataset.theme = theme;
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SmoothScrollWrapper />
        {children}
      </body>
    </html>
  );
}
