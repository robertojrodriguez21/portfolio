import emailIcon from "../images/email_icon.png"
import linkedInIcon from "../images/linkedin_icon.png"
import gitHubIcon from "../images/github_icon.png"

const Contact = () => {
  return (
    <div className="container">
      <br />
      <h1>Contact Me</h1>
      <hr />
      <div className="container">
        <div className="row">
          <a className="col-1 text-end" href="https://www.linkedin.com/in/robertojrodriguez21/"><img className="contact-page-icon" src={linkedInIcon} alt="LinkedIn Icon" /></a>
          <h5 className="col-10 offset-1 text-start align-self-center">LinkedIn</h5>
        </div>
        <div className="row">
          <a className="col-1 text-end" href="mailto: robertojrodriguez21@gmail.com"><img className="contact-page-icon" src={emailIcon} alt="Email Icon" /></a>
          <h5 className="col-10 offset-1 text-start align-self-center">Email</h5>
        </div>
        <div className="row">
          <a className="col-1 text-end" href="https://github.com/robertojrodriguez21/"><img className="contact-page-icon" src={gitHubIcon} alt="GitHub Icon" /></a>
          <h5 className="col-10 offset-1 text-start align-self-center">GitHub</h5>
        </div>
      </div>
      <div className="container"></div>
    </div>
  )
}

export default Contact