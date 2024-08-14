import { ArrowUpRight, GithubIcon, LinkedinIcon, MailIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const About = () => {
  const socials = [
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/mehulparekh/",
    },
    {
      name: "GitHub",
      link: "https://github.com/Mehulparekh144",
    },
    {
      name: "Email",
      link: "mailto:mehulparekh144@gmail.com",
    },
  ];

  const universityData = [
    {
      university: "Northeastern University",
      startDate: "January 2024",
      endDate: "May 2026",
      degree: "Masters in Computer Science",
      gpa: "4.0",
      outOfGpa: "4.0",
      img: "/neu.jpg",
      pursuing: true,
    },
    {
      university: "K.J.Somaiya College Of Engineering",
      startDate: "August 2019",
      endDate: "May 2023",
      degree: "BTech in Information Technology",
      gpa: "8.74",
      outOfGpa: "10.0",
      img: "/kj.jpg",
      pursuing: false,
    },
    // Add more items as needed
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold font-display">About me 👦</h1>
      <hr className="my-4" />
      <Paragraph socials={socials}/>
      <Education universityData={universityData} />
    </div>
  );
};

export default About;

function Education({ universityData }: { universityData: any[] }) {
  return (
    <div>
      <h2 className="text-xl font-bold font-display mb-4">Education</h2>
      <div className="flex flex-col gap-2 w-full">
        {universityData.map((data, idx) => (
          <div
            key={idx}
            className="w-full flex gap-4 bg-zinc-100 bg-opacity-10 backdrop-blur-3xl px-1.5 py-1.5 rounded-md"
          >
            <div className="w-24 relative">
              <Image
                src={data.img}
                alt={data.university}
                className="rounded-lg"
                fill
              />
            </div>
            <div className="w-full">
              <div className="flex flex-col md:flex-row items-start md:justify-between">
                <h1 className="text-base md:text-lg  font-semibold">
                  {data.university}
                </h1>
                <p className="text-xs md:text-sm text-zinc-300 md:mx-4 md:mt-1">
                  {data.startDate} - {data.endDate}{" "}
                  {data.pursuing && "(Expected)"}
                </p>
              </div>
              <p className="text-sm md:text-base my-2 md:mb-1.5">
                {data.degree}
              </p>
              <p className="text-xs md:text-sm text-zinc-300">
                GPA: {data.gpa} / {data.outOfGpa}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Paragraph({socials}: {socials: any[]}) {
  return (
    <div className="flex flex-col-reverse items-center md:items-start md:flex-row gap-4">
      <div>
        <p className="text-zinc-300 m-0 text-center md:text-start ">
          I&apos;m Mehul Parekh, a tech enthusiast who moved from Mumbai to
          Boston to pursue a Master&apos;s in Computer Science at Northeastern
          University. My journey has been fueled by a passion for technology and
          a love for professional wrestling and video gaming. I&apos;ve gained
          experience as a Teaching Assistant and Software Developer Intern and
          have worked on projects like Gather and Protrackr. I&apos;m now
          looking to start my career in tech and am eager to explore new
          opportunities while enjoying my favorite hobbies.
        </p>
        <ul className="my-4 flex gap-4 items-center justify-center md:justify-start">
          {socials.map((social, idx) => (
            <li key={idx}>
              <Link
                className="flex gap-0.5 items-end cool-underline"
                target="_blank"
                href={social.link}
              >
                {social.name.toLowerCase()}
                <ArrowUpRight className="w-5 h-5" />
              </Link>{" "}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-64 h-64 relative flex-shrink-0">
        <Image
          src={"/profile.jpg"}
          quality={100}
          fill
          alt="profile"
          className="rounded-md"
        />
      </div>
    </div>
  );
}
