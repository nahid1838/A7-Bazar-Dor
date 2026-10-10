import type { Metadata } from "next";
import { Noto_Serif_Bengali } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Marquee from "@/components/Marquee";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";

const notoSerifBangali = Noto_Serif_Bengali({
  subsets: ["latin", "bengali"]
})


export const metadata: Metadata = {
  title: "বাজার দর | BazarDor",
  description: "চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার আজকের বাজারদর এক নজরে। বাজারভিত্তিক দাম, গড়, সর্বনিম্ন-সর্বোচ্চ এবং দামের পরিবর্তন দেখুন।",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${notoSerifBangali.className} h-full antialiased`}
    >
      <body className=" min-h-full flex flex-col">

        <Header></Header>

        <Marquee></Marquee>

        <main>{children}</main>

        <Footer></Footer>

        <ToastContainer />

      </body>
    </html>
  );
}
