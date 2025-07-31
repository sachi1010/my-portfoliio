
import React from 'react';
import theme from '../../assets/theme_pattern.svg';
import './Skills.css';

const Skills = () => {
  const skillSetLeft = [
    { name: 'HTML & CSS', level: '100%' },
    { name: 'JavaScript', level: '85%' },
    { name: 'React Js', level: '95%' },
    { name: 'Bootstrap', level: '100%' },
  ];

  const skillSetRight = [
    { name: 'Node Js', level: '75%' },
    { name: 'Express Js', level: '80%' },
    { name: 'Mongo DB', level: '100%' },
    { name: 'Git', level: '100%' },
  ];

  const renderSkills = (skills) =>
    skills.map((skill, index) => (
      <div className="skills-list" key={index}>
        <p>{skill.name}</p>
        <div className="skill-bar">
          <div className="filled-bar" style={{ width: skill.level }} data-aos="slide-right"></div>
        </div>
      </div>
    ));

  return (
    <div className="skills" id='skills'>
      <div className="skill-title" data-aos="flip-right">
        <h1>Skills</h1>
        <img src={theme} alt="Theme decoration" />
      </div>
      <div className="skill-section">
        <div className="skill-left-container">{renderSkills(skillSetLeft)}</div>
        <div className="skill-right-container">{renderSkills(skillSetRight)}</div>
      </div>
    </div>
  );
};

export default Skills;
