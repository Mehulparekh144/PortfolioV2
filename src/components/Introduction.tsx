"use client";
import React, { useState } from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { File, Github, Linkedin, ExternalLink, Mail } from "lucide-react";

import { TypewriterEffect } from "./ui/TypewriterEffect";
import { text } from "stream/consumers";
import Skills from "./Skills";

const randomColor = [
  "hover:text-violet-500 transition ease-in-out",
  "hover:text-indigo-500 transition ease-in-out",
  "hover:text-blue-500 transition ease-in-out",
  "hover:text-green-500 transition ease-in-out",
  "hover:text-yellow-500 transition ease-in-out",
  "hover:text-orange-500 transition ease-in-out",
  "hover:text-red-500 transition ease-in-out",
];

const Introduction = () => {
  const { ref, inView } = useInView({ threshold: 0.8 });

  const words = [
    {
      text: "Mehul",
    },
    {
      text: "Parekh",
    },
  ];

  const animationVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "linear",
      },
    },
  };
  return (
    <motion.div
      ref={ref}
      variants={animationVariants}
      initial={"hidden"}
      animate={inView ? "visible" : "hidden"}
      className="space-y-2 min-h-screen flex flex-col justify-start gap-y-3 items-start pt-28"
    >
      <TypewriterEffect words={words} />
      <p className="text-sm md:text-lg">
        I am a FullStack Developer and I love creating web applications and
        exciting projects !
      </p>
      <ul className="flex mt-2 gap-2 items-center  justify-center">
        <Link
          target="_blank"
          className={`bg-zinc-800 text-zinc-300 p-2 hover:scale-105 ${
            randomColor[Math.floor(Math.random() * randomColor.length)]
          } rounded-full group`}
          aria-label="Github"
          href={"https://github.com/Mehulparekh144"}
        >
          <Github className="h-4 w-4 group-hover:scale-110 transition-transform" />
        </Link>
        <Link
          target="_blank"
          className={`bg-zinc-800 text-zinc-300 p-2 hover:scale-105 ${
            randomColor[Math.floor(Math.random() * randomColor.length)]
          } rounded-full group`}
          aria-label="Mail"
          href={"mailto:mehulparekh144@gmail.com"}
        >
          <Mail className="h-4 w-4 group-hover:scale-110 transition-transform" />
        </Link>
        <Link
          target="_blank"
          className={`bg-zinc-800 text-zinc-300 p-2 hover:scale-105 ${
            randomColor[Math.floor(Math.random() * randomColor.length)]
          } rounded-full group`}
          aria-label="Linkedin"
          href={"https://linkedin.com/in/mehul-parekh-a519a9196/"}
        >
          <Linkedin className="h-4 w-4 group-hover:scale-110 transition-transform" />
        </Link>
      </ul>
      <Link
        className="bg-zinc-800 text-sm text-zinc-300 p-2 hover:scale-105 flex gap-2 items-center rounded-medium group"
        href={
          "https://drive.google.com/file/d/1L_85ccTw_EbHqx1OYQNwSjv82oDMyMEY/view?usp=sharing"
        }
        target="_blank"
      >
        Resume{" "}
        <ExternalLink className="h-4 w-4 group-hover:scale-110 transition-transform" />
      </Link>

      <Skills />
    </motion.div>
  );
};

export default Introduction;
