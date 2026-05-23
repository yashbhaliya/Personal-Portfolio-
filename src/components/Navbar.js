import React from "react";
import { NavHashLink } from "react-router-hash-link";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import data from "../data/data.json";

function Navbar() {
    const location = useLocation();
    const { fullName, logo, email, socialLinks } = data.data;

    const imagepath = "/images/logo/";

    // Animation for navbar fade-in
    const navVariants = {
        hidden: { y: -40, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
    };

    return (
        <div className="fixed-top">

            {/* Animated Navbar */}
            <motion.nav
                className="navbar navbar-expand-lg"
                style={{ background: "#1D1D23", padding: "16px" }}
                data-bs-theme="dark"
                variants={navVariants}
                initial="hidden"
                animate="visible"
            >
                <div className="container-fluid">

                    {/* Logo + Name */}
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        className="navbar-brand d-flex align-items-center gap-2"
                        href="#"
                    >
                        <img
                            src={imagepath + logo}
                            alt="Logo"
                            style={{ height: "35px" }}
                        />
                        <span className="fw-bold">{fullName}</span>
                    </motion.a>

                    {/* Toggler */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Nav Items */}
                    <div
                        className="collapse navbar-collapse justify-content-end"
                        id="navbarNavAltMarkup"
                    >
                        <div className="navbar-nav text-center">

                            {/* List Items */}
                            {[
                                { link: "#top", label: "Home" },
                                { link: "#about", label: "About" },
                                { link: "#skills", label: "Skills" },
                                { link: "#projects", label: "Projects" },
                                { link: "#contact", label: "Contact" }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ scale: 1.08 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <NavHashLink
                                        className="nav-link mx-2 fw-semibold"
                                        to={item.link}
                                        style={{
                                            color:
                                                `${location.pathname}${location.hash}` ===
                                                    `/${item.link}`
                                                    ? "#0d6efd"
                                                    : "#ffffff",
                                            transition: "0.3s"
                                        }}
                                    >
                                        {item.label}
                                    </NavHashLink>
                                </motion.div>
                            ))}

                            {/* Hire Me Button */}
                            <motion.a
                                href={`mailto:` + email}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="btn btn-primary mx-2"
                                style={{ borderRadius: "6px" }}
                            >
                                Hire Me
                            </motion.a>
                        </div>
                    </div>
                </div>
            </motion.nav>

            {/* Social Icons Left Side */}
            <motion.div
                className="position-fixed d-flex flex-column align-items-center"
                style={{ top: "40%", left: "15px", gap: "18px" }}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0, transition: { duration: 0.7 } }}
            >
                {[
                    { icon: "fab fa-github", link: socialLinks.github },
                    { icon: "fab fa-linkedin-in", link: socialLinks.linkedin },
                    { icon: "fas fa-envelope", link: "mailto:" + email },
                    { icon: "fab fa-instagram", link: socialLinks.instagram }
                ].map((item, index) => (
                    <motion.a
                        href={item.link}
                        target="_blank"
                        key={index}
                        whileHover={{ scale: 1.3 }}
                        className="text-white fs-4"
                    >
                        <i className={item.icon}></i>
                    </motion.a>
                ))}

                <div
                    style={{
                        width: "2px",
                        height: "80px",
                        background: "#fff",
                        marginTop: "10px"
                    }}
                />
            </motion.div>
        </div>
    );
}

export default Navbar;
