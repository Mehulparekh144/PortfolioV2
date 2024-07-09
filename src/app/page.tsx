"use client";
import About from "@/components/About";
import Introduction from "@/components/Introduction";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Projects from "@/components/Projects";
import { TracingBeam } from "@/components/ui/TracingBeam";
import { Navbar } from "@nextui-org/react";


export default function Home() {
  // const [enableAnimation, setEnableAnimation] = useState<boolean>(false);
  return (
    <MaxWidthWrapper>
      {/* <TracingBeam> */}
        <Introduction />
        <About/>
        <Projects />
      {/* </TracingBeam> */}
    </MaxWidthWrapper>
  );
}
