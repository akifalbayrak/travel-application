import React, { useEffect } from "react";
import "./footer.css";
import { FiSend } from "react-icons/fi";
import { MdOutlineTravelExplore } from "react-icons/md";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";

import Aos, { init } from "aos";
import "aos/dist/aos.css";

const Footer = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return (
        <section className="footer">
            <div className="videoDiv">
                <video
                    src="/Assets/bg2.mp4"
                    loop
                    autoPlay
                    muted
                    type="video/mp4"></video>
            </div>
            <div className="secContent container">
                <div className="contactDiv flex">
                    <div data-aos="fade-up" className="text">
                        <small>KEEP IN TOUCH</small>
                        <h2>Travel with us</h2>
                    </div>
                    <div className="inputDiv flex">
                        <input
                            data-aos="fade-up"
                            type="text"
                            placeholder="Enter Email Adress"
                        />
                        <button
                            data-aos="fade-up"
                            className="btn flex"
                            type="submit">
                            Send <FiSend className="icon" />
                        </button>
                    </div>
                </div>
                <div className="footerCard flex">
                    <div className="footerIntro flex">
                        <div className="logoDiv">
                            <a href="" className="logo flex">
                                <MdOutlineTravelExplore className="icon" />{" "}
                                Information
                            </a>
                        </div>
                        <div data-aos="fade-up" className="footerParagraph">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Atque aliquam quas perspiciatis quae quisquam
                            dolor.
                        </div>
                        <div data-aos="fade-up" className="footerSocials flex">
                            <AiOutlineTwitter className="icon" />
                            <AiFillYoutube className="icon" />
                            <AiFillInstagram className="icon" />
                            <FaTripadvisor className="icon" />
                        </div>
                    </div>
                    <div className="footerLinks grid">
                        {/* group one */}
                        <div
                            data-aos="fade-up"
                            data-aos-duration="5000"
                            className="linkGroup">
                            <span className="groupTitle">OUR AGENCY</span>
                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Services
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Insurance
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Agency
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Tourism
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Payment
                            </li>
                        </div>
                        {/* group two */}
                        <div
                            data-aos="fade-up"
                            data-aos-duration="4000"
                            className="linkGroup">
                            <span className="groupTitle">PARTNERS</span>
                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Bookings
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Rentcars
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                HostelWorld
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Trivago
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                TripAdvisor
                            </li>
                        </div>
                        {/* group three */}
                        <div
                            data-aos="fade-up"
                            data-aos-duration="3000"
                            className="linkGroup">
                            <span className="groupTitle">LAST MINUTE</span>
                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Istanbul
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                London
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                California
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Indonesia
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Europe
                            </li>
                        </div>
                        <div className="footerDiv flex">
                            <small>github.com/akifalbayrak</small>
                            <small>COPYRIGHTS RESERVED - ALBAYRAK 2024</small>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;
