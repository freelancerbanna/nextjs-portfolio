import { motion } from "framer-motion";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import Head from "next/head";
import Image from "next/image";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data";
import { fadeInUp, routeAnimation, stagger } from "../framer";

export default function Home({ endpoint }) {
  return (
    <div className="flex flex-col flex-grow px-6 pt-1">
      <h3 className="my-3 font-medium">
        I am Hasanul Haque Banna as Freelancer Banna offering Fullstack
        Development over 6+ years with the following areas below
      </h3>

      <div
        className="flex-grow p-4 mt-5 bg-gray-300 dark:bg-dark-200"
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >
        <h5 className="pt-1 pb-3 tracking-wider">What I Offer?</h5>
        <motion.div
          className="grid gap-6 lg:grid-cols-2"
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              className="bg-gray-100 rounded-lg dark:bg-dark-500 lg:col-span-1"
              variants={fadeInUp}
              initial="initial"
              animate="animate"
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const res = await fetch(`${process.env.URL}/api/services/`);
  const data = await res.json();
  return {
    props: {
      endpoint: process.env.URL,
    },
  };
};
