import myPicture from "../images/my_picture.png"
import laptopMan from "../images/laptop_man.png"
import whackAMole from "../images/whack_a_mole.png"
import wishList from "../images/wish_list.png"
import EmailIcon from "../images/email_icon.png"
import LinkedInIcon from "../images/linkedin_icon.png"
import GitHubIcon from "../images/github_icon.png"

const Home = () => {
  return (
    <div className="container">
      <br />
      <div className="container row">
        <div className="col-2 my-picture-container">
          <img className="my-picture" src={myPicture} alt="" />
        </div>
        <div className="col-10 align-self-center">
          <h1>Hi, I'm Roberto.</h1>
          <h5>Full-Stack Web Developer</h5>
          <h3>Hello, my name is Roberto. I am an aspiring full-stack web application developer based in Illinois.</h3>
        </div>
      </div>
      <hr />
      <h2>A Couple Pieces of My Work</h2>
      <h3></h3>
      <h2></h2>
    </div>
  )
}

export default Home