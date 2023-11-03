"use client";
import { Card, CardBody, Chip, Divider } from "@nextui-org/react";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { AnimateState } from "@/types/AnimationState";

const Skills = ({ enableAnimation, setEnableAnimation }: AnimateState) => {
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

  const frontendArray = ["HTML", "CSS", "ReactJS", "NextJS", "TailwindCSS"];
  const backendArray = [
    "MongoDB",
    "PostgreSQL",
    "NodeJS",
    "ExpressJS",
    "TRPC",
    "Prisma",
    "Django",
  ];
  const languagesArray = ["Javascript", "Python", "Java"];

  const toolsArray = ["Figma", "MS Office", "Canva", "Adobe Illustrator"];

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
      {enableAnimation ? (
        <motion.section
          ref={ref}
          initial="hidden"
          variants={animationVariants}
          animate={inView ? "visible" : "hidden"}
          className="mt-6 md:mt-12  grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 w-full gap-3"
        >
          <Card
            isBlurred
            className="row-span-1 col-span-1 md:row-span-2 h-full w-full "
          >
            <CardBody className="flex flex-col justify-between gap-y-4">
              <div>
                <h1 className="text-xl font-display">Frontend Development</h1>
                <Divider />
                <div className="mt-2">
                  <h1 className="text-lg font-medium"></h1>
                  <div className="flex flex-wrap gap-2 items-center">
                    {frontendArray.map((item, index) => (
                      <Chip
                        className={
                          randomColor[
                            Math.floor(Math.random() * randomColor.length)
                          ]
                        }
                        size="sm"
                        key={index}
                      >
                        {item}
                      </Chip>
                    ))}
                  </div>
                </div>
              </div>
              <div>
                <h1 className="text-xl font-display">Backend Development</h1>
                <Divider />
                <div className="mt-2">
                  <h1 className="text-lg font-medium"></h1>
                  <div className="flex flex-wrap gap-2 items-center">
                    {backendArray.map((item, index) => (
                      <Chip
                        className={
                          randomColor[
                            Math.floor(Math.random() * randomColor.length)
                          ]
                        }
                        size="sm"
                        key={index}
                      >
                        {item}
                      </Chip>
                    ))}
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
          <Card isBlurred className="">
            <CardBody className="">
              <div>
                <h1 className="text-xl font-display">Tools</h1>
                <Divider />
                <div className="mt-2">
                  <h1 className="text-lg font-medium"></h1>
                  <div className="flex flex-wrap gap-2  items-center">
                    {toolsArray.map((item, index) => (
                      <Chip
                        className={
                          randomColor[
                            Math.floor(Math.random() * randomColor.length)
                          ]
                        }
                        size="sm"
                        key={index}
                      >
                        {item}
                      </Chip>
                    ))}
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
          <Card isBlurred className="">
            <CardBody>
              <div>
                <h1 className="text-xl font-display">Languages</h1>
                <Divider />
                <div className="mt-2">
                  <h1 className="text-lg font-medium"></h1>
                  <div className="flex flex-wrap gap-2 items-center">
                    {languagesArray.map((item, index) => (
                      <Chip
                        className={
                          randomColor[
                            Math.floor(Math.random() * randomColor.length)
                          ]
                        }
                        size="sm"
                        key={index}
                      >
                        {item}
                      </Chip>
                    ))}
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        </motion.section>
      ) : (
        <section className="mt-6 md:mt-12  grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 w-full gap-3">
          <Card
            isBlurred
            className="row-span-1 col-span-1 md:row-span-2 h-full w-full "
          >
            <CardBody className="flex flex-col justify-between gap-y-4">
              <div>
                <h1 className="text-xl font-display">Frontend Development</h1>
                <Divider />
                <div className="mt-2">
                  <h1 className="text-lg font-medium"></h1>
                  <div className="flex flex-wrap gap-2 items-center">
                    {frontendArray.map((item, index) => (
                      <Chip
                        className={
                          randomColor[
                            Math.floor(Math.random() * randomColor.length)
                          ]
                        }
                        size="sm"
                        key={index}
                      >
                        {item}
                      </Chip>
                    ))}
                  </div>
                </div>
              </div>
              <div>
                <h1 className="text-xl font-display">Backend Development</h1>
                <Divider />
                <div className="mt-2">
                  <h1 className="text-lg font-medium"></h1>
                  <div className="flex flex-wrap gap-2 items-center">
                    {backendArray.map((item, index) => (
                      <Chip
                        className={
                          randomColor[
                            Math.floor(Math.random() * randomColor.length)
                          ]
                        }
                        size="sm"
                        key={index}
                      >
                        {item}
                      </Chip>
                    ))}
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
          <Card isBlurred className="">
            <CardBody className="">
              <div>
                <h1 className="text-xl font-display">Tools</h1>
                <Divider />
                <div className="mt-2">
                  <h1 className="text-lg font-medium"></h1>
                  <div className="flex flex-wrap gap-2  items-center">
                    {toolsArray.map((item, index) => (
                      <Chip
                        className={
                          randomColor[
                            Math.floor(Math.random() * randomColor.length)
                          ]
                        }
                        size="sm"
                        key={index}
                      >
                        {item}
                      </Chip>
                    ))}
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
          <Card isBlurred className="">
            <CardBody>
              <div>
                <h1 className="text-xl font-display">Languages</h1>
                <Divider />
                <div className="mt-2">
                  <h1 className="text-lg font-medium"></h1>
                  <div className="flex flex-wrap gap-2 items-center">
                    {languagesArray.map((item, index) => (
                      <Chip
                        className={
                          randomColor[
                            Math.floor(Math.random() * randomColor.length)
                          ]
                        }
                        size="sm"
                        key={index}
                      >
                        {item}
                      </Chip>
                    ))}
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        </section>
      )}
    </>
  );
};

export default Skills;
