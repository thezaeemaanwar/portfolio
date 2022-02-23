import { techStack } from "../components/Data/myself";
import TechCard from "../components/TechCard";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="text-lg w-11/12 md:w-3/4 bg-opacity-5 bg-white px-10 py-24 sm:px-24 lg:px-48 my-5 rounded-lg shadow-lg mb-10">
        <div className="text-4xl text-transparent bg-clip-text bg-gradient-to-tr from-pink to-orange filter drop-shadow-lg pb-2 px-6 border-pink border-b-2">
          About Me
        </div>
        <div className="text-2xl font-medium pb-4 mt-5">
          I like to code. And while I am not coding, I design.
        </div>
        Hello World, I am Zaeema Anwar. Currently attending my senior year at
        the University of Engineering and Technology, Lahore. I am an ambivert
        and often very friendly and talkative. <br />
        <br />I like to explore new technologies and do things that use
        imagination so I started graphic designing as a hobby. My passion for
        helping humanity led me to serve a welfare organization as a Graphics
        Lead.
        <br /> <br />
        What I love about coding is that I can create anything I imagine. There
        is so much freedom in doing one thing in so many ways and after a
        problem is solved, there are still so many ways to improve it.
      </div>
      <div className="text-4xl text-transparent bg-clip-text bg-gradient-to-tr from-pink to-orange filter drop-shadow-lg pb-2 px-6 border-pink border-b-2">
        My Tech Stack
      </div>
      <div className="w-3/4 grid md:grid-cols-2">
        {techStack.map((stack, ind) => (
          <TechCard key={ind} stack={stack} />
        ))}
      </div>
    </div>
  );
};

export default About;
