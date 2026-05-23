import React from "react";
import { motion } from "framer-motion";
import data from "../data/data.json";

function Skills() {
    const { skills } = data.data;
    const iconpath = "/images/icons/";

    return (
        <section
            id="skills"
            className="py-5"
            style={{ background: "linear-gradient(135deg, #111118, #1b1b24)", color: "white" }}
        >
            <div className="container">

                {/* Title */}
                <motion.h2
                    className="text-center mb-5 fw-bold"
                    style={{ fontSize: "2.5rem" }}
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    Skills
                </motion.h2>

                {/* Skills Categories */}
                <div className="row g-4">
                    {skills.map((category, index) => (
                        <motion.div
                            className="col-md-6 col-lg-4"
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            viewport={{ once: true }}
                        >
                            <div
                                className="p-4 rounded shadow-lg h-100"
                                style={{
                                    background: "#1f1f29",
                                    border: "1px solid #333",
                                    borderRadius: "15px"
                                }}
                            >
                                {/* Category Title */}
                                <h4 className="fw-bold mb-3 text-center">{category.title}</h4>

                                {/* Skills List */}
                                <div className="d-flex flex-wrap gap-3 justify-content-center">
                                    {category.skillname.map((skill, i) => (
                                        <motion.button
                                            key={i}
                                            type="button"
                                            disabled
                                            whileHover={{ scale: 1.1 }}
                                            transition={{ duration: 0.2 }}
                                            className="btn btn-outline-light d-flex align-items-center px-3 py-2"
                                            style={{
                                                borderRadius: "30px",
                                                fontSize: "15px"
                                            }}
                                        >
                                            <img
                                                src={iconpath + skill.image + ".png"}
                                                alt={skill.name}
                                                style={{
                                                    width: "22px",
                                                    height: "22px",
                                                    marginRight: "8px"
                                                }}
                                            />
                                            {skill.name}
                                        </motion.button>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;
