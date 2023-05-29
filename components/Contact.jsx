"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Sending");
    let data = {
      name,
      email,
      message,
      subject,
    };
    await fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log("Response received!");
      if (res.status === 200) {
        console.log("Response succeeded!");
        setSubmitted(true);
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      }
    });
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10
      justify-evenly mx-auto items-center"
    >
      <h3
        className="absolute top-24 uppercase tracking-[20px] text-gray-500
       text-2xl"
      >
        Contact
      </h3>
      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          I hope you enjoyed!{" "}
          <span className="decoration-primary/50 underline underline-offset-4">
            Lets Talk
          </span>
        </h4>
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
          className=" pt-10 flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex space-x-2">
            <input
              onChange={(e) => {
                setName(e.target.value);
              }}
              value={name}
              placeholder="Name"
              className="contactInput"
              type="text"
            />
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
              placeholder="Email"
              className="contactInput"
              type="email"
            />
          </div>
          <input
            onChange={(e) => {
              setSubject(e.target.value);
            }}
            value={subject}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />
          <textarea
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            value={message}
            placeholder="Message"
            className="contactInput"
          />
          <button
            type="submit"
            className="bg-primary/50 py-5 px-10 border-2 border-transparent rounded-md text-light text-xl font-bold
             hover:bg-dark hover:text-primary/50 hover:border-2 hover:border-primary/50
             ease-in-out transition-colors duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;
