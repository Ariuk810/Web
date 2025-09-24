"use client";
import { Header } from "./_features/Header";
import Image from "next/image";
import { HeroSection } from "./_features/HeroSection";
import { MovieList } from "./_features/MovieList";
import { Footer } from "./_features/Footer";
export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <MovieList order={"Untitled"} />
      <MovieList order={"Popular"} />
      <MovieList order={"Top Rated"} />
      <Footer />
    </>
  );
}
