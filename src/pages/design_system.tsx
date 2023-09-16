import Layout from "../components/layout/layout";

function DesignSystem() {
  return (
    <Layout>
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>

      <div className="v-space-4">
        <button className="button default right-space-2">Default</button>
        <button className="button primary right-space-2">Primary</button>
        <button className="button secondary right-space-2">Secondary</button>
        <button className="button primary-inverse right-space-2">
          Primary Inverse
        </button>
        <button className="button secondary-inverse right-space-2">
          Secondary Inverse
        </button>
        <button className="button default-inverse right-space-2">
          Default inverse
        </button>
        <button className="button default-no-border right-space-2">
          Default No Border
        </button>
      </div>

      <div className="v-space-4">
        <div className="card default bottom-space-2">
          <h3>Card Default</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatum, quibusdam, quia, quod voluptates voluptatem quos
            voluptatibus quae doloribus quas natus. Quisquam voluptatum,
            quibusdam, quia, quod voluptates voluptatem quos voluptatibus quae
            doloribus quas natus.
          </p>
        </div>

        <div className="card primary bottom-space-2">
          <h3>Card Primary</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatum, quibusdam, quia, quod voluptates voluptatem quos
            voluptatibus quae doloribus quas natus. Quisquam voluptatum,
            quibusdam, quia, quod voluptates voluptatem quos voluptatibus quae
            doloribus quas natus.
          </p>
        </div>

        <div className="card secondary bottom-space-2">
          <h3>Card Secondary</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatum, quibusdam, quia, quod voluptates voluptatem quos
            voluptatibus quae doloribus quas natus. Quisquam voluptatum,
            quibusdam, quia, quod voluptates voluptatem quos voluptatibus quae
            doloribus quas natus.
          </p>
        </div>

        <div className="card default-inverse bottom-space-2">
          <h3>Card Default Inverse</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatum, quibusdam, quia, quod voluptates voluptatem quos
            voluptatibus quae doloribus quas natus. Quisquam voluptatum,
            quibusdam, quia, quod voluptates voluptatem quos voluptatibus quae
            doloribus quas natus.
          </p>
        </div>

        <div className="card primary-inverse bottom-space-2">
          <h3>Card Primary Inverse</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatum, quibusdam, quia, quod voluptates voluptatem quos
            voluptatibus quae doloribus quas natus. Quisquam voluptatum,
            quibusdam, quia, quod voluptates voluptatem quos voluptatibus quae
            doloribus quas natus.
          </p>
        </div>

        <div className="card secondary-inverse bottom-space-2">
          <h3>Card Secondary Inverse</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatum, quibusdam, quia, quod voluptates voluptatem quos
            voluptatibus quae doloribus quas natus. Quisquam voluptatum,
            quibusdam, quia, quod voluptates voluptatem quos voluptatibus quae
            doloribus quas natus.
          </p>
        </div>
      </div>

      <div className="card default-no-border bottom-space-2">
        <h3>Card Default No Border</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptatum, quibusdam, quia, quod voluptates voluptatem quos
          voluptatibus quae doloribus quas natus. Quisquam voluptatum,
          quibusdam, quia, quod voluptates voluptatem quos voluptatibus quae
          doloribus quas natus.
        </p>
      </div>

      <input className="bottom-space-2"></input>

      <div className="bottom-space-2">
        <a>Clickable link</a>
      </div>

      <div className="bottom-space-2">
        <a className="default">Default clickable link</a>
      </div>
    </Layout>
  );
}

export default DesignSystem;
