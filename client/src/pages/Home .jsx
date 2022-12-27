import { Link } from "react-router-dom";
import myPicture from "../images/my_picture.png"

const Home = () => {
  return (
    <div className="container">
      <br />
      <div className="container row">
        <div className="col-lg-2 col-sm-12 my-picture-container">
          <img className="my-picture" src={myPicture} alt="" />
        </div>
        <div className="col-lg-10 col-sm-12 align-self-center">
          <h1>Hi, I'm Roberto.</h1>
          <h5>Full-Stack Web Developer</h5>
          <h3>I am a full-stack web application developer based in Illinois.</h3>
        </div>
      </div>
      <hr />
      <div className="container">
        <br />
        <div className="container">
          <Link to={'/about'}>
            <button type="button" class="btn btn-primary btn-lg">More About Me</button>
          </Link>
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

export default Home