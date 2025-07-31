// import React from 'react'
// import './MyWork.css'
// import theme_pattern from '../../assets/theme_pattern.svg'
// import myworkdata from '../../assets/mywork_data'

// const MyWork = () => {
//   return (
//     <div id='projects' className='projects'>
//       <div className="project-title">
//         <h1>My latest work</h1>
//         <img src={theme_pattern} alt="" />
//       </div>
//       <div className="project-container">
//         {myworkdata.map((work, index) => (
//           <div className={`project-card ${index % 2 === 1 ? 'reverse' : ''}`} key={index} data-aos="zoom-in">
//             <div className="project-image">
//               <img src={work.w_img} alt={`project-${index}`} />
//             </div>

//             <div className="project-content">
//               <h2>{work.title}</h2>
//               <p>{work.description}</p>

//               <div className="tech-stack">
//                 {work.techStack.map((tech, i) => (
//                   <span key={i} className="badge">{tech}</span>
//                 ))}
//               </div>

//               <div className="project-buttons">
//                 <a href={work.live} target="_blank" rel="noopener noreferrer" className="btn live">🔗 Live Demo</a>
//                 <a href={work.code} target="_blank" rel="noopener noreferrer" className="btn code"><i className="bi bi-github"></i> Code</a>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default MyWork





import React, { useEffect, useState } from 'react';
import './MyWork.css';
import theme_pattern from '../../assets/theme_pattern.svg';

const MyWork = () => {
  const [projects, setProjects] = useState([]);

 useEffect(() => {
  fetch("https://my-portfolio-backend-k3s2.onrender.com/api/projects")
    .then(res => res.json())
    .then(data => {
      console.log("📦 Project data from backend:", data);
      setProjects(data.default); // ← FIXED: use data.default instead of data
    })
    .catch(err => {
      console.error("❌ Error fetching projects:", err);
    });
}, []);


  return (
    <div id='projects' className='projects'>
      <div className="project-title">
        <h1>My latest work</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="project-container">
        {projects.map((work, index) => (
          <div className={`project-card ${index % 2 === 1 ? 'reverse' : ''}`} key={index} data-aos="zoom-in">
            <div className="project-image">
              <img src={work.w_img} alt={`project-${index}`} />
            </div>

            <div className="project-content">
              <h2>{work.title}</h2>
              <p>{work.description}</p>

              <div className="tech-stack">
                {work.techStack.map((tech, i) => (
                  <span key={i} className="badge">{tech}</span>
                ))}
              </div>

              <div className="project-buttons">
                <a href={work.live} target="_blank" rel="noopener noreferrer" className="btn live">🔗 Live Demo</a>
                <a href={work.code} target="_blank" rel="noopener noreferrer" className="btn code">💻 Code</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyWork;
