"use client";
import LightBackgroundWrapper from "@/components/background";
import HikeCard from "@/components/mountain-hike";

export default function Home() {
  return (
    <LightBackgroundWrapper>
      <div className="min-h-screen w-full flex items-center justify-center">
        <HikeCard />
      </div>
    </LightBackgroundWrapper>
  );
}
