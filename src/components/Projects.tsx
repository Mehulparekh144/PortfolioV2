"use client";

import { Button, Card, CardBody, Image } from "@nextui-org/react";
import { Code2, Link2 } from "lucide-react";
import Link from "next/link";
import React from "react";
import projects from "../data/projects.json";
import {motion} from 'framer-motion'
import { useInView } from "react-intersection-observer";
import { AnimateState } from "@/types/AnimationState";

const Projects = ({ enableAnimation, setEnableAnimation }: AnimateState) => {
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
    <>
    {
      enableAnimation ? 
    <motion.section
      ref={ref}
      initial="hidden"
      variants={animationVariants}
      animate={inView ? "visible" : "hidden"}
      className="mt-2 md:mt-16"
    >
      <h1 className="font-display text-2xl mb-2 text-center">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-2  gap-3 ">
        {projects.data.map((item, index) => (
          <>
            <div
              className="bg-white w-full h-max shadow-md rounded-xl"
              key={index}
            >
              <Card>
                <CardBody className=" p-0 overflow-visible grayscale hover:filter-none">
                  <Link
                    href={{
                      pathname: "/project",
                      query: { ...item, tech: item.tech.join(",") },
                    }}
                  >
                    <Image
                      shadow="sm"
                      radius="lg"
                      width="100%"
                      max-width="100%" // Add this
                      fallbackSrc="https://via.placeholder.com"
                      isZoomed
                      alt={"ALT"}
                      className="w-full object-contain h-[250px] "
                      src={item.img}
                    />
                  </Link>
                </CardBody>
              </Card>
              <div className="px-2 py-2 flex text-small w-full items-center justify-between">
                <p className="font-semibold">{item.name}</p>
                <div className="flex gap-2 items-center">
                  <Link href={item.git} aria-label="Repository" target="_blank">
                    <Code2 />
                  </Link>
                  <Link href={item.link} aria-label="Demo" target="_blank">
                    <Link2 />
                  </Link>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </motion.section> 
    :
    <section
     
      className="mt-6 md:mt-20"
    >
      <h1 className="font-display text-2xl mb-2 text-center">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-2  gap-3 ">
        {projects.data.map((item, index) => (
          <>
            <div
              className="bg-white w-full h-max shadow-md rounded-xl"
              key={index}
            >
              <Card>
                <CardBody className=" p-0 overflow-visible grayscale hover:filter-none">
                  <Link
                    href={{
                      pathname: "/project",
                      query: { ...item, tech: item.tech.join(",") },
                    }}
                  >
                    <Image
                      shadow="sm"
                      radius="lg"
                      width="100%"
                      max-width="100%" // Add this
                      fallbackSrc="https://via.placeholder.com"
                      isZoomed
                      alt={"ALT"}
                      className="w-full object-contain h-[250px] "
                      src={item.img}
                    />
                  </Link>
                </CardBody>
              </Card>
              <div className="px-2 py-2 flex text-small w-full items-center justify-between">
                <p className="font-semibold">{item.name}</p>
                <div className="flex gap-2 items-center">
                  <Link href={item.git} aria-label="Repository" target="_blank">
                    <Code2 />
                  </Link>
                  <Link href={item.link} aria-label="Demo" target="_blank">
                    <Link2 />
                  </Link>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </section>
    }
    </>
  );
};

export default Projects;
