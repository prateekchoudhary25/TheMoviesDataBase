import React from "react";

const About = () => {
  return (
    <div>
      <section className="section about-section">
        <h1 className="section-title">About</h1>
        <p style={{ textAlign: "center" }}>
          This is just a simple Movies Database Website, made by Prateek Choudhary
          using React for learning purpose.
          <br /> This Website uses the TMDB API to fetch movies.
        </p>
      </section>
    </div>
  );
};

export default About;
