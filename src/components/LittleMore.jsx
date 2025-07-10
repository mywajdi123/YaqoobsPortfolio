import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";

import yaqoob from "../assets/yaqoob.jpg";
import plane from "../assets/plane.jpg";
import hiking from "../assets/hiking.jpg";
import cafe from "../assets/cafe.jpg";

const aboutCards = [
  {
    img: yaqoob,
    alt: "Yaqoob Wajdi",
    title: "Yaqoob Wajdi",
    fact: "💻 Full-stack developer—React, Node.js, Java, and more.",
  },
  {
    img: plane,
    alt: "Intern Crew",
    title: "Intern Crew",
    fact: "🌏 I enjoy travelling and exploring and learning more about new cultures.",
  },
  {
    img: hiking,
    alt: "Hiking in Japan",
    title: "Hiking in Japan",
    fact: "🥾 Hiking and Backpacking enthusiast - always planning the next adventure.",
  },
  {
    img: cafe,
    alt: "Cafe Time",
    title: "Cafe Vibes",
    fact: "☕️ Enjoy spending time in cafés and trying out local coffee shops",
  },
];

const AboutMe = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px] shadow-lg">
      <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[180px] flex flex-col items-center`}>
        <motion.div variants={textVariant()} className="w-full">
          <h2 className={styles.sectionHeadText + " text-center"}>A little more about me…</h2>
          <p className="mt-2 text-white-100 text-[18px] text-center max-w-3xl mx-auto">
            Hey, I'm Yaqoob—a full-stack developer with a love for learning, new adventures, and creative problem solving.
            Whether I’m building web apps or hiking new trails, I’m always up for a challenge and a good cup of coffee.
          </p>
        </motion.div>
      </div>

      <div className="flex flex-wrap justify-center gap-8 py-10 px-6">
        {aboutCards.map((card, idx) => (
          <motion.div
            key={card.title}
            variants={fadeIn("up", "spring", idx * 0.2, 0.8)}
            className="flex flex-col items-center w-56"
          >
            <div className="rounded-2xl overflow-hidden bg-black-200 w-56 h-64 shadow-md flex flex-col">
              <img src={card.img} alt={card.alt} className="object-cover w-full h-48" />
              <div className="text-white mt-3 font-bold text-lg text-center">{card.title}</div>
            </div>
            <div className="bg-tertiary rounded-xl px-4 py-2 mt-4 text-white-100 shadow text-md text-center max-w-[220px]">
              {card.fact}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(AboutMe, "about");
