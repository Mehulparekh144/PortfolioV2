"use client"
import AnimatedPage from '@/components/AnimatedPage'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { Chip, Divider } from '@nextui-org/react'
import { Code2,  ExternalLink,  Github,  Link2, MoveLeft } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import React from 'react'

const Project = () => {
  const searchParams = useSearchParams()
  const name = searchParams.get("name")
  const link = searchParams.get("link")
  const desc = searchParams.get("desc")
  const techString = searchParams.get("tech")
  const techArray = techString?.split(',')
  const img = searchParams.get("img")
  const git = searchParams.get("git")
  const randomColor = [
  "hover:bg-violet-500 transition ease-in-out",
  "hover:bg-indigo-500 transition ease-in-out",
  "hover:bg-blue-500 transition ease-in-out",
  "hover:bg-green-500 transition ease-in-out",
  "hover:bg-yellow-500 transition ease-in-out",
  "hover:bg-orange-500 transition ease-in-out",
  "hover:bg-red-500 transition ease-in-out",
];
  return (
    <AnimatedPage>
    <MaxWidthWrapper className='relative py-4'>
      <Link href={"/"} className="absolute w-max h-max  inset-0 top-4 left-4 z-10 bg-zinc-400/10 backdrop-blur-lg text-zinc-700 rounded-full p-2 md:p-4">
        <MoveLeft/>
      </Link>
      <div className="w-full group h-full outline-2 rounded-lg ring-2 ring-neutral-500/50">
        <div className="bg-black/10 backdrop-blur-3xl p-1 md:p-2 rounded-lg">
          <Image
            alt="Project Image"
            src={img ?? ""}
            quality={100}
            className="rounded-md ring-2 ring-neutral-700/5"
            placeholder="blur"
            blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
            width="1000"
            height="500"
          />
        </div>
      </div>
      <div className="mt-4 w-full">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl font-display">{name}</h1>
          <div className="flex gap-4 items-center">
            <Link
              href={git ?? ""}
              className="flex gap-2 items-center font-medium"
              aria-label="Repository"
              target="_blank"
            >
              Git <Github className="h-5 w-5" />
            </Link>
            <Link
              href={link ?? ""}
              className="flex gap-2 items-center font-medium"
              aria-label="Demo"
              target="_blank"
            >
              Demo <ExternalLink className="h-5 w-5" />
            </Link>
          </div>
        </div>
        <Divider className="my-2" />
        <div>{desc}</div>
        <div className="flex flex-row mt-2 flex-wrap gap-2 items-center">
          {techArray?.map((item, idx) => (
            <Chip
              className={
                randomColor[Math.floor(Math.random() * randomColor.length)]
              }
              size="md"
              key={idx}
            >
              {item}
            </Chip>
          ))}
        </div>
      </div>
    </MaxWidthWrapper>
    </AnimatedPage>
  );
}

export default Project
