import React from "react";
import "./Accordion.css";

export default function Accordion({index,  question, answer, openIndex, setOpenIndex}){
      
    const isOpen = openIndex === index;

     const toggle = () => {
        setOpenIndex(isOpen ? null : index); 
        // ako je već otvoren → zatvori
        // ako nije → otvori ovaj i zatvori ostale
    };

    return (
        <div className="accordion-item">
            <button type="button" className="accordion-title" onClick={toggle}>
              <span>{question}</span>
              <span>{isOpen ? " ➖" : " ➕"}</span>
            </button>
            {isOpen && ( <div className="accordion-content">{answer}</div>)}
        </div>
    );
}