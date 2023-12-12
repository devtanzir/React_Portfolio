import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Project1 from "../../public/images/projects/crypto-screener-cover-image.jpg";
import Project2 from "../../public/images/projects/nft-collection-website-cover-image.jpg";
import Project3 from "../../public/images/projects/fashion-studio-website.jpg";
import Project4 from "../../public/images/projects/portfolio-cover-image.jpg";
import Project5 from "../../public/images/projects/agency-website-cover-image.jpg";
import Project6 from "../../public/images/projects/devdreaming.jpg";

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full flex items-center justify-between relative rounded-br-2xl rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12">

      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl" />

      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
      >
        <Image src={img} alt={title} className="w-full h-auto hover:scale-105 duration-300" />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6">
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold">{title}</h2>
        </Link>

        <p className="my-2 font-medium text-dark">{summary}</p>
        <div className="mt-2 flex items-center ">
          <Link href={github} target="_blank" className="w-10">
            {" "}
            <GithubIcon />{" "}
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold "
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github }) => {
 return(
   <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative">
    <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl" />
    <Link
      href={link}
      target="_blank"
      className="w-full cursor-pointer overflow-hidden rounded-lg"
    >
      <Image src={img} alt={title} className="w-full h-auto hover:scale-105 duration-300" />
    </Link>

    <div className="w-full flex flex-col items-start justify-between mt-4">
      <span className="text-primary font-medium text-xl">{type}</span>
      <Link
        href={link}
        target="_blank"
        className="hover:underline underline-offset-2"
      >
        <h2 className="my-2 w-full text-left text-3xl font-bold">{title}</h2>
      </Link>

      <div className="w-full mt-2 flex items-center justify-between">
        <Link
          href={link}
          target="_blank"
          className="ml-4 text-lg font-semibold underline"
        >
          Visit
        </Link>

        <Link href={github} target="_blank" className="w-8">
          <GithubIcon />
        </Link>
      </div>
    </div>
  </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>TanzirIbneAli | Projects Page</title>
        <meta name="description" content="any description" />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16"
          />

          <div className="grid grid-cols-12 gap-24 gap-y-32">
            <div className="col-span-12">
              <FeaturedProject
                title="Crypto Screener Application"
                img={Project1}
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                local currency."
                link="/"
                github="/"
                type="Featured Project"
              />
            </div>

            <div className="col-span-6">
              <Project
                title="NFT collection Website"
                img={Project2}
                link="/"
                github="/"
                type="Website Template"
              />
            </div>

            <div className="col-span-6">
              <Project
                title="Fashion Studio Website"
                img={Project3}
                link="/"
                github="/"
                type="Website"
              />
            </div>

            <div className="col-span-12">
              <FeaturedProject
                title="React Portfolio Website"
                img={Project4}
                summary="A professional portfolio website using React JS, Framer-motion, and Styled-components. It has smooth 
                page transitions, cool background effects, unique design and it is mobile responsive."
                link="/"
                github="/"
                type="Portfolio Website"
              />
            </div>

            <div className="col-span-6">
              <Project
                title="Agency Website Template"
                img={Project5}
                link="/"
                github="/"
                type="Website Template"
              />
            </div>

            <div className="col-span-6">
              <Project
                title="DevDreaming"
                img={Project6}
                link="/"
                github="/"
                type="Blog Website"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
