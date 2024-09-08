import {Inter} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const inter = Inter({subsets: ["latin"]});

export const metadata = {
  title: "Next App",
  description: "Next.js starter app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-blue-200`}>
        <div className="container mx-auto px-4 min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow flex items-center">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
