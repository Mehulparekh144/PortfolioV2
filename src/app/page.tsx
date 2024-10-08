import Image from "next/image";
import skills from "../data/skills.json";
import Link from "next/link";
import { ArrowUpRight, Code } from "lucide-react";
import SkillBadge from "@/components/SkillBadge";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold font-display">hey, I am Mehul. </h1>
        <p className="font-display text-base text-zinc-400">
          Hey there! I&apos;m Mehul Parekh, currently diving deep into my
          Master&apos;s in Computer Science at Northeastern University&apos;s Khoury
          College. When I&apos;m not wrestling with code, I&apos;m either
          watching wrestling, catching a cricket match, or leveling up in video
          games. But honestly, my real jam is crafting cool, interactive
          websites—there&apos;s nothing like bringing ideas to life on the web!
        </p>
      </div>
      <hr className="my-4 " />
      <div>
        <h1 className="text-xl font-bold font-display">Skills I&apos;ve Picked up</h1>
        <div>
          {skills.items.map((skill, idx) => (
            <div className="my-4" key={idx}>
              <h1 className="my-2">{skill.name}</h1>
              <div className="flex gap-1 flex-wrap">
                {skill.skills.map((s, i) => (
                  <SkillBadge key={i} skill={s.toLowerCase()} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
