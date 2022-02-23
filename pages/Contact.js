import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
const Contact = () => {
  return (
    <div className=" w-full flex items-center justify-center p-10 md:p-20">
      <div className="text-lg w-full sm:w-3/4 bg-opacity-5 bg-white p-10 sm:p-24 my-5 rounded-lg shadow-lg mb-10">
        <h1 className="text-4xl font-bold leading-10 text-transparent bg-clip-text bg-gradient-to-tr from-pink to-orange filter drop-shadow-lg border-pink pb-4 border-b-2">
          Contact Me
        </h1>
        <ul className="w-full">
          <li className="text-lg flex pt-4">
            <div className="pr-2">
              <FontAwesomeIcon icon={faGithub} />
            </div>
            <a href={"https://github.com/thezaeemaanwar"} className="break-all">
              github.com/thezaeemaanwar
            </a>
          </li>
          <li className="text-lg flex pt-4">
            <div className="pr-2">
              <FontAwesomeIcon icon={faLinkedin} />
            </div>
            <a
              href={"https://www.linkedin.com/in/thezaeemaanwar/"}
              className="break-all"
            >
              www.linkedin.com/in/thezaeemaanwar
            </a>
          </li>
          <li className="text-lg flex pt-4">
            <div className="pr-2">
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <a href={"mailto:thezaeemaanwar@gmail.com"} className="break-all">
              thezaeemaanwar@gmail.com
            </a>
          </li>
        </ul>
        <div
          className={`fixed bottom-10 right-10 animate-pulse
        text-6xl h-48 w-48 bg-gradient-to-r from-pink to-orange shadow-lg rounded-full`}
        ></div>
        <div
          className={`fixed bottom-7 right-10 animate-bounce
            text-6xl h-24 w-24 bg-gradient-to-r from-pink to-orange shadow-lg rounded-full`}
        ></div>
      </div>
    </div>
  );
};

export default Contact;
