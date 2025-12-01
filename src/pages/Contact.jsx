import React from "react";
import ContactForm from "../components/ContactForm";

export default function Contact() {
    return (
        <section className="contact container">
            <h1>Kontakt</h1>
            <p className="muted">Ispunite formu i javit ćemo Vam se uskoro.</p>
            <ContactForm />
            <h3>Podaci</h3>
            <p>Email: info@travel-agency.example</p>
            <p>Telefon: +385 91 000 0000</p>
            <p>Adresa: Ulica Primjera 1, Zagreb</p>
            <p>Radno vrijeme: Pon–Pet 9–17h</p>
        </section>
    )
}