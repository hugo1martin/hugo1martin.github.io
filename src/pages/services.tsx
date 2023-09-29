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
              Bâtissez une solide présence en ligne avec un site web performant
              et fonctionnel.
              <br></br>
              <br></br>
              Assurez-vous que vos clients vous trouvent aisément et accèdent
              facilement aux informations dont ils ont besoin.
              <br></br>
              <br></br>
              Je me charge de l'aspect technique pour vous garantir un site web
              fluide, rapide et efficace, mettant l'accent sur la facilité
              d'utilisation et la fonctionnalité.
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
              Automatisez vos processus métier et augmentez votre efficacité
              avec des applications métier sur mesure.
              <br></br>
              <br></br>
              Je développe des solutions logicielles robustes et évolutives qui
              s'intègrent parfaitement à vos opérations existantes, vous
              permettant de vous concentrer sur votre cœur de métier et
              d'améliorer continuellement votre offre.
            </p>
          </article>
          <article className="glass-card">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              size="2xl"
              className="bottom-space-4"
            />
            <h2>Conseils</h2>
            <p>
              Bénéficiez de conseils avisés pour optimiser votre présence en
              ligne et votre infrastructure technologique.
              <br></br>
              <br></br>
              Profitez de mon expérience pour éviter les pièges courants et
              prendre des décisions éclairées pour votre entreprise.
              <br></br>
              <br></br>
              Je suis là pour vous aider à naviguer dans le monde complexe de la
              technologie, en vous fournissant des solutions pratiques et
              réalisables qui apporteront de la valeur ajoutée à votre
              entreprise.
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
