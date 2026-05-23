import React from "react";
import data from "../data/data.json";

const Footer = () => {
    const { socialLinks, fullName } = data.data;

    return (
        <footer
            className="text-center py-4 mt-5"
            style={{
                background: "#111118",
                color: "white",
                borderTop: "1px solid rgba(255,255,255,0.1)",
            }}
        >
            <div className="container">

                {/* COPYRIGHT TEXT */}
                <p className="mb-3" style={{ fontSize: "1rem" }}>
                    &copy; {new Date().getFullYear()} — Crafted with ❤️ & ☕ by{" "}
                    <span className="fw-bold">{fullName}</span>
                </p>

                {/* SOCIAL ICONS */}
                <div className="d-flex justify-content-center gap-4 fs-4">

                    {/* LinkedIn */}
                    <a
                        href={socialLinks.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="text-light"
                        style={{ transition: "0.3s" }}
                    >
                        <i className="fab fa-linkedin-in"></i>
                    </a>

                    {/* GitHub */}
                    <a
                        href={socialLinks.github}
                        target="_blank"
                        rel="noreferrer"
                        className="text-light"
                        style={{ transition: "0.3s" }}
                    >
                        <i className="fab fa-github"></i>
                    </a>

                    {/* Instagram */}
                    <a
                        href={socialLinks.instagram}
                        target="_blank"
                        rel="noreferrer"
                        className="text-light"
                        style={{ transition: "0.3s" }}
                    >
                        <i className="fab fa-instagram"></i>
                    </a>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
