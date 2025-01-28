import Image from "next/image";
import skills from "../data/skills.json";
import Link from "next/link";
import { ArrowUpRight, Code } from "lucide-react";
import SkillBadge from "@/components/SkillBadge";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { LinkPreview } from "@/components/ui/link-preview";
import { Metadata } from "next";

export default function Home() {
	return (
		<div>
			<div className="flex flex-col gap-2">
				<h1 className="text-2xl font-bold font-heading text-retro">
					hey, I am Mehul.{" "}
				</h1>
				<p className=" text-zinc-200 leading-tight">
					Hey there! I&apos;m Mehul Parekh, currently working as a{" "}
					<span className="font-semibold text-retro">
						Software Engineer Co-op
					</span>{" "}
					at{" "}
					<LinkPreview
						url={"https://www.curriculumassociates.com/"}
						className="font-semibold underline underline-offset-2 text-retro"
					>
						Curriculum Associates
					</LinkPreview>{" "}
					while pursuing Master&apos;s in Computer Science at Northeastern
					University&apos;s Khoury College. When I&apos;m not wrestling with
					code, I&apos;m either watching wrestling, catching a cricket match, or
					leveling up in video games. But honestly, my real jam is crafting
					cool, interactive websites—there&apos;s nothing like bringing ideas to
					life on the web!
				</p>
			</div>
			<hr className="my-4 " />
			<div>
				<h1 className="text-xl font-bold font-heading text-retro">
					Skills I&apos;ve Picked up
				</h1>
				<div>
					{skills.items.map((skill, idx) => (
						<div className="my-4" key={idx}>
							<h1 className="my-2 font-heading text-retro">{skill.name}</h1>
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
