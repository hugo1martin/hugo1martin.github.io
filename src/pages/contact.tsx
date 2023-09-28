import React, { useEffect } from "react";
import Layout from "../components/layout/layout";

const Contact: React.FC = () => {
  useEffect(() => {
    const head = document.querySelector("head");
    const script = document.createElement("script");
    script.setAttribute(
      "src",
      "https://assets.calendly.com/assets/external/widget.js"
    );
    script.setAttribute("async", "true");
    head?.appendChild(script);
  }, []);

  return (
    <Layout>
      <div className="contact">
        <div
          className="calendly-inline-widget"
          data-url="https://calendly.com/hugomrt-94"
        />
      </div>
    </Layout>
  );
};

export default Contact;
