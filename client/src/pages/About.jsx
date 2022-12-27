import laptopMan from "../images/laptop_man.png"
import { Link } from "react-router-dom"
import resume from "../documents/Resume - Roberto J. Rodriguez.docx"

const About = () => {
  return (
    <div className="container">
      <br />
      <h1>A little about me ...</h1>
      <div className="clearfix">
        <img src={laptopMan} className="col-3 float-start laptopMan" alt="Laptop Man" />
        <h5>Hello, my name is Roberto J. Rodriguez. I was born and raised in Chicago. Starting high school I knew that I wanted to go into tech, so I took my first Computer Science class.</h5>
        <h5>I took a couple classes a university but didn't enjoy the way any of the classes were structured. This enabled me to start a bootcamp at General Assembly.I built a couple applications during my time at General Assembly.</h5>
        <h5> Below is the application I am most proud of, but you can see more applications <Link to={'/portfolio'} >here</Link> or hit the 'Portfolio' tab.</h5>
      </div>
      <hr />
      <div className="container">
        <br />
        <div className="container">
          <a href={resume} download>
            <button type="button" className="btn btn-primary btn-lg">Download Resume</button>
          </a>
        </div>
        <br />
        <div className="container">
          <Link to={'/portfolio'}>
            <button type="button" class="btn btn-primary btn-lg">View My Projects</button>
          </Link>
        </div>
        <br />
        <div className="container">
          <Link to={'/contact'}>
            <button type="button" class="btn btn-primary btn-lg">Contact Me</button>
          </Link>
        </div>
        <br />
      </div>
    </div>
  )
}

export default About