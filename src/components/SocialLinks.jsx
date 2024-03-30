import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { IoIosDocument } from "react-icons/io";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/vipultapare/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/vipultapare",
    },
    {
      id: 3,
      child: (
        <>
          Mail <BiLogoGmail size={30} />
        </>
      ),
      href: "mailto:vipultapare12@gmail.com",
    },

    {
      id: 4,
      child: (
        <>
          Resume <IoIosDocument size={30} />
        </>
      ),
      href: "/resume.pdf",
      style: "rounded-tr-md",
      download: true,
    },
  ];
  return (
    <div className=" hidden  lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        <li
          className={
            "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] bg-gray-500 hover:ml-[-10px]  hover:rounded-md duration-300 rounded-tr-md "
          }
        >
          <a
            href="https://www.linkedin.com/in/vipultapare/"
            className="flex justify-between items-center w-full text-white"
            //download={download}
            target="_blank"
            rel="noreferrer"
          >
            <>
              LinkedIn <FaLinkedin size={30} />
            </>
          </a>
        </li>
        <li
          className={
            "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] bg-gray-500 hover:ml-[-10px]  hover:rounded-md duration-300  "
          }
        >
          <a
            href="https://github.com/vipultapare"
            className="flex justify-between items-center w-full text-white"
            //download={download}
            target="_blank"
            rel="noreferrer"
          >
            <>
              GitHub <FaGithub size={30} />
            </>
          </a>
        </li>
        <li
          className={
            "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] bg-gray-500 rounded-br-md hover:ml-[-10px]  hover:rounded-md duration-300  "
          }
        >
          <a
            href="mailto:vipultapare12@gmail.com"
            className="flex justify-between items-center w-full text-white"
            //download={download}
            target="_blank"
            rel="noreferrer"
          >
            <>
              Mail <BiLogoGmail size={30} />
            </>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialLinks;
