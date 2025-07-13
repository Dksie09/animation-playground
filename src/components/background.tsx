"use client";
import React, { useEffect, useState, ReactNode } from "react";
import { motion } from "motion/react";

interface LightBackgroundWrapperProps {
  children: ReactNode;
  className?: string;
}

const LightBackgroundWrapper: React.FC<LightBackgroundWrapperProps> = ({
  children,
  className = "",
}) => {
  // Add subtle noise effect with SVG filter
  const [noiseURL, setNoiseURL] = useState("");

  useEffect(() => {
    // Create light noise pattern dynamically
    const generateNoise = () => {
      const canvas = document.createElement("canvas");
      canvas.width = 256;
      canvas.height = 256;

      const ctx = canvas.getContext("2d");
      if (!ctx) return "";

      const imgData = ctx.createImageData(canvas.width, canvas.height);
      const data = imgData.data;

      for (let i = 0; i < data.length; i += 4) {
        const intensity = Math.floor(Math.random() * 8 + 248); // Light noise (248-255)
        data[i] = intensity;
        data[i + 1] = intensity;
        data[i + 2] = intensity;
        data[i + 3] = 8; // Very subtle opacity
      }

      ctx.putImageData(imgData, 0, 0);
      return canvas.toDataURL("image/png");
    };

    setNoiseURL(generateNoise());
  }, []);

  return (
    <div
      className={`relative w-full min-h-screen overflow-hidden bg-white ${className}`}
    >
      {/* Light noise overlay */}
      {noiseURL && (
        <div
          className="absolute inset-0 w-full h-full opacity-20 mix-blend-multiply"
          style={{
            backgroundImage: `url(${noiseURL})`,
            backgroundRepeat: "repeat",
          }}
        />
      )}

      {/* Animated gradient blobs with light blueish colors */}
      <motion.div
        className="absolute rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle at center, #C4DED5 0%, transparent 70%)",
          width: "60vw",
          height: "60vw",
          top: "20%",
          left: "30%",
        }}
        animate={{
          x: [0, -100, 50, -50, 0],
          y: [0, -50, 100, 50, 0],
          scale: [1, 1.2, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle at center, #D7EBE3 0%, transparent 70%)",
          width: "50vw",
          height: "50vw",
          bottom: "10%",
          right: "15%",
        }}
        animate={{
          x: [0, 80, -70, 40, 0],
          y: [0, 60, -40, -80, 0],
          scale: [1, 0.8, 1.3, 0.9, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle at center, #C4DED5 0%, transparent 70%)",
          width: "40vw",
          height: "40vw",
          bottom: "30%",
          left: "10%",
        }}
        animate={{
          x: [0, 120, -60, 30, 0],
          y: [0, -80, -20, 100, 0],
          scale: [1, 1.1, 1.4, 0.8, 1],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      />

      {/* Additional smaller blobs for more movement */}
      <motion.div
        className="absolute rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle at center, #D7EBE3 0%, transparent 70%)",
          width: "30vw",
          height: "30vw",
          top: "15%",
          left: "5%",
        }}
        animate={{
          x: [0, 50, -30, 80, 0],
          y: [0, 30, 70, -50, 0],
          scale: [1, 1.2, 0.7, 1.3, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      />

      {/* Content container - wraps any children passed to the component */}
      <div className="relative z-10 w-full h-full">{children}</div>
    </div>
  );
};

export default LightBackgroundWrapper;
