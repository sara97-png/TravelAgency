import React from "react";
import Banner from "../components/Banner";
import image2 from "../assets/image2.jpg";

export default function About() {
return (
    <>
    <Banner image={image2} title={"O nama"} />
    <section className="about container">
        <h1>O nama</h1>
        <p>
            Travel Agency od 2005. organizira izlete diljem svijeta. Naša misija je pružiti sigurna i nezaboravna putovanja prilagođena svakom putniku.
        </p>
        <p>
            Od planinarenja do egzotičnih destinacija, s nama ste u rukama iskusnih vodiča i provjerenih partnera.
        </p>
        <h2>Naše vrijednosti</h2>
        <ul>
            <li>Sigurnost i pouzdanost</li>
            <li>Pristupačne cijene</li>
            <li>Manje grupe i autentična iskustva</li>
        </ul>
    </section>
    </>
    );
}