import React from "react";

function Hero() {
  return (
    <div className="hero" id="home">
      <div className="contanier">
        <div className="content">
          <h4>Halo, Saya Mily!</h4>
          <h1>Emily Sintikhe Pangemanan, S.Kom., ACP</h1>
          <p style={{ fontSize: "1.5rem", marginTop: "10px", color: "#555" }}>
            Informatics Graduate | AI, Data Analytics & FrontEnd Developer
          </p>
          <div style={{ marginTop: "20px" }}>
            <a
              href="#about"
              className="btn-primary"
              style={{
                padding: "10px 20px",
                backgroundColor: "#333",
                color: "#fff",
                textDecoration: "none",
                borderRadius: "5px",
              }}
            >
              Kenali Saya Lebih Lanjut
            </a>
          </div>
        </div>
        <div className="hero-img">
          {/* Pastikan file eemily.png ada di folder public/img */}
          <img src="/img/mily pinus.png" alt="Emily Pangemanan" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
