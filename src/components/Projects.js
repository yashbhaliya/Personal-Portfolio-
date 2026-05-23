import React from "react";
import { motion } from "framer-motion";
import data from "../data/data.json";

const Projects = () => {
    const { projects } = data.data;

    const iconpath = "/images/icons/";
    const imgpath = "/images/projects/";

    const githubgrey = "/images/icons/github-grey.png";
    const open = "/images/icons/open.png";

    return (
        <section
            id="projects"
            className="py-5"
            style={{ background: "linear-gradient(135deg, #111118, #1b1b24)", color: "white" }}
        >
            <div className="container">

                {/* Section Title */}
                <motion.h2
                    className="text-center mb-5 fw-bold"
                    style={{ fontSize: "2.5rem" }}
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    Projects
                </motion.h2>

                {/* Project cards */}
                <div className="row g-4">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="col-12"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true }}
                        >
                            <div
                                className="card shadow-lg border-0"
                                style={{
                                    background: "#1f1f29",
                                    borderRadius: "18px",
                                }}
                            >
                                <div
                                    className={`row g-0 d-flex align-items-center ${index % 2 !== 0 ? "flex-row-reverse" : ""
                                        }`}
                                >
                                    {/* IMAGE SECTION */}
                                    <div className="col-lg-5 p-4">

                                        {project.projectImage.length > 1 ? (
                                            // Carousel
                                            <div
                                                id={`carousel${index}`}
                                                className="carousel slide"
                                                data-bs-ride="carousel"
                                            >
                                                <div className="carousel-inner">
                                                    {project.projectImage.map((img, i) => (
                                                        <div
                                                            key={i}
                                                            className={`carousel-item ${i === 0 ? "active" : ""}`}
                                                        >
                                                            {project.liveLink ? (
                                                                <a href={project.liveLink} target="_blank" rel="noreferrer">
                                                                    <img
                                                                        src={imgpath + img}
                                                                        className="d-block w-100 rounded"
                                                                        alt={project.projectName}
                                                                        style={{ maxHeight: "300px", objectFit: "cover" }}
                                                                    />
                                                                </a>
                                                            ) : (
                                                                <img
                                                                    src={imgpath + img}
                                                                    className="d-block w-100 rounded"
                                                                    alt={project.projectName}
                                                                    style={{ maxHeight: "300px", objectFit: "cover" }}
                                                                />
                                                            )}
                                                        </div>
                                                    ))}
                                                </div>

                                                {/* Prev */}
                                                <button
                                                    className="carousel-control-prev"
                                                    type="button"
                                                    data-bs-target={`#carousel${index}`}
                                                    data-bs-slide="prev"
                                                >
                                                    <span className="carousel-control-prev-icon"></span>
                                                </button>

                                                {/* Next */}
                                                <button
                                                    className="carousel-control-next"
                                                    type="button"
                                                    data-bs-target={`#carousel${index}`}
                                                    data-bs-slide="next"
                                                >
                                                    <span className="carousel-control-next-icon"></span>
                                                </button>
                                            </div>
                                        ) : (
                                            // Single Image
                                            project.liveLink ? (
                                                <a href={project.liveLink} target="_blank" rel="noreferrer">
                                                    <img
                                                        src={imgpath + project.projectImage[0]}
                                                        className="img-fluid rounded"
                                                        alt={project.projectName}
                                                        style={{ maxHeight: "300px", objectFit: "cover" }}
                                                    />
                                                </a>
                                            ) : (
                                                <img
                                                    src={imgpath + project.projectImage[0]}
                                                    className="img-fluid rounded"
                                                    alt={project.projectName}
                                                    style={{ maxHeight: "300px", objectFit: "cover" }}
                                                />
                                            )
                                        )}
                                    </div>

                                    {/* TEXT SECTION */}
                                    <div className="col-lg-7 p-4">
                                        <h5 className="text-info">{project.projectType}</h5>

                                        <h3 className="fw-bold mt-2">{project.projectName}</h3>

                                        {/* Tech Stack */}
                                        <div className="d-flex flex-wrap gap-3 my-3">
                                            {project.techStack.map((tech, tIndex) => (
                                                <motion.div
                                                    key={tIndex}
                                                    whileHover={{ scale: 1.15 }}
                                                    className="d-flex align-items-center"
                                                    style={{
                                                        background: "#2a2a38",
                                                        padding: "6px 12px",
                                                        borderRadius: "25px",
                                                    }}
                                                >
                                                    <img
                                                        src={`${iconpath}${tech.image}.png`}
                                                        alt={tech.name}
                                                        style={{
                                                            width: "24px",
                                                            height: "24px",
                                                            marginRight: "8px",
                                                        }}
                                                    />
                                                    <span>{tech.name}</span>
                                                </motion.div>
                                            ))}
                                        </div>

                                        {/* Description */}
                                        <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
                                            {project.description}
                                        </p>

                                        {/* Buttons */}
                                        <div className="mt-3 d-flex gap-3">
                                            {project.githubLink && (
                                                <motion.a
                                                    href={project.githubLink}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    whileHover={{ scale: 1.1 }}
                                                    className="btn btn-outline-light px-4 d-flex align-items-center"
                                                    style={{ borderRadius: "30px" }}
                                                >
                                                    <img
                                                        src={githubgrey}
                                                        alt="GitHub"
                                                        style={{ width: "22px", marginRight: "8px" }}
                                                    />
                                                    Source
                                                </motion.a>
                                            )}

                                            {project.liveLink && (
                                                <motion.a
                                                    href={project.liveLink}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    whileHover={{ scale: 1.1 }}
                                                    className="btn btn-primary px-4 d-flex align-items-center"
                                                    style={{ borderRadius: "30px" }}
                                                >
                                                    <img
                                                        src={open}
                                                        alt="Live App"
                                                        style={{ width: "22px", marginRight: "8px" }}
                                                    />
                                                    Live
                                                </motion.a>
                                            )}
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
