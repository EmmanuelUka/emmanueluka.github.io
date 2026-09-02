import ants from './assets/ants.png'
import germjourney from './assets/germjourney.png'
import ts from './assets/tslogo.png'
import py from './assets/pylogo.png'
import flask from './assets/flasklogo.webp'
import cpp from './assets/cpp-logo.png'
import js from './assets/js.png'
import react from './assets/reactlogo.webp'
import derm from './assets/derm1.jpeg'


function Projects(){
  return(
    <>
        <div className="projects-page">
            <h2 className="page-title">My Projects</h2>
{/*https://emmanueluka.github.io/Travel-Health-Advisory/ */}
{/*https://ants.webtoys.dev/ */}
            <div className="projects-grid">


                <div className="project-card">
                    <a href="https://skin-lesion-segmentatio-model-bu6aycqbpd65wuzuz2gbsu.streamlit.app/" target="_blank" rel="noopener noreferrer">
                        <img src={derm} alt="Project 1" className="project-image"/>
                        <span className="link-indicator">🔗</span> {/* optional visual indicator */}
                    </a>
                    <h3 className="project-title">Skin Segmentation Research</h3>
                    <p className="project-description">DSAT is a deep learning model that analyzes dermoscopic skin lesion images and produces a confidence map showing where lesion boundaries are and how certain the model is about them. Unlike standard segmentation models that output a hard yes-or-no boundary, DSAT is trained on annotations from 16 clinical experts and learns to express uncertainty at contested boundaries — the same regions where human dermatologists themselves disagree.</p>
                </div>

                <div className="project-card">
                    <a href="https://ants.webtoys.dev/://emmanueluka.github.io/Travel-Health-Advisory/" target="_blank" rel="noopener noreferrer">
                        <img src={ants} alt="Project 2" className="project-image"/>
                        <span className="link-indicator">🔗</span> {/* optional visual indicator */}
                    </a>
                    <h3 className="project-title">ANTS!!!</h3>
                    <p className="project-description">Collaborated in a 9-member Agile Scrum team over 12 weeks to build an interactive ant colony simulation game using p5.js, implementing core gameplay features while maintaining automated tests and CI pipelines with GitHub Actions to ensure code quality.</p>
                </div>


                <div className="project-card">
                    <a href="https://emmanueluka.github.io/Travel-Health-Advisory/" target="_blank" rel="noopener noreferrer">
                        <img src={germjourney} alt="Project 3" className="project-image"/>
                        <span className="link-indicator">🔗</span> {/* optional visual indicator */}
                    </a>
                    <h3 className="project-title">Travel Health Advisory</h3>
                    <p className="project-description">Built an interactive map-based tourist health dashboard that visualizes each country’s prevalent diseases, air-pollution mortality rates, and sanitation levels, incorporating a risk-calculation system to help travelers make informed decisions.</p>
                </div>


                
            
            </div>

            <div className="tech-logos">
                <img src={js} alt="JavaScript" className="tech-logo"/>
                <img src={cpp} alt="C++" className="tech-logo"/>
                <img src={ts} alt="Typescript" className="tech-logo"/>
                <img src={py} alt="Python" className="tech-logo"/>
                <img src={react} alt="React" className="tech-logo"/>
                <img src={flask} alt="Flask" className="tech-logo"/>

            </div>
        </div>
    </>
  );


}

export default Projects;