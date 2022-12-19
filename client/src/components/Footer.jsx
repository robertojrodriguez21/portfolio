import emailIcon from "../images/email_icon_white.png"
import linkedInIcon from "../images/linkedin_icon_white.png"
import gitHubIcon from "../images/github_icon_white.png"

const Footer = () => {
  return (
    <footer className="container-fluid bg-dark footer-text text-center">
      <br />
      <h1>Let's Chat!</h1>
      <br />
      <div className="container-fluid row justify-content-center">
        <div className="contact-link col-lg-1">
          <a href="https://www.linkedin.com/in/robertojrodriguez21/" target='_blank'><img src={linkedInIcon} alt="LinkedIn Icon" /></a>
        </div>
        <div className="contact-link col-lg-1">
          <a href="mailto: robertojrodriguez21@gmail.com"><img src={emailIcon} alt="Email Icon" /></a>
        </div>
        <div className="contact-link col-lg-1">
          <a href="https://github.com/robertojrodriguez21" target='_blank'><img src={gitHubIcon} alt="GitHub Icon" /></a>
        </div>
      </div>
      <br />
      <div>ⓒ2022 Roberto J. Rodriguez</div>
      <br />
    </footer>
  )
}

export default Footer