import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "motion/react";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Enviando....");
    const formData = new FormData(event.target);

    formData.append("access_key", "dda7b0f2-67fc-4948-88b8-49857fdd1db7");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Su mensaje ha sido enviado con éxito!");
      event.target.reset();
    } else {
      setResult(
        "Ha ocurrido un error al enviar su mensaje, favor intentar más tarde."
      );
    }
  };

  return (
    <motion.div
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full px-[12%] py-10 scroll-mt-20 bg-[url('/footer-bg-color.png')] bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none"
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        Contáctame!
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-center text-5xl font-Ovo"
      >
        Contacto
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
      >
        Si deseas contactarme o tienes alguna pregunta al respecto de todo lo
        anterior, por favor contáctame mediante el siguiente formulario y me
        pondré en contacto a la brevedad.
      </motion.p>

      <motion.form
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        onSubmit={onSubmit}
        className="max-w-2xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-auto gap-6 mt-10 mb-8"
        >
          <input
            type="text"
            placeholder="Ingresa tu nombre"
            required
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90"
            name="name"
          />
          <input
            type="email"
            placeholder="Ingresa tu correo"
            required
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90"
            name="email"
          />
        </motion.div>
        <motion.textarea
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          rows="6"
          placeholder="Ingresa tu mensaje"
          required
          className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 dark:bg-darkHover/30 dark:border-white/90"
          name="message"
        ></motion.textarea>

        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          type="submit"
          className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover"
        >
          Contactar{" "}
          <Image src={assets.right_arrow_white} alt="" className="w-4" />
        </motion.button>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-4"
        >
          {result}
        </motion.p>
      </motion.form>
    </motion.div>
  );
};

export default Contact;
