import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";

import yaqoob from "../assets/yaqoob.jpg";
import plane from "../assets/plane.jpg";
import hiking from "../assets/hiking.jpg";

// Fun facts to display
const funFacts = [
  { fact: "🌏 I enjoy travelling and exploring and learning more about new cultures." },
  { fact: "🥾 Hiking and Backpacking enthusiast - always planning the next adventure." },
  { fact: "💻 Full-stack developer—React, Node.js, Java, and more." },
  { fact: "☕️ Enjoy spending time in cafés and trying out local coffee shops" },
];

const AboutMe = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px] shadow-lg">
      <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[180px] flex flex-col items-center`}>
        <motion.div variants={textVariant()} className="w-full">
          <h2 className={styles.sectionHeadText + " text-center"}>A little more about me...</h2>
          <p className="mt-2 text-white-100 text-[18px] text-center max-w-3xl mx-auto">
            Hey, I'm Yaqoob—a full-stack developer with a love for learning, new adventures, and creative problem solving. 
            Whether I’m building web apps or hiking new trails, I’m always up for a challenge and a good cup of coffee.
          </p>
        </motion.div>
      </div>

      {/* Middle: Images grid */}
      <div className="flex flex-wrap justify-center gap-8 py-8 px-6">
        {/* You */}
        <motion.div
          variants={fadeIn("up", "spring", 0, 0.8)}
          className="rounded-2xl overflow-hidden bg-black-200 w-56 h-64 flex flex-col items-center shadow-md"
        >
          <img src={yaqoob} alt="Yaqoob Wajdi" className="object-cover w-full h-48" />
          <div className="text-white mt-3 font-bold text-lg">Yaqoob Wajdi</div>
        </motion.div>
        {/* Intern Group */}
        <motion.div
          variants={fadeIn("up", "spring", 0.1, 0.8)}
          className="rounded-2xl overflow-hidden bg-black-200 w-56 h-64 flex flex-col items-center shadow-md"
        >
          <img src={plane} alt="Intern Group" className="object-cover w-full h-48" />
          <div className="text-white mt-3 font-bold text-lg">Intern Crew</div>
        </motion.div>
        {/* Japan/Hiking */}
        <motion.div
          variants={fadeIn("up", "spring", 0.2, 0.8)}
          className="rounded-2xl overflow-hidden bg-black-200 w-56 h-64 flex flex-col items-center shadow-md"
        >
          <img src={hiking} alt="Japan or Hiking" className="object-cover w-full h-48" />
          <div className="text-white mt-3 font-bold text-lg">Hiking in Japan</div>
        </motion.div>
      </div>

      {/* Bottom: Fun Facts */}
      <div className="py-6 flex flex-col items-center">
        <h3 className="text-white-100 text-xl font-semibold mb-4">Fun Facts</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {funFacts.map((item, idx) => (
            <motion.div
              key={idx}
              variants={fadeIn("up", "spring", 0.3 + idx * 0.07, 0.7)}
              className="bg-tertiary rounded-xl px-5 py-3 text-white-100 shadow-sm text-md"
            >
              {item.fact}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(AboutMe, "about");
