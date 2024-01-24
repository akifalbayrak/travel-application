import React from "react";
import "./home.css";
import video from "../Assets/video.mp4";
import { IoLocation } from "react-icons/io5";
import { FaFilter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Home = () => {
    return (
        <section className="home">
            <div className="overlay"></div>
            <video src={video} muted autoPlay loop type="video/mp4"></video>
            <div className="homeContent container">
                <div className="textDiv">
                    <span className="smallText">Our Packages</span>
                    <h1 className="homeTitle">Search your Holiday</h1>
                </div>
                <div className="cardDiv grid">
                    <div className="destinationInput">
                        <label htmlFor="city">Search your destination:</label>
                        <div className="input flex">
                            <input
                                type="text"
                                placeholder="Enter name here ..."
                            />
                            <IoLocation className="icon" />
                        </div>
                    </div>
                    <div className="dateInput">
                        <label htmlFor="date">Select your date:</label>
                        <div className="input flex">
                            <input type="date" />
                        </div>
                    </div>
                    <div className="dateInput">
                        <div className="label_total flex">
                            <label htmlFor="price">Max price:</label>
                            <h3 className="total">$5000</h3>
                        </div>
                        <div className="input flex">
                            <input type="range" max="5000" min="1000" />
                        </div>
                    </div>
                    <div className="searchOptions flex">
                        <FaFilter className="icon" />
                        <span>More Filters</span>
                    </div>
                </div>
                <div className="homeFooterIcons flex">
                    <div className="rightIcons">
                        <FaInstagram className="icon" />
                        <FaTwitter className="icon" />
                    </div>
                    <div className="leftIcons">
                    <FaGithub className="icon" />

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
