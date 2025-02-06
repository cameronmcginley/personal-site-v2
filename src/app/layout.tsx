import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Background } from "@/components/background";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cameron McGinley",
  description: "Hi! I'm Cameron McGinley, a software engineer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="flex min-h-screen flex-col items-center sm:pt-6 sm:p-16">
            <Background />
            <div className="z-10 max-w-5xl w-full items-center justify-between">
              {children}
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
