import React from "react";
import "./Education.css";

function Education() {
    const educationData = [
        {
            degree: " Pursuing Bachelor of Engineering in Computer Science Engineering",
            institution: "Shri Jaykumar Rawal Institute Of Engineering Dondiacha Dhule",
            University:"Kavayitri Bahinabai Chaudhari North Mahrashtra University, Jalgaon",
            year: "2022 - 2026",
            description: "Focused on Full stack Java Developer."
        },
        {
            degree: "Higher Secondary Certificate (HSC)",
            institution: "AGRG JR. College Shendurni ",
            year: "2020 - 2022",
            description: "Completed studies in the Science stream with a focus on Physics, Chemistry, and Mathematics."
        },
    ];

    return (
        <div className="education-section">
            <h1 className="education-heading" id="Education">Education</h1>
            <div className="education-list">
                {educationData.map((item, index) => (
                    <div key={index} className="education-item">
                        <h2 className="degree">{item.degree}</h2>
                        <h3 className="institution">{item.institution}</h3>
                        <h2 className="university">{item.University}</h2>
                        <p className="year">{item.year}</p>
                        <p className="description">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Education;
