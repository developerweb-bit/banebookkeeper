import Image from "next/image";
import Header from "./components/Header/Header";
import Hero from "./components/HomePage/Hero/Hero";
import HomeService from "./components/HomePage/HomeService/HomeService";
import Faq from "./components/Faq/Faq";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <HomeService />
    </div>
  );
}
