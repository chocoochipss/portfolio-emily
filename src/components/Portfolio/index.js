import React from "react";

function Portfolio() {
  return (
    <section id="Portfolio" className="portfolio">
      <div className="contanier">
        <div className="sec-top">
          <h1>
            My <span>Portfolio</span>
          </h1>
        </div>
        <div className="boxs">
          {/* PROJECT 1: SKRIPSI (THE STAR) */}
          <div className="box">
            <div className="box-hover">
              <span>Lung Cancer CT-Scan Classification With LLM</span>
            </div>
            <img src="/img/skripsi.png" alt="Thesis Project" />
          </div>

          {/* PROJECT 2: DATABASE/ADMINISTRATION */}
          <div className="box">
            <div className="box-hover">
              <span>Machine Learning Sertification</span>
            </div>
            <img
              src="/img/machine learning.png"
              alt="Data Management Project"
            />
          </div>

          {/* PROJECT 3: WEB DEVELOPMENT */}
          <div className="box">
            <div className="box-hover">
              <span>Adobe Certified Professional</span>
            </div>
            <img src="/img/sertifikat.png" alt="Web Project" />
          </div>

          {/* PROJECT 4: UI/UX DESIGN (ACP Skills) */}
          <div className="box">
            <div className="box-hover">
              <span>Restaurant Management System</span>
            </div>
            <img src="/img/project4.png" alt="Design Project" />
          </div>

          {/* PROJECT 5: ANALYTICS */}
          <div className="box">
            <div className="box-hover">
              <span>Web Design</span>
            </div>
            <img src="/img/project5.png" alt="Analysis Project" />
          </div>

          {/* PROJECT 6: OTHER INFO */}
          <div className="box">
            <div className="box-hover">
              <span> UI/UX Design DISDUKCAPIL MINUT </span>
            </div>
            <img src="/img/project6.png" alt="Research Project" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
