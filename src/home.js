import headshot from './assets/E_Uka_F25.jpg'

function Home(){
  return <div className="intro">
            <img src={headshot} className="EmmanuelPng" />
            <div className="intro-text">
                <h1>Hello, my name is </h1>
                <h1>Emmanuel Uka </h1>
                <h1>and I am a Software Developer</h1>
            </div>
        </div>
}

export default Home;