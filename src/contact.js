import { FaGithub, FaLinkedin, FaFileDownload } from "react-icons/fa";

function Contact(){
  return (
    <section className="contact-section">

      <div className="contact-container">

        <h1 className="section-title">Contact</h1>

        <p className="contact-subtext">
          I am currently seeking internship and entry-level Software Engineering opportunities.
          Feel free to explore my work or download my resume below.
        </p>

        <div className="contact-actions">

          <a 
            href="./EmmanuelUka.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-action-card"
          >
            <FaFileDownload className="contact-icon"/>
            <h3>View Resume</h3>
          </a>

          <a 
            href="https://github.com/emmanueluka"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-action-card"
          >
            <FaGithub className="contact-icon"/>
            <h3>GitHub</h3>
          </a>

          <a 
            href="https://www.linkedin.com/in/emmanuel-uka-3b7b2b210/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-action-card"
          >
            <FaLinkedin className="contact-icon"/>
            <h3>LinkedIn</h3>
          </a>

        </div>

      </div>

    </section>
  )
}

export default Contact;