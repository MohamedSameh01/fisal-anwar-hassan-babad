import { Cairo } from "next/font/google";
import "./globals.css";
// import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const cairo = Cairo({
  subsets: ["arabic", "latin"], // Support Arabic and Latin scripts
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-cairo",
});

export const metadata = {
  title: "نوادر القمه للتطوير العقاري",
  description:
    "شركة نوادر القمه هي شركة متخصصة في قطاع المقاولات العامة، تقدم حلولاً متكاملة للمشروعات السكنية والتجارية والصناعية، ملتزمة بأعلى معايير الجودة والاحترافية، من خلال فريق من المهندسين والفنيين ذوي الخبرة الذين يسعون لتحقيق التميز باستخدام أحدث التقنيات وضمان رضا العملاء والالتزام بالمواعيد المحددة.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        {/* Add your favicon link here if needed */}
        <link rel="icon"  href="/images/Logo.png" />
      </head>
      <body className={`${cairo.variable} font-cairo`}>
        {/* Uncomment the following line if you need the Navbar */}
        {/* <Navbar /> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
