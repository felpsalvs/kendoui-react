"use client";
import { MoviesProvider } from "@/contexts/MoviesContext";
import { KendoGrid } from "./components/KendoGrid";

export default function Home() {
  return (
    <MoviesProvider>
      <main className="home-container">
        <KendoGrid />
      </main>
    </MoviesProvider>
  );
}
