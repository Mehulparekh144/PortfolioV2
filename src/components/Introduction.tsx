"use client";
import React, { useState } from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Avatar, Button } from "@nextui-org/react";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { File, Github, Linkedin, Mail, Twitter } from "lucide-react";
import { AnimateState } from "@/types/AnimationState";

const randomColor = [
  "hover:text-violet-500 transition ease-in-out",
  "hover:text-indigo-500 transition ease-in-out",
  "hover:text-blue-500 transition ease-in-out",
  "hover:text-green-500 transition ease-in-out",
  "hover:text-yellow-500 transition ease-in-out",
  "hover:text-orange-500 transition ease-in-out",
  "hover:text-red-500 transition ease-in-out",
];

const Introduction = ({
  enableAnimation,
  setEnableAnimation,
}: AnimateState) => {
  const { ref, inView } = useInView({ threshold: 0.8 });

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
    <section className="flex md:flex-row flex-col-reverse justify-center md:justify-between gap-y-3 items-center">
      {enableAnimation ? (
        <>
          <motion.div
            ref={ref}
            variants={animationVariants}
            initial={"hidden"}
            animate={inView ? "visible" : "hidden"}
            className="space-y-2 text-center md:text-left"
          >
            <div>
              <h1 className="text-3xl  md:text-4xl font-display ">
                Hi, I am Mehul Parekh
              </h1>
              <Link
                className="underline underline-offset-1 text-zinc-600"
                target="_blank"
                href={"mailto:mehulparekh144@gmail.com"}
              >
                mehulparekh144@gmail.com
              </Link>
            </div>
            <p className="text-base">
              I am a FullStack Developer and I love creating web applications
              and exciting projects !
            </p>
            <ul className="flex mt-2 gap-2 items-center md:justify-start justify-center">
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
                aria-label="Linkedin"
                href={"https://linkedin.com/in/mehul-parekh-a519a9196/"}
              >
                <Linkedin className="h-4 w-4 group-hover:scale-110 transition-transform" />
              </Link>
              <Link
                target="_blank"
                className={`bg-zinc-800 text-zinc-300 p-2 hover:scale-105 ${
                  randomColor[Math.floor(Math.random() * randomColor.length)]
                } rounded-full group`}
                aria-label="Linkedin"
                href={"https://twitter.com/Mehul64188112"}
              >
                <Twitter className="h-4 w-4 group-hover:scale-110 transition-transform" />
              </Link>
              <Link
                target="_blank"
                className={`bg-zinc-800 text-zinc-300 p-2 hover:scale-105 ${
                  randomColor[Math.floor(Math.random() * randomColor.length)]
                } rounded-md group`}
                aria-label="Resume"
                href={
                  "https://drive.google.com/file/d/1L_85ccTw_EbHqx1OYQNwSjv82oDMyMEY/view?usp=sharing"
                }
              >
                <h1 className="text-sm group-hover:scale-110 transition-transform">
                  Resume
                </h1>
              </Link>
            </ul>
          </motion.div>
          <motion.div
            ref={ref}
            variants={animationVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="group space-y-2 text-center md:text-left grayscale hover:filter-none"
          >
            <Avatar
              src={"./profile.jpg"}
              size="lg"
              className="h-36 w-36 object-cover group-hover:scale-110 transition-all ease-in-out "
              isBordered
            />
          </motion.div>
        </>
      ) : (
        <>
          <div className="space-y-2 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-display ">
              Hi, I am Mehul Parekh
            </h1>
            <Link
              className="underline underline-offset-1 text-zinc-600"
              target="_blank"
              href={"mailto:mehulparekh144@gmail.com"}
            >
              mehulparekh144@gmail.com
            </Link>
            <p className="text-base">
              I am a FullStack Developer and I love creating web applications
              and exciting projects !
            </p>
            <ul className="flex mt-2 gap-2 items-center md:justify-start justify-center">
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
                aria-label="Linkedin"
                href={"https://linkedin.com/in/mehul-parekh-a519a9196/"}
              >
                <Linkedin className="h-4 w-4 group-hover:scale-110 transition-transform" />
              </Link>
              <Link
                target="_blank"
                className={`bg-zinc-800 text-zinc-300 p-2 hover:scale-105 ${
                  randomColor[Math.floor(Math.random() * randomColor.length)]
                } rounded-full group`}
                aria-label="Linkedin"
                href={"https://twitter.com/Mehul64188112"}
              >
                <Twitter className="h-4 w-4 group-hover:scale-110 transition-transform" />
              </Link>

              <Link
                target="_blank"
                className={`bg-zinc-800 text-zinc-300 p-2 hover:scale-105 ${
                  randomColor[Math.floor(Math.random() * randomColor.length)]
                } rounded-md group`}
                aria-label="Resume"
                href={
                  "https://drive.google.com/file/d/1L_85ccTw_EbHqx1OYQNwSjv82oDMyMEY/view?usp=sharing"
                }
              >
                <h1 className="text-sm group-hover:scale-110 transition-transform">
                  Resume
                </h1>
              </Link>
            </ul>
          </div>
          <div className="group space-y-2 text-center md:text-left grayscale hover:filter-none">
            <Avatar
              src={"./profile.jpg"}
              size="lg"
              className="h-36 w-36 object-cover group-hover:scale-110 transition-all ease-in-out "
              isBordered
            />
          </div>
        </>
      )}
    </section>
  );
};

export default Introduction;
