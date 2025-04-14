import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavigationBar from "@/components/NavigationBar";
import 'bootstrap/dist/css/bootstrap.min.css';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Social platform for mountain bikers",
  description: "Created by grubcio",
};

export default function RootLayout({ children }) {
  return (
      <html lang="en">
      <body className="d-flex flex-column min-vh-100">

      <NavigationBar/>
      <main className="flex-grow-1">
          {children}
      </main>
      <footer className="bg-light text-center text-muted py-3">
          © {new Date().getFullYear()} MyApp. All rights reserved.
      </footer>
      </body>
      </html>
  );
}
