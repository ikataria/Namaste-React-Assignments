import dev_pic from "../utils/images/mohitkataria-pic.jpg";
import burgerImage from "../utils/images/burgerImage.png";
import { useState } from "react";

const About = () => {
  const [profileVisibility, setProfileVisibility] = useState("");

  return (
    <div className="about-container-main">
      {/* Profile Section */}
      <div className="about-container-profile">
        <div className="profile-btn">
          <button className="btn">My Profile</button>
        </div>

        <div className="profile-container-main">
          <div className="profile-container shadow-box-inset">
            <div className="profile-card">
              <h3 className="heading-main">About Me</h3>
              <img
                src={dev_pic}
                alt="Developer pic"
                className="dev-pic"
                width="957px"
                height="787px"
              />
              <p className="regular-text">Mohit Kataria</p>
              <p className="small-text">
                MongoDb | Express.js | React.js | Node.js{" "}
              </p>
              <div className="social-media-container">
                <a
                  className="linkedIn-link icon-fa"
                  href="https://www.linkedin.com/in/imohitkataria/"
                >
                  <i className="fa-brands fa-linkedin"></i>
                </a>
                <a
                  className="twitter-link icon-fa"
                  href="https://x.com/imohitkataria/"
                >
                  <i className="fa-brands fa-twitter"></i>
                </a>
                <a
                  className="github-link icon-fa"
                  href="https://github.com/ikataria"
                >
                  <i className="fa-brands fa-github"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="repo-container shadow-box-inset">
            <h3 className="heading-main">
              Dish<span className="highLightColor">Whom</span> App Github
              Repository
            </h3>
            <hr />
            <button className="repo-btn shadow-box">
              <a
                href="https://github.com/ikataria/Namaste-React-Assignments/"
                target="__blank"
              >
                Namaste-React
              </a>
            </button>
            <p className="regular-text centerText">
              ❤️ Namaste React 🚀 from Zero to Hero by{" "}
              <span>
                <a
                  href="https://www.linkedin.com/in/akshaymarch7/"
                  target="__blank"
                  className="highLightColor"
                >
                  Akshay Saini
                </a>
              </span>
              . This repository is for Assignments taken from the Namaste React
              Course from{" "}
              <a
                href="https://namastedev.com/"
                target="__blank"
                className="highLightColor"
              >
                NamasteDev
              </a>
            </p>
            <p className="highLightColorRed">
              #NamasteReact #NamasteJavascript
            </p>
          </div>
        </div>
      </div>

      {/* Static Section : Text & Img*/}
      <div className="about-container-content">
        <div className="about-container-text">
          <h1>
            Experience the <br />
            Excitement of <br />
            <strong className="highLightLine">Bold & Tasty Food</strong>
          </h1>
          <p>"From breakfast to night's boom, tasty meals with Dishwhom 👊"</p>
        </div>
        <div className="about-container-image">
          <img src={burgerImage} alt="Burger Image" width="466" height="324" />
        </div>
      </div>
    </div>
  );
};

export default About;