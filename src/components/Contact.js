import React from "react";
import { motion } from "framer-motion";
import data from "../data/data.json";

const Contact = () => {
    const { contactParagraph, email } = data.data;

    return (
        <section
            id="contact"
            className="py-5"
            style={{
                background: "linear-gradient(135deg, #111118, #1b1b24)",
                color: "white",
            }}
        >
            <div className="container">

                {/* Title */}
                <motion.h2
                    className="text-center fw-bold mb-4"
                    style={{ fontSize: "2.4rem" }}
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    Contact
                </motion.h2>

                {/* Contact Card */}
                <motion.div
                    className="p-4 p-md-5 rounded-4 mx-auto text-center shadow-lg"
                    style={{
                        maxWidth: "700px",
                        background: "rgba(255, 255, 255, 0.06)",
                        backdropFilter: "blur(12px)",
                        border: "1px solid rgba(255,255,255,0.15)",
                    }}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <p className="lead mb-3">{contactParagraph}</p>

                    <p className="fs-5">
                        Email me at{" "}
                        <a
                            href={`mailto:${email}`}
                            className="fw-bold"
                            style={{
                                color: "#4da8ff",
                                textDecoration: "underline",
                            }}
                        >
                            {email}
                        </a>{" "}
                        and let’s connect!
                    </p>

                    <a
                        href={`mailto:${email}`}
                        className="btn btn-light btn-lg mt-3 px-4 py-2 rounded-pill fw-semibold"
                    >
                        Send Email
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
