import { makePublicRouterInstance } from "next/dist/client/router";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faCodeBranch,
  faDesktop,
} from "@fortawesome/free-solid-svg-icons";
import {
  faCss3,
  faNode,
  faJsSquare,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    let id = setInterval(() => {
      savedCallback.current();
    }, delay);
    return () => clearInterval(id);
  }, [delay]);
}
export default function Home() {
  const [position, setPosition] = useState({ x: 2, y: 3 });
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    setOpacity(100);
  }, [setOpacity]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const height = window.innerHeight,
        yScroll = window.scrollY,
        totalHeight = document.body.offsetHeight;
      const percent = (15 * yScroll) / (totalHeight - height);
      setPosition({ x: percent, y: 3 - Math.sin(percent) });
    });
  }, [setPosition]);

  return (
    <div className="w-full flex items-center justify-center">
      <div
        className={`opacity-${opacity} transition-opacity ease-in duration-1000 fixed 
          text-6xl h-48 w-48 bg-gradient-to-r from-pink to-orange shadow-lg rounded-full`}
        style={{
          top: `${position.y * 100}px`,
          left: `${position.x * 100}px`,
        }}
      ></div>
      <div className="w-10/12">
        <div
          className={`flex items-center w-full justify-between opacity-${opacity} transition-opacity ease-in duration-2000`}
          style={{ height: "calc(100vh - 56px)" }}
        >
          <div className="w-1/2  h-3/4 flex justify-center items-center">
            <div className="w-2/3 bg-white bg-opacity-5 h-full rounded-lg shadow-xl backdrop-filter backdrop-blur-sm z-10"></div>
            <div className="z-20 absolute grid grid-cols-3 grid-rows-4">
              <div className="text-9xl font-extrabold filter drop-shadow-xl col-span-2 col-start-2">
                <Icon icon={faCode} />
              </div>
              <div className="text-7xl font-extrabold filter drop-shadow-xl col-start-1">
                <Icon icon={faJsSquare} />
              </div>
              <div className="text-8xl font-extrabold filter drop-shadow-xl col-start-3 place-self-end">
                <Icon icon={faNode} />
              </div>
              <div className="text-8xl font-extrabold filter drop-shadow-xl col-start-2 place-self-start">
                <Icon icon={faGithub} />
              </div>
              <div className="text-4xl font-extrabold filter drop-shadow-xl col-start-3 place-self-end">
                <Icon icon={faDesktop} />
              </div>
              <div className="text-7xl font-extrabold filter drop-shadow-xl col-start-1">
                <Icon icon={faCss3} />
              </div>
              <div className="text-6xl font-extrabold filter drop-shadow-xl col-start-3">
                <Icon icon={faCodeBranch} />
              </div>
            </div>
          </div>
          <div className="text-6xl text-right">
            <h1>Hello, I am</h1>
            <h1 className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-pink to-orange filter drop-shadow-lg">
              Zaeema <br />
              Anwar
            </h1>
            <h2 className="text-2xl">Web Developer & Graphic Designer</h2>
          </div>
        </div>
        <div className="flex flex-col w-full">
          <div className="py-10">
            <div className="text-4xl text-transparent bg-clip-text bg-gradient-to-tr from-pink to-orange filter drop-shadow-lg pb-2 pr-6 border-pink border-b-2">
              Current Placements
            </div>
            <ul className="py-2">
              <li className="text-xl leading-10">
                React.js Internee at{" "}
                <a href="https://techno-soft.com/" className="border-b-2">
                  Techno-soft Solutions
                </a>
              </li>
              <li className="text-xl leading-10">
                Front-end Web Developer at{" "}
                <a
                  href="https://en-gb.facebook.com/sorscard"
                  className="border-b-2"
                >
                  SORS Card
                </a>
              </li>
              <li className="text-xl leading-10">
                Graphic Design Lead at{" "}
                <a href="https://kaarekamal.org/" className="border-b-2">
                  Kaar-e-Kamal Welfare Organization
                </a>
              </li>
            </ul>
          </div>
          <div className="py-10">
            <div className="text-4xl text-transparent bg-clip-text bg-gradient-to-tr from-pink to-orange filter drop-shadow-lg pb-2 pr-6 border-pink border-b-2">
              Previous Placements
            </div>
            <ul className="py-2">
              <li className="text-xl leading-10">
                React.js Internee at{" "}
                <a href="https://www.mavenstcl.com/" className="border-b-2">
                  Mavens Technologies Consulting & Logistics Inc (USA)
                </a>
              </li>
            </ul>
          </div>
          <div className="py-10">
            <div className="text-4xl text-transparent bg-clip-text bg-gradient-to-tr from-pink to-orange filter drop-shadow-lg pb-2 pr-6 border-pink border-b-2">
              Educational Background
            </div>
            <ul className="py-2">
              <li className="text-xl leading-10">
                Bachelor in Computer Science from{" "}
                <a href="https://uet.edu.pk/" className="border-b-2">
                  University of Engineering and Technology, Lahore.
                </a>
              </li>
              <li className="text-xl leading-10">
                Pre-Engineering from{" "}
                <a href="https://pgc.edu/" className="border-b-2">
                  Punjab Group of Colleges
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
