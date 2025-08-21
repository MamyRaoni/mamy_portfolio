"use client"
import Image from "next/image";
import Countdown from "@/components/Countdown";

export default function Custom500() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-base-200 text-center px-4">
      {/* Illustration */}
      <div className="max-w-md">
        <Image
          src="/backgroud_section.svg"
          alt="Server Error Illustration"
          width={500}
          height={500}
          priority
        />
      </div>
      <h2 className="text-2xl font-semibold text-gray-600 mb-2">
        Desolé, La panne vient de nous. Pas de vous XD
      </h2>
      <p className="text-gray-500 mb-10">
        Nous sommes en cours de maintenance. Revenez dans<br />
      </p>
      <Countdown seconds={2500000} /> 
    </div>
  );
}
