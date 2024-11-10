"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import logo from "@/assets/images/logo_white_no_bg.png";

export default function PageLoader({
  setNextStep,
}: {
  setNextStep: () => void;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setNextStep();
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-pink">
        <div className="animate-pulse">
          <Image
            alt="Seja bem vindo a sua jornada da dieta!"
            src={logo}
            width={150}
            height={150}
          />
        </div>
      </div>
    );
  }

  return null;
}
