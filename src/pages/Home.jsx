import React from "react";
import {Link} from 'react-router-dom';

import {tours} from "../data/tours";

export default function Home() {
    const featured = [...tours].slice(0, 3) 

    return (
        <section className="home">
            <div className="hero container">
                <h1>Dobrodošli u Travel Agency</h1>
                <p>Najbolja ponuda izleta i avantura!</p>
            </div>
            <div className="container" style={{display: "flex", gap: 10, marginTop: 12}}>
            <Link to="/courses" className="btn">Pogledaj izlete</Link>
            <Link to="/contact" className="btn" style={{background: "#087f5b"}}>Kontaktirajte nas</Link>
        </div>
        <div className="container">
        <h2>Izdvojeni izleti</h2>
        <div className="grid">
            {featured.map(c => (
                <p>{c.title} {c.category}</p>
            ))}
        </div> 
        </div>
        </section>
    )
}
