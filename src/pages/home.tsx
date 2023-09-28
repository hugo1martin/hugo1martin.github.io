import { NavLink } from "react-router-dom";
import Layout from "../components/layout/layout";

function Home() {
  return (
    <Layout>
      <div className="home flex column h-center v-center">
        <div className="title flex row bottom-space-8">
          <h1>Bonjour, je suis&nbsp;</h1>
          <h1 className="typed-text"></h1>
        </div>
        <NavLink
          className="button primary aboutme align-self center top-space-4"
          to="/about"
        >
          En savoir pluss
        </NavLink>
      </div>
    </Layout>
  );
}

export default Home;
