import { FunctionComponent, useState } from "react";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { Iproject } from "../type";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, stagger } from "../framer";

const ProjectCard: FunctionComponent<{
  project: Iproject;
  showDetail: number | null;
  setShowDetail: (id: null | number) => void;
}> = ({
  project: {
    name,
    category,
    deployed_url,
    description,
    github_url,
    image_path,
    key_tags,
    id,
  },
  showDetail,
  setShowDetail,
}) => {
  return (
    <div>
      <Image
        className="cursor-pointer"
        width={300}
        height={150}
        src={image_path}
        alt={name}
        onClick={() => setShowDetail(id)}
      />
      <p className="pt-3 my-2 font-bold font-robotoSlab lg:text-xl">{name}</p>

      {showDetail === id && (
        <div className="absolute top-0 right-0 z-10 grid w-full h-auto p-2 text-black bg-gray-200 md:grid-cols-2 gap-x-12 dark:bg-dark-200 dark:text-white font-robotoSlab">
          <motion.div variants={stagger} initial="initial" animate="animate">
            <motion.div variants={fadeInUp}>
              <Image width={300} height={150} src={image_path} alt={name} />
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="flex justify-center my-4 space-x-4"
            >
              <a
                href={github_url}
                className="flex items-center px-4 py-2 space-x-4 text-lg bg-gray-200 dark:bg-dark-300"
              >
                <AiFillGithub />
                <span>Github</span>
              </a>
              <a
                onClick={() => window.open(deployed_url, "_blank")}
                className="flex items-center px-4 py-2 space-x-4 text-lg bg-gray-200 dark:bg-dark-300"
              >
                <AiFillProject />
                <span>Project</span>
              </a>
            </motion.div>
          </motion.div>

          <motion.div variants={stagger} initial="initial" animate="animate">
            <motion.h2
              variants={fadeInUp}
              className="mb-3 text-xl font-medium md:text-2xl"
            >
              {name}
            </motion.h2>
            <motion.h3 variants={fadeInUp} className="mb-3 font-medium">
              {description}
            </motion.h3>
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap mt-5 space-x-4 text-sm tracking-wider"
            >
              {key_tags.map((items) => (
                <span
                  className="px-2 py-1 my-1 bg-gray-200 rounded-sm lg:text-lg dark:bg-dark-300"
                  key={items}
                >
                  {items}
                </span>
              ))}
            </motion.div>
          </motion.div>
          <button
            className="absolute p-1 bg-gray-200 top-3 right-3 focus:outline-none dark:bg-dark-200"
            onClick={() => setShowDetail(null)}
          >
            <MdClose size={30} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
