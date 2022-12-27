import whackAMole from "../images/whack_a_mole.png"
import ticTacToe from "../images/tic_tac_toe.png"

const Projects = () => {
  return (
    <div className="container">
      <br />
      <h1>My Projects</h1>
      <hr />
      <div className="row">
        <div className="container col-lg-6">
          <div className="card mb-3">
            <h3 className="card-header">Finance Tracker</h3>
            <div className="card-body">
              <h5 className="card-title">This application will allow you to keep track of all your finances. You will be able to add an account (Checking, Savings, Credit Cards, and Loans). After you add that account you will be able to add transactions that occurred in that account. On the home page you will see all accounts and balances to each account.</h5>
              <br />
              <h6 className="card-subtitle text-muted">The application was created with PERN (PostgresSQL, Express, React, Node.js) Stack. It was also styled with Bootstrap using a template from bootswatch.com.</h6>
            </div>
            <img src="https://raw.githubusercontent.com/robertojrodriguez21/finance-tracker/main/diagrams/homepage.png" alt="Finance Tracker Home Page" />
            <div className="card-body">
              <a href="https://github.com/robertojrodriguez21/finance-tracker" className="card-link">GitHub</a>
              <a href="" className="card-link">Deployment Coming Soon</a>
              {/* <a href="#" className="card-link">Website</a> */}
            </div>
            <div className="card-footer text-muted">
              Last update: December 19, 2022
            </div>
          </div>
        </div>
        <div className="container col-lg-6">
          <div className="card mb-3">
            <h3 className="card-header">Blog</h3>
            <div className="card-body">
              <h5 className="card-title">Our web app was focused around having a personal blog. Every member of our group uses a type of blog for one thing or another. Whether it is for workout logs, or a scrapbook for their kids. So we created a web app that can be all-encompassing to suit everyone's needs.</h5>
              <br />
              <h6 className="card-subtitle text-muted">This application was created as a team, gaining experience in teamwork and GitHub merges.</h6>
              <br />
              <h6 className="card-subtitle text-muted">The application was created with PERN (PostgresSQL, Express, React, Node.js) Stack.</h6>
            </div>
            <img src="https://camo.githubusercontent.com/d1b932356dd124999febd550bc5957cdd04df87261105415f1c2f72bd02651a0/68747470733a2f2f692e696d6775722e636f6d2f30527537654d442e706e67" alt="Blog Feed Page" />
            <div className="card-body">
              <a href="https://github.com/robertojrodriguez21/blog-frontend" className="card-link">GitHub Frontend</a>
              <a href="https://github.com/KyleDavis1985/blog-backend" className="card-link">GitHub Backend</a>
              <a href="https://nameless-atoll-81684.herokuapp.com/" className="card-link">Website</a>
            </div>
            <div className="card-footer text-muted">
              Last update: November 18, 2022
            </div>
          </div>
        </div>
        <div className="container col-lg-6">
          <div className="card mb-3">
            <h3 className="card-header">Wish List</h3>
            <div className="card-body">
              <h5 className="card-title">A user will be able to create a wish list and add items to that list. The user can add a name, description, budget, different links to where the user can buy that item, and a budget for the item. When a user decides they want to check and see if an item is at or below their budget they will click on all the links and see which is the best option for them.</h5>
              <br />
              <h6 className="card-subtitle text-muted">The application was created with MERN (MongooseDB, Express, React, Node.js) Stack.</h6>
            </div>
            <img src="https://raw.githubusercontent.com/robertojrodriguez21/wish-list/main/images/Home.png" alt="Wish List App Landing Page" />
            <div className="card-body">
              <a href="https://github.com/robertojrodriguez21/wish-list" className="card-link">GitHub</a>
              <a href="https://calm-coast-76645.herokuapp.com/" className="card-link">Website</a>
            </div>
            <div className="card-footer text-muted">
              Last update: November 2, 2022
            </div>
          </div>
        </div>
        <div className="container col-lg-6">
          <div className="card mb-3">
            <h3 className="card-header">Whack-A-Mole</h3>
            <div className="card-body">
              <h5 className="card-title">A certain number of holes in the play area top are filled with small, plastic, cartoonish moles, which pop up at random. Points are scored by whacking each mole as it appears.</h5>
              <br />
              <h6 className="card-subtitle text-muted">The application was created with Javascript, CSS, and HTML.</h6>
            </div>
            <img src={whackAMole} alt="Whack-A-Mole Landing Page" />
            <div className="card-body">
              <a href="https://github.com/robertojrodriguez21/whack-a-mole" className="card-link">GitHub</a>
              <a href="https://my-whack-a-mole.surge.sh/index.html" className="card-link">Website</a>
            </div>
            <div className="card-footer text-muted">
              Last update: October 7, 2022
            </div>
          </div>
        </div>
        <div className="container col-lg-6">
          <div className="card mb-3">
            <h3 className="card-header">Tic-Tac-Toe</h3>
            <div className="card-body">
              <h5 className="card-title">Tic-tac-toe is a paper-and-pencil game for two players who take turns marking the spaces in a three-by-three grid with X or O.</h5>
              <br />
              <h6 className="card-subtitle text-muted">The application was created with Javascript, CSS, and HTML.</h6>
            </div>
            <img src={ticTacToe} alt="Tic-Tac-Toe Landing Page" />
            <div className="card-body">
              <a href="https://github.com/robertojrodriguez21/tic-tac-toe" className="card-link">GitHub</a>
              <a href="https://numerous-art.surge.sh/" className="card-link">Website</a>
            </div>
            <div className="card-footer text-muted">
              Last update: September 26, 2022
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects