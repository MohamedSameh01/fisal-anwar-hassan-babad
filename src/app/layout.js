import { Cairo } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { Footer } from "./components/Footer";

const cairo = Cairo({
  subsets: ["arabic", "latin"], // Support Arabic and Latin scripts
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-cairo",
});

export const metadata = {
  title: " فيصل انور حسن باعباد للمقاولات",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${cairo.variable} font-cairo`}>
      <Navbar/>
      {children}
      <Footer/>
      </body>
    </html>
  );
}
