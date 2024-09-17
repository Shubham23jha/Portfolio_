// src/Skills.jsx

import skilldata from '../Data/skill.json';
import React from 'react';
import '../styles/Skills.css';

const Skills = () => {
    return (
        <div className="skills-container">
            {Object.entries(skilldata).map(([category, skills]) => (
                <div className="skill-card" key={category}>
                    <h2>{category}</h2>
                    <div className="icon-container">
                        {skills.map(skill => (
                            <div className="icon" key={skill.name}>
                                <img src={skill.logo} alt={skill.name} title={skill.name} />
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Skills;
