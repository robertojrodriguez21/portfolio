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
          <h3>I am an aspiring full-stack web application developer based in Illinois.</h3>
        </div>
      </div>
      <hr />
      <h2>A little about me ...</h2>
      <h5>Hello, my name is Roberto J. Rodriguez. I was born and raised in Chicago. Starting high school I knew that I wanted to go into tech, so I took my first Computer Science class.</h5>
      <h5>I took a couple classes a university but didn't enjoy the way any of the classes were structured. This enabled me to start a bootcamp at General Assembly.I built a couple applications during my time at General Assembly.</h5>
      <h5> Below is the application I am most proud of, but you can see more applications here.</h5>
      <hr />
      <h2>Work Experience</h2>
      <hr />
      <h2>A Couple Pieces of My Work</h2>
    </div>
  )
}

export default Home