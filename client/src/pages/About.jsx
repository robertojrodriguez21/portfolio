import laptopMan from "../images/laptop_man.png"
import { Link } from "react-router-dom"
import resume from "../documents/Resume - Roberto J. Rodriguez.docx"

const About = () => {
  return (
    <div className="container">
      <br />
      <h1>About Me</h1>
      <hr />
      <div className="clearfix">
        <img src={laptopMan} className="col-3 float-start laptopMan" alt="Laptop Man" />
        <h5>Hello, my name is Roberto J. Rodriguez. I was born and raised in Chicago. Starting high school I knew that I wanted to go into tech, so I took my first Computer Science class. The class went over basic HTML, but I wanted to learn more.</h5>
        <h5>I took a couple classes at a local university but didn't enjoy the way any of the classes were structured. This enabled me to start a bootcamp at General Assembly. I built a couple of applications during my time at General Assembly that I am very proud of.</h5>
        <h5>You can see all of my applications <Link to={'/portfolio'} >here</Link> or hit the 'Portfolio' tab.</h5>
      </div>
      <hr />
      <div className="container">
        <h2>Skill Set</h2>
        <div className="row">
          <div className="container col-lg-4">
            <h4 className="skill-header">Languages</h4>
            <ul>
              <li>Javascript</li>
              <li>HTML/HTML5</li>
              <li>CSS</li>
              <li>Java</li>
              <li>PHP</li>
              <li>Swift</li>
              <li>Python</li>
            </ul>
          </div>
          <div className="container col-lg-8">
            <h4 className="skill-header">Software</h4>
            <ul>
              <li>Node.js</li>
              <li>React</li>
              <li>Express</li>
              <li>Mongoose</li>
              <li>Bootstrap</li>
              <li>PostgresSQL</li>
              <li>Flask</li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <div className="container text-center">
        <div className="container">
          <a href={resume} download>
            <button type="button" className="btn btn-primary btn-lg">Download Resume</button>
          </a>
        </div>
        <br />
      </div>
    </div>
  )
}

export default About