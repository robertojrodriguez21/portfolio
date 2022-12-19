import myPicture from "../images/my_picture.png"
import laptopMan from "../images/laptop_man.png"
import whackAMole from "../images/whack_a_mole.png"
import wishList from "../images/wish_list.png"
import { Link } from "react-router-dom"

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
          <h3>I am an aspiring full-stack web application developer based in Illinois.</h3>
        </div>
      </div>
      <hr />
      <div className="clearfix">
        <img src={laptopMan} className="col-3 float-start laptopMan" alt="Laptop Man" />
        <h2>A little about me ...</h2>
        <h5>Hello, my name is Roberto J. Rodriguez. I was born and raised in Chicago. Starting high school I knew that I wanted to go into tech, so I took my first Computer Science class.</h5>
        <h5>I took a couple classes a university but didn't enjoy the way any of the classes were structured. This enabled me to start a bootcamp at General Assembly.I built a couple applications during my time at General Assembly.</h5>
        <h5> Below is the application I am most proud of, but you can see more applications <Link to={'/portfolio'} >here</Link> or hit the 'Portfolio' tab.</h5>
        <br />
        <div className="container">
          <div className="card mb-3">
            <h3 className="card-header">Finance Tracker</h3>
            <div className="card-body">
              <h5 className="card-title">This application will allow you to keep track of all your finances. You will be able to add an account (Checking, Savings, Credit Cards, and Loans). After you add that account you will be able to add transactions that occurred in that account. On the home page you will see all accounts and balances to each account.</h5>
              <br />
              <h6 className="card-subtitle text-muted">The application was created with PERN (PostgresSQL, Express, React, Node.js) Stack. It was also styled with Bootstrap using a template from bootswatch.com.</h6>
            </div>
            <img src="https://raw.githubusercontent.com/robertojrodriguez21/finance-tracker/main/diagrams/homepage.png" alt="" />
            <div className="card-body">
              <a href="https://github.com/robertojrodriguez21/finance-tracker" className="card-link">GitHub</a>
              <a href="" className="card-link">Deployment Coming Soon</a>
              {/* <a href="#" className="card-link">Website</a> */}
            </div>
            <div className="card-footer text-muted">
              Last update: December 19 , 2022
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home