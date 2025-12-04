import React from "react";
import { Link } from "react-router-dom";
import { tours } from "../data/tours";

import "../components/ToursCard.css";
import Banner from "../components/Banner";
import image4 from "../assets/image4.jpg";


export default function Categories() {

const categoryImages = {
    Hiking: require("../assets/image1.jpg"),
    Sailing: require("../assets/image2.jpg"),
    Ferrata: require("../assets/image3.jpg"),
    Exotic: require("../assets/image4.jpg"),
    "City tours": require("../assets/image5.jpg"),
};

    const categories = [...new Set(tours.map((c) => c.category))];
    return (
        <>
         <Banner image={image4} title={"Kategorije"} />
         <section className="categories container">
            <h1>Kategorije</h1>
            <div className="grid">
                {categories.map((c) => (
                    <div key={c} className="card">
                    <img src={categoryImages[c]} alt={c} />
                    <div className="card-body">
                        <h3>{c}</h3>
                        <p className="muted">Pregledaj tečajeve iz kategorije: {c}</p>
                        <Link to={`/tours?category=${encodeURIComponent(c)}`} className="btn">{c}</Link>
                        </div>    
                    </div>
                ))}
            </div>
        </section>
        </>
    )
}