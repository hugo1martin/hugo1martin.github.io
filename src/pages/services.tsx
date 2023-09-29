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
              Créez une présence en ligne robuste avec un site web performant et
              fonctionnel. Assurez une visibilité et une accessibilité optimales
              pour vos clients, tout en bénéficiant d'une gestion technique
              simplifiée et efficace.
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
              Augmentez votre efficacité avec des applications métier sur
              mesure. Intégrez des solutions logicielles robustes et évolutives
              à vos opérations existantes pour un fonctionnement optimal et une
              amélioration continue.
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
              Optimisez votre présence en ligne et votre infrastructure
              technologique grâce à des conseils avisés. Évitez les pièges et
              prenez des décisions éclairées avec mon aide pour naviguer dans le
              monde technologique complexe.
            </p>
          </article>
        </section>
        <h1>Pourquoi faire appel à moi ?</h1>
        <section className="service-list bottom-space-8">
          <article>
            <h2>Compétences</h2>
            <p>
              En tant que développeur front-end passionné formé à Epitech,
              j'apporte compétence technique et contribution significative à
              chaque projet.
            </p>
          </article>
          <article>
            <h2>Expériences</h2>
            <p>
              Chaque expérience en freelance ou en entreprise renforce mon
              aptitude à traduire les besoins réels en solutions technologiques
              pertinentes.
            </p>
          </article>
          <article>
            <h2>Satisfaction</h2>
            <p>
              Mon engagement dans chaque projet assure écoute, collaboration, et
              adaptation, faisant de moi le collaborateur idéal pour votre
              projet.
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
