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
    fact: "📚 Fun fact - I can speak 3 languages.",
  },
  {
    img: plane,
    fact: "🌏 I enjoy traveling and exploring new parts of the world.",
  },
  {
    img: hiking,
    fact: "🥾 I am really into the outdoors and I am always planning my next adventure.",
  },
  {
    img: cafe,
    fact: "☕️ I enjoy spending time in cozy cafés and exploring local coffee spots.",
  },
];

const AboutMe = () => {
  return (
    <div className="mt-12 bg-[#17213d] rounded-[32px] shadow-lg px-8 py-10 flex flex-col items-center max-w-6xl mx-auto">
      <motion.div variants={textVariant()} className="w-full">
        <h2 className={styles.sectionHeadText + " text-center"}>A little more about me. . .</h2>
        <p className="mt-2 text-white-100 text-[18px] text-center max-w-3xl mx-auto">
          I’m a full-stack developer who likes learning new things, 
          building web apps, and exploring new ideas when I get the chance. I enjoy a good challenge whether 
          that’s at my desk or out when I am hiking. Scroll down and let's connect!
        </p>
      </motion.div>

      <div className="w-full flex flex-wrap justify-center gap-8 py-10">
        {aboutCards.map((card, idx) => (
          <motion.div
            variants={fadeIn("up", "spring", idx * 0.2, 0.8)}
            className="flex flex-col items-center w-56"
          >
            <div className="rounded-2xl overflow-hidden w-56 h-64 flex flex-col">
              <img src={card.img}/>
              <div className="text-black mt-3 font-bold text-lg text-center bg-transparent"> 
              </div>
            </div>
            <div className="rounded-xl px-4 py-2 mt-4 text-white-100 text-md text-center max-w-[220px] bg-[#17213d]">
              {card.fact}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(AboutMe, "about");
