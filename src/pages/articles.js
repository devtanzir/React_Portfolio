import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import Article1 from "../../public/images/articles/pagination component in reactjs.jpg";
import Article2 from "../../public/images/articles/create loading screen in react js.jpg";
import Article3 from "../../public/images/articles/form validation in reactjs using custom react hook.png";
import Article4 from "../../public/images/articles/smooth scrolling in reactjs.png";
import Article5 from "../../public/images/articles/create modal component in react using react portals.png";
import Article6 from "../../public/images/articles/todo list app built using react redux and framer motion.png";
import Article7 from "../../public/images/articles/What is Redux with easy explanation.png";
import Article8 from "../../public/images/articles/What is higher order component in React.jpg";
import { motion, useMotionValue } from "framer-motion";
import Transition from "@/components/Transition";

const FramerImage = motion(Image);

const MovingImage = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handMouse(e) {
    imgRef.current.style.display = "inline-block";
    x.set(e.pageX);
    y.set(-10);
  }

  function handMouseLeve(e) {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }

  return (
    <Link
      href={link}
      target="_blank"
      onMouseMove={handMouse}
      onMouseLeave={handMouseLeve}
    >
      <h2 className="capitalize text-xl font-semibold hover:underline">
        {title}
      </h2>
      <FramerImage
        style={{ x: x, y: y }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        ref={imgRef}
        src={img}
        alt={title}
        className="z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden"
      />
    </Link>
  );
};

const Articles = ({ img, title, date, link }) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
      className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light dark:bg-dark dark:text-light dark:border-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4 sm:flex-col"
    >
      <MovingImage title={title} img={img} link={link} />
      <span className="text-primary dark:text-primaryDark font-semibold pl-4 sm:self-start sm:pl-0 xs:text-sm">
        {date}
      </span>
    </motion.li>
  );
};

const FeaturedArticle = ({ img, title, time, summary, link }) => {
  return (
    <li className="col-span-1 w-full p-4 bg-light dark:bg-dark dark:border-light border border-solid border-dark rounded-2xl relative">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] dark:bg-light bg-dark rounded-br-3xl" />

      <Link
        href={link}
        target="_blank"
        className="w-full inline-block cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          className="w-full h-auto"
          priority
          sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                50vw"
        />
      </Link>
      <Link href={link} target="_blank">
        <h2 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline underline-offset-2 xs:text-lg">
          {title}
        </h2>
      </Link>
      <p className="text-sm mb-2">{summary}</p>
      <span className="text-primary dark:text-primaryDark font-semibold">
        {time}
      </span>
    </li>
  );
};

const articles = () => {
  return (
    <>
      <Head>
        <title>TanzirIbneAli | Article Page</title>
        <meta name="description" content="any description" />
      </Head>
      <Transition />
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Words Can Change The World!"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <ul className="grid grid-cols-2 gap-16 md:grid-cols-1 lg:gap-8 md:gap-y-16">
            <FeaturedArticle
              title="Build A Custom Pagination Component In Reactjs From Scratch"
              img={Article1}
              time="9 min read"
              summary="Learn how to build a custom pagination component in ReactJS from scratch. 
                    Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
              link="/"
            />

            <FeaturedArticle
              title="Creating Stunning Loading Screens In React: Build 3 Types Of Loading Screens"
              img={Article2}
              time="10 min read"
              summary="Learn how to create stunning loading screens in React with 3 different methods. 
                    Discover how to use React-Loading, React-Lottie & build a custom loading screen. 
                    Improve the user experience."
              link="/"
            />
          </ul>
          <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">
            All Articles
          </h2>
          <ul>
            <Articles
              title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              img={Article3}
              date="March 22, 2023"
              link="/"
            />
            <Articles
              title="Silky Smooth Scrolling In Reactjs: A Step-By-Step Guide For React Developers"
              img={Article4}
              date="March 22, 2023"
              link="/"
            />
            <Articles
              title="Creating An Efficient Modal Component In React Using Hooks And Portals"
              img={Article5}
              date="March 22, 2023"
              link="/"
            />
            <Articles
              title="Build A Fabulous Todo List App With React, Redux And Framer-Motion"
              img={Article6}
              date="March 22, 2023"
              link="/"
            />
            <Articles
              title="Redux Simplified: A Beginner's Guide For Web Developers"
              img={Article7}
              date="March 22, 2023"
              link="/"
            />
            <Articles
              title="What Is Higher Order Component (Hoc) In React?"
              img={Article8}
              date="March 22, 2023"
              link="/"
            />
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default articles;
