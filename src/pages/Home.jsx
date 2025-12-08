import React from "react";
import {Link} from 'react-router-dom';
import ToursCard from "../components/ToursCard";
import {tours} from "../data/tours";
import Banner from "../components/Banner";
import image1 from "../assets/image1.jpg";

export default function Home() {
    const featured = [...tours].slice(0, 3) 

    return (
        <>
        <Banner image={image1} title={"Naslovnica"} />
        <section className="home">
            <div className="hero container">
                <h1>Dobrodošli u Travel Agency!</h1>
                <p>Najbolja ponuda izleta i avantura!</p>
            </div>
            <div className="container" style={{display: "flex", gap: 10, marginTop: 12}}>
            <Link to="/tours" className="btn">Pogledaj izlete</Link>
            <Link to="/contact" className="btn" style={{background: "#1e784bff"}}>Kontaktirajte nas</Link>
        </div>
        <div className="container">
        <h2>Izdvojeni izleti</h2>
        <div className="grid">
            {featured.map(c => (
                <ToursCard key={c.id} tours={c} />
            ))}
        </div> 
        </div>
        </section>
        </>
    );
}
