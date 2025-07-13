"use client";
import { ArrowRight, Clock3, LucideZap, Map } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";

export default function HikeCard() {
  return (
    <motion.div className="relative" whileHover="hover" initial="initial">
      <div className="rounded-3xl shadow-2xl bg-white h-[380px] w-[300px] p-6 flex-col gap-5 relative z-10 group hover:rotate-3 transition-transform duration-350">
        <Image
          src="/mountain-hike-icon.png"
          height={80}
          width={80}
          alt="mountain icon"
        />
        <h1 className="text-5xl font-semibold leading-[55px] text-black group-hover:text-[#606B3A]">
          Mountain
        </h1>
        <div className="flex gap-1 font-bold">
          <h1 className="text-5xl font-semibold leading-[55px] text-black group-hover:text-[#606B3A]">
            Hike
          </h1>{" "}
          <div className="relative overflow-hidden w-14 h-14">
            {/* First arrow - slides out to right */}
            <motion.div
              className="absolute"
              variants={{
                initial: { x: 0, opacity: 1 },
                hover: { x: 40, opacity: 0 },
              }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
            >
              <ArrowRight className="h-15 w-15 text-black" strokeWidth={2.2} />
            </motion.div>

            {/* Second arrow - slides in from left */}
            <motion.div
              className="absolute"
              variants={{
                initial: { x: -40, opacity: 0 },
                hover: { x: 0, opacity: 1 },
              }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
            >
              <ArrowRight
                className="h-15 w-15 text-[#606B3A]"
                strokeWidth={2.2}
              />
            </motion.div>
          </div>
        </div>
        <div className="flex gap-5 text-[#777] text-xs my-5">
          <div className="flex gap-1 items-center justify-center ">
            <Clock3 className="h-3 w-3" /> 8 hours
          </div>
          <div className="flex gap-1 items-center justify-center">
            <Map className="h-2=3 w-3" /> 8 Kms
          </div>
          <div className="flex gap-1 items-center justify-center ">
            <LucideZap className="h-3 w-3 " /> Medium Level
          </div>
        </div>
        <span className="mt-5 text-[#4a4a4a] text-sm">
          Hiking on mountains blends physical challenge with natural beauty
          offering sweeping views.
        </span>
      </div>

      {/* Image animations - positioned behind the white card */}

      <motion.div
        className="h-[260px] w-[200px] rounded-3xl absolute top-0 right-0 -z-10 shadow-2xl"
        style={{ transformOrigin: "top left" }}
        variants={{
          initial: { rotate: 0, x: 0, y: 0 },
          hover: { rotate: -15, x: 20, y: -20 },
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
      >
        <Image
          src="/mountain-4.jpg"
          fill
          className="object-cover rounded-3xl"
          alt="mountain"
        />
      </motion.div>

      <motion.div
        className="h-[260px] w-[200px] rounded-3xl absolute bottom-0 left-0 -z-10 shadow-2xl"
        style={{ transformOrigin: "bottom right" }}
        variants={{
          initial: { rotate: 0, x: 0, y: 0 },
          hover: { rotate: -15, x: -60, y: 0 },
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
      >
        <Image
          src="/mountain-3.jpg"
          fill
          className="object-cover rounded-3xl"
          alt="mountain"
        />
      </motion.div>

      <motion.div
        className="h-[260px] w-[200px] rounded-3xl absolute bottom-0 right-0 -z-10 shadow-2xl"
        style={{ transformOrigin: "bottom left" }}
        variants={{
          initial: { rotate: 0, x: 0, y: 0 },
          hover: { rotate: 15, x: 20, y: 20 },
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
      >
        <Image
          src="/mountain-2.jpg"
          fill
          className="object-cover rounded-3xl"
          alt="mountain"
        />
      </motion.div>
      <motion.div
        className="h-[260px] w-[200px] rounded-3xl absolute top-0 left-0 -z-10 shadow-2xl"
        style={{ transformOrigin: "top right" }}
        variants={{
          initial: { rotate: 0, x: 0, y: 0 },
          hover: { rotate: 15, x: -40, y: 0 },
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
      >
        <Image
          src="/mountain-1.jpg"
          fill
          className="object-cover rounded-3xl"
          alt="mountain"
        />
      </motion.div>
    </motion.div>
  );
}
