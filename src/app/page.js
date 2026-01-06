import Image from "next/image";
import Header from "./components/Header/Header";
import Hero from "./components/HomePage/Hero/Hero";
import HomeService from "./components/HomePage/HomeService/HomeService";

export default function Home() {
  return (
    <div>
      <Hero />
      <HomeService />
    </div>
  );
}
