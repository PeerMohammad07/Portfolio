"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        A dedicated and passionate <span className="font-medium">MERN Stack Developer</span> with expertise in{" "}
        <span className="font-medium">JavaScript, React.js, Node.js, Express.js,</span> and{" "}
        <span className="font-medium">MongoDB</span>. Known for writing clean, maintainable code and continuously striving for growth and learning. 
        Thrives in innovative environments and excels at building dynamic, modern web applications that deliver impactful user experiences. 
        Adept at working in collaborative teams and tackling complex challenges with a focus on delivering high-quality solutions.
      </p>

      <p className="mb-3">
        My core stack includes{" "}
        <span className="font-medium">React, Next.js, Node.js,</span> and{" "}
        <span className="font-medium">MongoDB</span>. I am also familiar with TypeScript, Material UI, and other modern tools. 
        I'm always looking to learn new technologies and stay up-to-date with the latest in web development. 
        Currently, I'm seeking a <span className="font-medium">full-time position</span> as a software developer to contribute my technical expertise to forward-thinking projects and cutting-edge development.
      </p>

      <p>
        <span className="italic">Outside of coding</span>, I enjoy playing football, which keeps me active and energized. 
        I’m always eager to expand my knowledge in various fields, and I find that staying curious helps me bring fresh perspectives to my work.
      </p>
    </motion.section>
  );
}
  