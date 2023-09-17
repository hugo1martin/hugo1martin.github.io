import Layout from "../components/layout/layout";

function Home() {
  return (
    <Layout>
      <div className="home flex column h-center v-center">
        <div className="flex row bottom-space-8">
          <h1>Bonjour, je suis&nbsp;</h1>
          <h1 className="typed-text"></h1>
        </div>
        <a href="public/hugo_cv.pdf" className="button primary">
          Télécharger mon CV
        </a>
      </div>
    </Layout>
  );
}

export default Home;
