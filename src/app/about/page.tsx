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
  ];

  const experienceData = [
    {
      company: "Khoury College Of Computer Sciences",
      role: "Teaching Assistant",
      startDate: "May 2024",
      endDate: "Present",
      img: "/khoury.jpeg",
      desc: "Held office hours, graded assignments, and assisted students in developing web applications using ReactJS and TypeScript. Mentored student groups and collaborated with the professor to ensure smooth delivery of course content.",
    },
    {
      company: "Appectual IT Solutions",
      role: "Software Developer Intern",
      startDate: "Jan 2023",
      endDate: "Apr 2023",
      img: "/appectual.jpeg",
      desc: "Collaborated with the Frontend Team to enhance responsive websites using ReactJS, Bootstrap, Tailwind CSS, and TypeScript. Executed client projects using agile methodologies, significantly enhancing client satisfaction.",
    },
    {
      company: "Sayhey",
      role: "Machine Learning Intern",
      startDate: "Jun 2022",
      endDate: "Oct 2022",
      img: "/sayhey.jpeg",
      desc: "Designed LSTM and deep learning models for a chatbot using Python and TensorFlow. Developed visualizations with Matplotlib and contributed to the successful development of a chatbot with a 73% accuracy rate.",
    },
    {
      company: "KJ Somaiya College of Engineering",
      role: "Data Science Intern",
      startDate: "Oct 2020",
      endDate: "Jan 2021",
      img: "/kj.jpg",
      desc: "Cleaned and organized COVID-19 patient data, applied EDA techniques, and utilized data visualization to uncover patterns. Implemented machine learning algorithms to enhance analysis and provide actionable insights.",
    },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold font-display ">About me 👦</h1>
      <hr className="my-4" />
      <Paragraph socials={socials} />
      <Education universityData={universityData} />
      <h2 className="text-xl font-bold font-display my-4">Work Experience</h2>
      <div className="flex flex-col gap-2 w-full">
        {experienceData.map((data, idx) => (
          <div
            key={idx}
            className="w-full flex gap-4 bg-zinc-100 bg-opacity-10 backdrop-blur-3xl px-1.5 py-1.5 rounded-md"
          >
            <div className="w-1/4 md:w-1/6 relative aspect-w-1 aspect-h-1">
              <Image
                src={data.img}
                alt={data.company}
                className="rounded-lg object-cover"
                layout="responsive"
                width={1}
                height={1}
              />
            </div>

            <div className="w-full">
              <div className="flex flex-col md:flex-row items-start md:justify-between">
                <h1 className="text-base md:text-lg  font-semibold">
                  {data.company}
                </h1>
                <p className="text-xs md:text-sm text-zinc-300 md:mx-4 md:mt-1">
                  {data.startDate} - {data.endDate}{" "}
                </p>
              </div>
              <p className="text-sm md:text-base my-2 md:mb-1.5">{data.role}</p>
              <p className="text-xs md:text-sm text-zinc-300">{data.desc}</p>
            </div>
          </div>
        ))}
      </div>
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
            <div className="w-1/4 md:w-1/6 relative aspect-w-1 aspect-h-1">
              <Image
                src={data.img}
                alt={data.university}
                className="rounded-lg object-cover"
                layout="responsive"
                width={1}
                height={1}
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
      
      <div>
      </div>
    </div>
  );
}

function Paragraph({ socials }: { socials: any[] }) {
  return (
    <div className="flex flex-col-reverse md:flex-row gap-4">
      <div>
        <p className="text-zinc-300 m-0">
          I&apos;m Mehul Parekh, a tech enthusiast who moved from Mumbai to
          Boston to pursue a Master&apos;s in Computer Science at Northeastern
          University. My journey has been fueled by a passion for technology and
          a love for professional wrestling and video gaming. I&apos;ve gained
          experience as a Teaching Assistant and Software Developer Intern and
          have worked on projects like Gather and Protrackr. I&apos;m now
          looking to start my career in tech and am eager to explore new
          opportunities while enjoying my favorite hobbies.
        </p>
        <ul className="my-4 flex gap-4 items-center ">
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
