import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";

import yaqoob from "../assets/yaqoob.jpg";
import plane from "../assets/plane.jpg";
import hiking from "../assets/hiking.jpg";
import cafe from "../assets/cafe.jpg"; // Add your cafe image here!

const aboutCards = [
  {
    img: yaqoob,
    fact: "💻 Full-stack developer—React, Node.js, Java, and more.",
  },
  {
    img: plane,
    fact: "🌏 I enjoy travelling and exploring and learning more about new cultures.",
  },
  {
    img: hiking,
    fact: "🥾 Hiking and Backpacking enthusiast - always planning the next adventure.",
  },
  {
    img: cafe,
    fact: "☕️ Enjoy spending time in cafés and trying out local coffee shops",
  },
];

const AboutMe = () => {
  return (
    <div className="mt-12 bg-[#17213d] rounded-[32px] shadow-lg px-8 py-10 flex flex-col items-center max-w-6xl mx-auto">
      {/* Header */}
      <motion.div variants={textVariant()} className="w-full">
        <h2 className={styles.sectionHeadText + " text-center"}>A little more about me…</h2>
        <p className="mt-2 text-white-100 text-[18px] text-center max-w-3xl mx-auto">
          Hey, I'm Yaqoob—a full-stack developer with a love for learning, new adventures, and creative problem solving.
          Whether I’m building web apps or hiking new trails, I’m always up for a challenge and a good cup of coffee.
        </p>
      </motion.div>

      {/* Cards Grid */}
      <div className="w-full flex flex-wrap justify-center gap-8 py-10">
        {aboutCards.map((card, idx) => (
          <motion.div
            
            variants={fadeIn("up", "spring", idx * 0.2, 0.8)}
            className="flex flex-col items-center w-56"
          >
            {/* Unified card: remove extra backgrounds */}
            <div className="rounded-2xl overflow-hidden w-56 h-64 shadow-md flex flex-col">
              <img src={card.img} className="object-cover w-full h-48" />
              <div className="text-white mt-3 font-bold text-lg text-center bg-transparent"> 
              </div>
            </div>
            <div className="rounded-xl px-4 py-2 mt-4 text-white-100 shadow text-md text-center max-w-[220px] bg-black-100/20">
              {card.fact}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(AboutMe, "about");
