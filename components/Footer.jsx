import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Footer = ({ isDarkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="mt-20"
    >
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ fontWeight: "bold", fontSize: 30 }}
          className="w-36 mx-auto mb-2"
        >
          Diego
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-max flex items-center gap-2 mx-auto"
        >
          <Image
            src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
            alt=""
            className="w-6"
          />
          diegomolinai@outlook.com
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6"
      >
        <motion.p
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          © 2025 Diego Molina. Todos los derechos reservados.
        </motion.p>
        <motion.ul
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-10 justify-center mt-4 sm:mt-0"
        >
          <motion.li
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <a target="_blank" href="https://github.com/DiegoMolinai">
              GitHub
            </a>
          </motion.li>
          <motion.li
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a
              target="_blank"
              href="https://www.linkedin.com/in/diego-molina-illanes/"
            >
              LinkedIn
            </a>
          </motion.li>
        </motion.ul>
      </motion.div>
    </motion.div>
  );
};

export default Footer;
