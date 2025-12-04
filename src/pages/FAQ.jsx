import React from "react";
import Accordion from "../components/Accordion";
import Banner from "../components/Banner";
import image2 from "../assets/image2.jpg";

const faqs = [
    { question: "Kako rezervirati izlet?", answer: "Izlet možete rezervirati preko kontakt forme ili pozivom."},
    { question: "Koje su opcije plaćanj?", answer: "Kartice i bankovne uplate su podržane."},
    { question: "Jesu li izleti sigurni?", answer: "Da. Svi naši izleti organizirani su uz najviše sigurnosne standarde. Voditelji su licencirani i iskusni, a prije svakog izleta dobit ćete jasne upute i preporuke kako bi iskustvo bilo sigurno i ugodno."},
    { question: "Mogu li dobiti račun?", answer: "Naravno, izdajemo i R1 račun po potrebi."},
    { question: "Što ako se izlet otkaže?", answer: "U slučaju otkazivanja izleta zbog lošeg vremena ili drugih nepredviđenih okolnosti, odmah Vas obavještavamo i nudimo nekoliko opcija: novi termin, zamjenski izlet ili povrat novca."},
];

export default function FAQ() {
    return (
        <>
        <Banner image={image2} title={"F.A.Q."} />
        <section className="faq container">
            <h1>Često postavljena pitanja</h1>
            <div style={{marginTop: 12}}>
                {faqs.map((f, i) => (
                    <Accordion key={i} question={f.question} answer={f.answer}/>
                ))}
            </div>
        </section>
        </>
    );
}