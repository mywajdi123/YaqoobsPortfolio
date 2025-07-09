import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import icon360 from "../assets/360.png";

const container = {
  animate: {
    transition: {
      staggerChildren: 0.07,
    },
  },
};

const letterVariants = {
  initial: { y: 0 },
  animate: {
    y: [0, -24, 0],
    transition: {
      duration: 0.7,
      type: "spring",
      stiffness: 500,
      damping: 20,
    },
  },
};

const heroText = `Hi, I'm Yaqoob`;

const Hero = () => {
  const [animateLetters, setAnimateLetters] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);

  const handleModelLoaded = () => {
    setTimeout(() => {
      setAnimateLetters(true);

      setTimeout(() => {
        setShowSubtitle(true);
      }, 1800);
    }, 1600);
  };

  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#448EE4]" />
          <div className="w-1 sm:h-80 h-40 blue-gradient" />
        </div>

        <div>
          <motion.h1
            className={`${styles.heroHeadText} text-white`}
            variants={container}
            initial="initial"
            animate={animateLetters ? "animate" : "initial"}
            style={{ display: "flex", flexWrap: "wrap", gap: "2px" }}
          >
            {heroText.split("").map((char, idx) => (
              <motion.span
                key={idx}
                variants={letterVariants}
                style={{
                  display: "inline-block",
                  color: idx >= 8 ? "#448EE4" : undefined,
                }}
                className={idx >= 8 ? "text-[#448EE4]" : ""}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h1>
          
          <motion.p
            className={`${styles.heroSubText} mt-2 text-white-100`}
            initial={{ opacity: 0, y: 20 }}
            animate={showSubtitle ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Software Engineer with a Computer Science degree from{" "}
            <span className="text-[#E57200]">UVA</span>
            <br className="sm:block hidden" />
          </motion.p>
        </div>
      </div>

      <ComputersCanvas onLoaded={handleModelLoaded} />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 0, 24, 24, 0, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "loop",
                times: [0, 0.15, 0.35, 0.65, 0.85, 1],
                ease: "easeInOut",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>

      <motion.img
        src={icon360}
        alt="360 camera view"
        className="absolute bottom-8 right-1/3 w-14 h-14 opacity-80 pointer-events-none z-30"
        style={{
          filter: "drop-shadow(0 2px 8px #000a)",
          transform: "translateX(60px)",
        }}
      />
    </section>
  );
};

export default Hero;