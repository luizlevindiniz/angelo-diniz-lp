"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function NotFound() {
  const [currentPage, setCurrentPage] = useState("");

  useEffect(() => {
    setCurrentPage(window.location.pathname);
  }, []);

  return (
    <section className="w-full h-screen flex flex-col items-center justify-center gap-8 bg-semantic-4 text-white">
      <iframe src="https://lottie.host/embed/a62f6540-f9e2-434e-8e28-2dbea4f9b897/V1N086wRZV.json"></iframe>
      <p className="text-semantic-3">
        A página <strong className="text-white-50">{currentPage}</strong> não
        existe.
      </p>
      <Link href="/" className="button-watch">
        Voltar ao início
      </Link>
    </section>
  );
}
