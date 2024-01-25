import React from "react";
import "./main.css";
import photo from "../Assets/photo.jpg";
import { CiLocationOn } from "react-icons/ci";
import { FaClipboardList } from "react-icons/fa6";

const Data = [
    {
        id: 1,
        imgSrc: photo,
        desTitle: "Turkey",
        location: "Istanbul",
        grade: "Culturel Relax",
        fees: "$300",
        description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur officiis inventore sapiente modi quis totam?",
    },
    {
        id: 2,
        imgSrc: photo,
        desTitle: "France",
        location: "Paris",
        grade: "Historical Adventure",
        fees: "$400",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur officiis inventore sapiente modi quis totam?",
    },
    {
        id: 3,
        imgSrc: photo,
        desTitle: "Japan",
        location: "Tokyo",
        grade: "Modern Exploration",
        fees: "$500",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur officiis inventore sapiente modi quis totam?",
    },
    {
        id: 4,
        imgSrc: photo,
        desTitle: "Italy",
        location: "Rome",
        grade: "Artistic Journey",
        fees: "$350",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur officiis inventore sapiente modi quis totam?",
    },
    {
        id: 5,
        imgSrc: photo,
        desTitle: "Australia",
        location: "Sydney",
        grade: "Nature Retreat",
        fees: "$450",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur officiis inventore sapiente modi quis totam?",
    }
];
const Main = () => {
    return (
        <section className="main container section">
            <div className="secTitle">
                <h3 className="title">Most visited destinations</h3>
            </div>
            <div className="secContent grid">
                {Data.map(
                    ({
                        id,
                        imgSrc,
                        desTitle,
                        location,
                        grade,
                        fees,
                        description,
                    }) => {
                        return (
                            <div key={id} className="singleDestination">
                                <div className="imageDiv">
                                    <img src={photo} alt={desTitle} />
                                </div>
                                <div className="cardInfo">
                                    <h4 className="desTitle">{desTitle}</h4>
                                    <span className="continent flex">
                                        <CiLocationOn className="icon" />
                                        <span className="name">{location}</span>
                                    </span>
                                    <div className="fees flex">
                                        <div className="grade">
                                            <span>
                                                {grade}
                                                <small>+1</small>
                                            </span>
                                        </div>
                                        <div className="price">
                                            <h5>{fees}</h5>
                                        </div>
                                    </div>
                                    <div className="desc">
                                        <p>{description}</p>
                                    </div>
                                    <button className="btn flex">
                                        DETAILS
                                        <FaClipboardList className="icon" />
                                    </button>
                                </div>
                            </div>
                        );
                    }
                )}
            </div>
        </section>
    );
};

export default Main;
