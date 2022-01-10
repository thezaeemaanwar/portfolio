import { makePublicRouterInstance } from "next/dist/client/router";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

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
  }, []);

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
            <div className="w-2/3 bg-white bg-opacity-10 h-full rounded-lg shadow-xl">
              <div className="text-9xl font-extrabold filter drop-shadow-xl">
                <Icon icon={faCode} />
              </div>
            </div>
          </div>
          <div className="text-6xl text-right">
            <h1>Hello, I am</h1>
            <h1 className=" text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-pink to-orange filter drop-shadow-lg">
              Zaeema <br />
              Anwar
            </h1>
            <h2 className="text-2xl">Web Developer & Graphic Designer</h2>
          </div>
        </div>
        <div className="flex w-full"></div>
      </div>
    </div>
  );
}
