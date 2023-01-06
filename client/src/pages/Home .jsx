import { Link } from "react-router-dom";
import myPicture from "../images/my_picture.png"

const Home = () => {
  return (
    <div className="container center-home">
      <br />
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-2 col-sm-12 my-picture-container">
            <img className="my-picture" src={myPicture} alt="" />
          </div>
          <div className="col-lg-10 col-sm-12 align-self-center">
            <h1 className="hi-roberto">Hi, I'm Roberto.</h1>
            <h3>Full-Stack Web Developer</h3>
            <h6>I am a full-stack web application developer based in Illinois.</h6>
            <Link to={'/about'}>
              <button type="button" className="btn btn-primary">More About Me</button>
            </Link>
          </div>
        </div>
      </div>
      <hr />
      <div className="container">
        <h2>A Few of My Projects</h2>
        <br />
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                Finance Tracker
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                This application will allow you to keep track of all your finances. You will be able to add an account (Checking, Savings, Credit Cards, and Loans). After you add that account you will be able to add transactions that occurred in that account. On the home page you will see all accounts and balances to each account. View more details on <Link to={'/portfolio'} >portfolio</Link> page.
                <br /><br />
                <a href="https://finance-tracker-fe.herokuapp.com/"><button type="button" className="btn btn-primary">Website</button></a>
                <a href="https://github.com/robertojrodriguez21/finance-tracker" className="left-side-padding-home"><button type="button" className="btn btn-primary">GitHub</button></a>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Wish List
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                A user will be able to create a wish list and add items to that list. The user can add a name, description, budget, different links to where the user can buy that item, and a budget for the item. When a user decides they want to check and see if an item is at or below their budget they will click on all the links and see which is the best option for them. View more details on <Link to={'/portfolio'} >portfolio</Link> page.
                <br /><br />
                <a href="https://calm-coast-76645.herokuapp.com/"><button type="button" className="btn btn-primary">Website</button></a>
                <a href="https://github.com/robertojrodriguez21/wish-list" className="left-side-padding-home"><button type="button" className="btn btn-primary">GitHub</button></a>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Blog
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                Our web app was focused around having a personal blog. Every member of our group uses a type of blog for one thing or another. Whether it is for workout logs, or a scrapbook for their kids. So we created a web app that can be all-encompassing to suit everyone's needs. View more details on <Link to={'/portfolio'} >portfolio</Link> page.
                <br /><br />
                <a href="https://nameless-atoll-81684.herokuapp.com/"><button type="button" className="btn btn-primary">Website</button></a>
                <a href="https://github.com/robertojrodriguez21/blog-frontend" className="left-side-padding-home"><button type="button" className="btn btn-primary">GitHub Frontend</button></a>
                <a href="https://github.com/KyleDavis1985/blog-backend" className="left-side-padding-home"><button type="button" className="btn btn-primary">GitHub Backend</button></a>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="container">
          <Link to={'/portfolio'}>
            <button type="button" className="btn btn-primary btn-lg">View Portfolio</button>
          </Link>
        </div>
      </div>
      <br />
    </div>
  )
}

export default Home