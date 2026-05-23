import React from "react";
import { motion } from "framer-motion";
import data from "../data/data.json";

const About = () => {
    const { aboutDescription, aboutImage } = data.data;
    const imagepath = "/images/about/";

    return (
        <section id="about" className="py-5"
            style={{ background: "linear-gradient(135deg, #111118, #1b1b24)", color: "white" }}
        >
            <div className="container">

                {/* Section Title */}
                <motion.h2
                    className="text-center mb-5 fw-bold"
                    style={{ fontSize: "2.5rem" }}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    About Me
                </motion.h2>

                <div className="row align-items-center">

                    {/* Image Section */}
                    <div className="col-md-4 d-flex justify-content-center mb-4 mb-md-0">
                        <motion.img
                            src={imagepath + aboutImage}
                            alt="Profile"
                            className="img-fluid rounded shadow-lg"
                            width={350}
                            height={350}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.7 }}
                            style={{ borderRadius: "20px" }}
                        />
                    </div>

                    {/* Text Section */}
                    <div className="col-md-8">
                        {aboutDescription.map((sentence, index) => (
                            <motion.p
                                key={index}
                                className="mb-3"
                                style={{ fontSize: "18px", lineHeight: "1.7" }}
                                initial={{ opacity: 0, x: 30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 * index }}
                            >
                                {sentence}
                            </motion.p>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
