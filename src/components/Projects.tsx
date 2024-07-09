"use client";
import React from "react";
import projects from "../data/projects.json";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { HoverEffect } from "./ui/HoverEffect";

const Projects = () => {
  const { ref, inView } = useInView({ threshold: 0.25 });
  const animationVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "linear",
      },
    },
  };

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      variants={animationVariants}
      animate={inView ? "visible" : "hidden"}
      className="min-h-screen flex flex-col items-center justify-center"
    >
      <h1 className="font-display text-3xl text-center py-10">My Projects</h1>
      <HoverEffect items={projects.data}/>
    </motion.section>
  );
};

export default Projects;
