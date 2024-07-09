import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Avatar, Card, CardBody } from "@nextui-org/react";

const About = () => {
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
      className="min-h-screen "
    >
      <>
      <h1 className="font-display text-3xl text-center">About me</h1>

      <div className="flex flex-col-reverse md:flex-row mt-12 md:mt-20 items-center gap-16 justify-between">
        <Card isBlurred shadow="lg">
          <CardBody className="text-sm md:text-lg p-10">
            Hello, I am Mehul Parekh, currently pursuing a{" "}
            <span className="font-bold text-slate-600">
              Master&apos;s in Computer Science at Northeastern University&apos;s Khoury
              College of Computer Sciences
            </span>
            . I hold a Bachelor of Technology in Information Technology from KJ
            Somaiya College of Engineering, Mumbai University. Apart from
            coding, I am a big fan of professional wrestling, enjoy watching
            cricket, and love playing video games.
          </CardBody>

        </Card>
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
            className="h-52 w-52 object-cover group-hover:scale-110 transition-all ease-in-out "
            isBordered
          />
        </motion.div>
      </div>
      </>
    </motion.section>
  );
};

export default About;
