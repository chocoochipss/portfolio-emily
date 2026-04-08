import React from "react";

function Service() {
  return (
    <section id="services" className="services">
      <div className="contanier">
        <div className="sec-top">
          <h1>
            My <span>Services</span>
          </h1>
        </div>
        <div className="boxs">
          {/* SERVICE 1: AI & DATA ANALYST */}
          <div className="box">
            <i className="fa-solid fa-brain" />
            <h3>AI & Data Analytics</h3>
            <p>
              Mengembangkan model <b>Artificial Intelligence</b> dan{" "}
              <b>Machine Learning</b> untuk analisis data yang mendalam.
              Berpengalaman dalam pengolahan citra medis dan klasifikasi data
              menggunakan Deep Learning.
            </p>
          </div>

          {/* SERVICE 2: FRONTEND & MOBILE DEV */}
          <div className="box">
            <i className="fa-solid fa-laptop-code" />
            <h3>Frontend Development</h3>
            <p>
              Membangun antarmuka pengguna (UI) yang modern dan responsif
              menggunakan <b>React</b> dan <b>JavaScript</b>. Mampu
              mengembangkan aplikasi mobile lintas platform dengan{" "}
              <b>React Native</b> yang estetik.
            </p>
          </div>

          {/* SERVICE 3: DATABASE MANAGEMENT */}
          <div className="box">
            <i className="fa-solid fa-database" />
            <h3>Database Management</h3>
            <p>
              Perancangan dan manajemen basis data relasional menggunakan{" "}
              <b>SQL</b> dan <b>XAMPP</b>. Menjamin integritas data serta
              membangun struktur sistem manajemen (CRUD) yang efisien dan
              terorganisir.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Service;
