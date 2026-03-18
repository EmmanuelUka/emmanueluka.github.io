import headshot from './assets/E_Uka_F25.jpg'

function About(){
  return (
    <section className="about-section">

      <div className="about-container">

        <h1 className="section-title">About Me</h1>

        <div className="about-content">

          <div className="about-image">
            <img src={headshot} alt="Emmanuel Uka Headshot" />
          </div>

          <div className="about-card">
            <p>
              Hello! My name is <span className="highlight">Emmanuel Uka</span> and I am a senior Computer Science
              student at Kent State University. My academic experience has primarily
              focused on <span className="highlight">C++ development</span>, where I have built strong
              foundations in problem solving, data structures, and software design.
            </p>

            <p>
              I enjoy challenging myself with complex technical problems and
              continuously learning new technologies. Recently, I have been
              working on <span className="highlight">machine learning</span> projects involving image classification
              using Convolutional Neural Networks, focusing on improving model
              architecture and optimizing training performance.
            </p>

            <p>
              My goal is to contribute to impactful engineering teams where I
              can build scalable software systems, grow as a developer, and apply
              my skills in <span className="highlight">artificial intelligence</span> and full-stack development.
            </p>
          </div>

        </div>

      </div>

    </section>
  )
}

export default About;