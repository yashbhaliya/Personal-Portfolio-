import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import data from "../data/data.json";

const Hero = () => {
    const { fullName, titleArray, subTitle, resumeLink } = data.data;

    return (
        <section
            style={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                background: "linear-gradient(135deg, #1E1E28, #111118)",
                color: "white",
                paddingTop: "80px"
            }}
        >
            <div className="container text-center">

                {/* Animated container */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                >

                    {/* Greeting */}
                    <motion.h4
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="fw-light"
                    >
                        Hello! 👋 My name is
                    </motion.h4>

                    {/* Name */}
                    <motion.h1
                        className="fw-bold mt-2"
                        style={{ fontSize: "3.2rem" }}
                        initial={{ scale: 0.85 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        {fullName}
                    </motion.h1>

                    {/* Typewriter */}
                    <motion.h3
                        className="text-info mt-3 mb-3"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        <Typewriter
                            words={titleArray}
                            loop={0}
                            cursor
                            cursorStyle="|"
                            typeSpeed={40}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </motion.h3>

                    {/* Subtitle */}
                    <motion.p
                        className="mx-auto"
                        style={{ maxWidth: "700px", fontSize: "18px", lineHeight: "1.6" }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                    >
                        {subTitle}
                    </motion.p>

                    {/* Resume Button */}
                    <motion.a
                        href={resumeLink}
                        target="_blank"
                        rel="noreferrer"
                        whileHover={{ scale: 1.1, boxShadow: "0px 0px 12px rgba(255,255,255,0.4)" }}
                        whileTap={{ scale: 0.95 }}
                        className="btn btn-outline-light btn-lg px-5 mt-3"
                        style={{ borderRadius: "30px" }}
                    >
                        See Resume
                    </motion.a>

                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
