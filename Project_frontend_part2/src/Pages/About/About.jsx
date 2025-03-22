import React from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import "./About.css";
// import MetaData from "../MetaData";

const About = () => {
  document.title = "About Us";
  return (
    <>
      <Header />

      <div className="about-section-container">
        <h1 className="Heading">
          About <span>Us</span>
        </h1>
        {/* <MetaData title={'About Us'} /> */}
        <div className="about-section-box">
          <div>
            <div>
              <img
                style={{
                  width: "20rem",
                  height: "20rem",
                  margin: "2rem 0",
                  borderRadius: "100%",
                }}
                src="https://photos.google.com/photo/AF1QipNl5KcZSXeaN0-cjvKGh_ep8Gny2XHPVy6Huxma"
                alt="Founder"
              />
              <h1>Bidisha Biswas</h1>
              <button
                onClick={() =>
                  window.open("https://www.linkedin.com/in/bidisha-biswas-ba2548251/", "_blank")
                }
              >
                Visit Website
              </button>
              <br />
              <p>
                This is a sample wesbite made by @Bidisha Biswas.
                <br />
                Only with the purpose to Making MERN Stack Project
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
