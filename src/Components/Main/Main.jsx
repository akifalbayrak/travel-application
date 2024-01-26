import React,{useEffect} from "react";
import "./main.css";
import { CiLocationOn } from "react-icons/ci";
import { FaClipboardList } from "react-icons/fa6";
import Aos, { init } from 'aos';
import 'aos/dist/aos.css'
const Data = [
    {
        id: 1,
        imgSrc: "/Assets/istanbul.jpeg",
        desTitle: "Turkey",
        location: "Istanbul",
        grade: "Culturel Relax",
        fees: "$300",
        description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur officiis inventore sapiente modi quis totam?",
    },
    {
        id: 2,
        imgSrc: "/Assets/paris.jpeg",
        desTitle: "France",
        location: "Paris",
        grade: "Historical Adventure",
        fees: "$400",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur officiis inventore sapiente modi quis totam?",
    },
    {
        id: 3,
        imgSrc: "/Assets/tokyo.jpeg",
        desTitle: "Japan",
        location: "Tokyo",
        grade: "Modern Exploration",
        fees: "$500",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur officiis inventore sapiente modi quis totam?",
    },
    {
        id: 4,
        imgSrc: "/Assets/rome.jpeg",
        desTitle: "Italy",
        location: "Rome",
        grade: "Artistic Journey",
        fees: "$350",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur officiis inventore sapiente modi quis totam?",
    },
    {
        id: 5,
        imgSrc: "/Assets/sydney.jpeg",
        desTitle: "Australia",
        location: "Sydney",
        grade: "Nature Retreat",
        fees: "$450",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur officiis inventore sapiente modi quis totam?",
    }
];
const Main = () => {
    useEffect(()=>{
        Aos.init({duration:2000})
    },[])
    return (
        <section className="main container section">
            <div className="secTitle">
                <h3 data-aos="fade-right" className="title">Most visited destinations</h3>
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
                            <div key={id} data-aos="fade-up" className="singleDestination">
                                <div className="imageDiv">
                                    <img src={imgSrc} alt={desTitle} />
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
