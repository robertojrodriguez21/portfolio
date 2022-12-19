import {Link} from 'react-router-dom'

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#">Roberto J. Rodriguez</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarColor02">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className='nav-link' to={'/'}><div>Home</div></Link>
            </li>
            <li className="nav-item">
              <Link className='nav-link' to={'/about'}><div>About</div></Link>
            </li>
            <li className="nav-item">
              <Link className='nav-link' to={'/projects'}><div>Projects</div></Link>
            </li>
            <li className="nav-item">
              <Link className='nav-link' to={'/contact'}><div>Contact</div></Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav