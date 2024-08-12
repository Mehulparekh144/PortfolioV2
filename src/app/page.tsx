import Image from "next/image";
import skills from "../data/skills.json";
import Link from "next/link";
import { ArrowUpRight, Code } from "lucide-react";
import SkillBadge from "@/components/SkillBadge";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

export default function Home() {
  return (
    <div className="px-12 md:px-32 lg:px-[36rem] py-16 text-zinc-100">
      <nav className="flex gap-4 mb-3 font-display justify-end">
        <Link href={"/"} className="w-max cool-underline">home</Link>
        <Link href={"/"} className="w-max cool-underline">projects</Link>
        <Link href={"/"} className="w-max cool-underline">about</Link>
      </nav>
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold font-display">hey, I am Mehul. </h1>
        <p className="font-display text-base text-zinc-400">
          Hey there! I&apos;m Mehul Parekh, currently diving deep into my
          Master's in Computer Science at Northeastern University's Khoury
          College. When I&apos;m not wrestling with code, I&apos;m either
          watching wrestling, catching a cricket match, or leveling up in video
          games. But honestly, my real jam is crafting cool, interactive
          websites—there&apos;s nothing like bringing ideas to life on the web!
        </p>
      </div>
      <div className="my-4">
        <Link
          href={"/"}
          target="_blank"
          className="flex gap-0.5 items-center w-max cool-underline"
        >
          resume <ArrowUpRight className="w-5 h-5" />
        </Link>
      </div>
      <hr className="my-4 " />
      <div>
        <h1 className="text-xl">Skills I&apos;ve Picked up</h1>
        <div>
          {
            skills.items.map((skill , idx) => (
              <div className="my-4" key={idx}>
              <h1 className="my-2">{skill.name}</h1>
              <div className="flex gap-1 flex-wrap">
              {skill.skills.map((s , i) => (
                <SkillBadge key={i} skill={s} />
              ))}
              </div>
              </div>
              
            ))
          }
        </div>
      </div>
    </div>
  );
}
