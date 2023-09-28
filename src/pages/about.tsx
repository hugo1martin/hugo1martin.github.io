import React from "react";
import Layout from "../components/layout/layout";
import { NavLink } from "react-router-dom";

const About: React.FC = () => {
  return (
    <Layout>
      <div className="about flex column h-center v-center">
        <div className="presentation bottom-space-8">
          <img
            className="hugo-photo"
            src="images/placeholder_img.svg"
            alt="placeholder img"
          ></img>
          <div className="flex column">
            <h1>Présentation</h1>
            <p>
              Hugo Martin, développeur frontend freelance basé à Paris.
              <br></br>
              <br></br>
              Spécialiste du développement frontend, je suis à votre écoute pour
              concrétiser tous vos projets, qu'il s'agisse de sites web,
              d'applications web innovantes ou de développements spécifiques.
              <br></br>
              <br></br>
              Fasciné par le monde du développement et les technologies
              modernes, je combine ma passion et mon expertise pour vous offrir
              des solutions optimales dans divers secteurs.{" "}
              <a href="hugo_cv.pdf" target="_blank">
                Voir mon CV.
              </a>
            </p>
            <NavLink
              className="button primary top-space-6 align-self center"
              to="/services"
            >
              Voir mes services
            </NavLink>
          </div>
        </div>
        {/* <NavLink to="/services" className="button primary top-space-4">
          Mes services
        </NavLink> */}
      </div>
    </Layout>
  );
};

export default About;
