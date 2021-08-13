import { AiFillGithub, AiFillLinkedin, AiFillFacebook } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";
import Image from "next/image";
import { useTheme } from "next-themes";
import { FunctionComponent } from "react";

const Sidebar: FunctionComponent = () => {
  const { theme, setTheme } = useTheme();
  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <div>
      <Image
        width={128}
        height={128}
        className="mx-auto rounded-full"
        src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/d754c10ae0b7d1f6b809b0118055c866-1614285555994/15bd2029-4642-416c-b97d-d9175712780e.jpg"
        alt="user-avatar"
      />

      <h3 className="my-4 text-3xl font-medium tracking-tight font-kaushan">
        <span className="text-green">Freelancer </span>
        Banna
      </h3>
      <p className="px-2 py-1 my-4 bg-gray-200 rounded-full dark:bg-dark-200">
        Fullstack Javascript Developer
      </p>
      <a
        href="/assets/freelancerbanna.pdf"
        download="Freelancer Banna.pdf"
        className="flex items-center justify-center px-2 py-1 my-4 bg-gray-300 rounded-full dark:bg-dark-200"
      >
        <GiTie className="w-6 h-6" /> Download My Resume
      </a>
      {/* Icons */}
      <div className="flex justify-around w-9/12 mx-auto my-5 text-green md:w-full">
        <a href="">
          <AiFillFacebook className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="">
          <AiFillGithub className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="">
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
      </div>
      {/* Adress */}
      <div
        className="py-4 my-4 bg-gray-200 dark:bg-dark-200"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center space-x-2">
          <GoLocation />
          <span>Bogra, Bangladesh</span>
        </div>
        <p className="my-2 text-center">hasanulhaquebanna@gmail.com</p>
        <p className="my-2">+8801612459743</p>
        {/* Button */}
        <button
          className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400 hover:bg-blue-500 foucs:ouline-none"
          onClick={() => window.open("mailto:hasanulhaquebanna@gmail.com")}
        >
          Email Me{" "}
        </button>
        <button
          onClick={changeTheme}
          className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400"
        >
          Toggle UI{" "}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
