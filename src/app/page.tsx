"use client"
import AnimatedPage from "@/components/AnimatedPage";
import Introduction from "@/components/Introduction";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { Button } from "@nextui-org/react";
import { useState } from "react";

export default function Home() {
  const [enableAnimation, setEnableAnimation] = useState<boolean>(false);
  return (
    <MaxWidthWrapper>
      <div className="flex mb-4 md:mb-2 w-full justify-center md:justify-start items-center">
      <Button className="" size="sm" variant={enableAnimation ? "faded" : "flat"} onClick={()=>setEnableAnimation(!enableAnimation)}>
        {enableAnimation ? "Disable Animation" : "Enable Animation"}
      </Button>
      </div>
      <Introduction
        enableAnimation={enableAnimation}
        setEnableAnimation={setEnableAnimation}
      />
      <Skills
        enableAnimation={enableAnimation}
        setEnableAnimation={setEnableAnimation}
      />
      <Projects
        enableAnimation={enableAnimation}
        setEnableAnimation={setEnableAnimation}
      />
    </MaxWidthWrapper>
  );
}
