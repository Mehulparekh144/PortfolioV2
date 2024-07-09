"use client";
import { Card, CardBody, Chip, Divider } from "@nextui-org/react";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { AnimateState } from "@/types/AnimationState";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";

const Skills = () => {
  const { ref, inView } = useInView({ threshold: 0.3 });
  const randomColor = [
    "hover:bg-violet-500 transition ease-in-out",
    "hover:bg-indigo-500 transition ease-in-out",
    "hover:bg-blue-500 transition ease-in-out",
    "hover:bg-green-500 transition ease-in-out",
    "hover:bg-yellow-500 transition ease-in-out",
    "hover:bg-orange-500 transition ease-in-out",
    "hover:bg-red-500 transition ease-in-out",
  ];

  const items = [
    {
      name: "Languages",
      skills: ["Java", "Javascript", "Typescript", "Python"],
    },
    {
      name: "Web Technologies",
      skills: [
        "ReactJS",
        "NextJS",
        "ExpressJS",
        "SpringBoot",
        "TRPC",
        "Django",
        "HTML",
        "CSS",
        "TailwindCSS",
        "Vercel",
        "Kafka",
        "RabbitMQ",
      ],
    },
    {
      name: "Database Technologies",
      skills: [
        "MongoDB",
        "MySQL",
        "PostgreSQL",
        "Redis",
      ],
    },
    {
      name: "Containerization",
      skills: ["Docker", "Kubernetes"],
    },
    {
      name: "Testing Frameworks",
      skills: ["Junit", "Mockito", "Jest", "Vitest"],
    },
    {
      name: "Libraries",
      skills: [
        "Pandas",
        "Numpy",
        "Sklearn",
        "Matplotlib",
        "Tensorflow",
        "OpenCV",
        "Keras",
        "Pytorch",
      ],
    },
    {
      name: "Other Tools",
      skills: ["Git", "Figma", "Jenkins", "VMWare", "Linux"],
    }
  ];

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
      className="mt-6 md:mt-12  w-full gap-3"
    >
      <InfiniteMovingCards items={items} />
    </motion.section>
  );
};

export default Skills;
