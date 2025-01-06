import { assets, serviceData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Services = () => {
  return (
    <motion.div
      id="services"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        Qué tengo para ofrecer
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-center text-5xl font-Ovo"
      >
        Servicios
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
      >
        Con los conocimientos que tengo puedo ofrecer los siguientes servicios
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-auto gap-6 my-10"
      >
        {serviceData.map(({ icon, title, description, link }, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-2 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white"
          >
            <Image src={icon} alt={title} className="w-10" />
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-lg my-4 text-gray-700 dark:text-white"
            >
              {title}
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-sm text-gray-600 leading-5 dark:text-white/80"
            >
              {description}
            </motion.p>

            <motion.a
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              href={link}
              className="flex items-center gap-2 text-sm mt-5"
            >
              Leer más{" "}
              <Image src={assets.right_arrow} alt="flecha" className="w-4" />
            </motion.a>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;
