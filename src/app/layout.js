import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import SkillSection from "@/components/SkillSection";
import SocialLinks from "@/components/SocialLinks";
import Card from "@/components/Card";
import Button from "@/components/Button";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DigiMarket",
  description: "Best Digital Marketing Agent",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
      <Navbar/>
      
      <SkillSection/>
      
      
      {children}
      <SocialLinks/>
      <Card/>
      <Footer/>
      </body>
    </html>
  );
}
