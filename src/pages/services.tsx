import React from "react";
import Layout from "../components/layout/layout";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faMagnifyingGlass,
  faDisplay,
} from "@fortawesome/free-solid-svg-icons";

const Services: React.FC = () => {
  return (
    <Layout>
      <div className="services flex column h-center">
        <h1>Mes services</h1>
        <section className="service-list bottom-space-8">
          <article className="glass-card">
            <FontAwesomeIcon
              icon={faCode}
              size="2xl"
              className="bottom-space-4"
            />
            <h2>Sites web</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              volutpat libero libero, eu pretium quam feugiat ultricies. Mauris
              non semper elit. Sed auctor urna id nibh aliquam convallis. Nulla
              a lobortis libero.
            </p>
          </article>
          <article className="glass-card">
            <FontAwesomeIcon
              icon={faDisplay}
              size="2xl"
              className="bottom-space-4"
            />
            <h2>Applications métier</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              volutpat libero libero, eu pretium quam feugiat ultricies. Mauris
              non semper elit. Sed auctor urna id nibh aliquam convallis. Nulla
              a lobortis libero.
            </p>
          </article>
          <article className="glass-card">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              size="2xl"
              className="bottom-space-4"
            />
            <h2>Audit</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              volutpat libero libero, eu pretium quam feugiat ultricies. Mauris
              non semper elit. Sed auctor urna id nibh aliquam convallis. Nulla
              a lobortis libero.
            </p>
          </article>
        </section>
        <h1>Pourquoi faire appel à moi ?</h1>
        <section className="service-list bottom-space-8">
          <article>
            <h2>Compétences</h2>
            <p>
              Je suis un développeur front-end passionné par la technologie et
              le design. Ma formation à Epitech m'a offert une solide base
              technique, et chaque collaboration m'a permis d'affiner davantage
              mes compétences et de contribuer de manière significative.
            </p>
          </article>
          <article>
            <h2>Expériences</h2>
            <p>
              Que ce soit en freelance ou en entreprise, chaque expérience a été
              une opportunité d'apprendre et de grandir. J'aime comprendre les
              besoins réels pour les traduire en solutions technologiques
              pertinentes.
            </p>
          </article>
          <article>
            <h2>Satisfaction</h2>
            <p>
              Je m'investis pleinement dans chaque projet, en privilégiant
              l'écoute et la collaboration. Si vous recherchez une personne
              enthousiaste, curieuse, toujours prête à s'adapter et à apprendre,
              je pourrais être le collaborateur idéal pour votre projet.
            </p>
          </article>
        </section>
        <NavLink to="/contact" className="button primary v-space-6">
          Me contacter
        </NavLink>
      </div>
    </Layout>
  );
};

export default Services;
