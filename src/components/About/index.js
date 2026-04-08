import React from "react";

function About() {
  return (
    <section id="about" className="about">
      <div className="contanier">
        <div className="about-img">
          <img src="/img/eemily.png" alt="Emily Pangemanan" />
        </div>
        <div className="content">
          <h1>
            About <span>Me</span>
          </h1>
          <h3>Emily Sintikhe Pangemanan, S.Kom., ACP</h3>
          <p>
            Lulusan sarjana Informatika dari <b>Universitas Klabat</b> dengan
            predikat <b>Cum Laude (IPK 3.63)</b>. Memiliki minat besar dalam
            bidang Data Analytics, Kecerdasan Buatan, Design UI dan Database.
            Saya adalah pribadi yang detail, terstruktur, dan memiliki kemampuan
            analisis data yang kuat.
          </p>
          <p>
            Telah menyelesaikan proyek penelitian tugas akhir mengenai{" "}
            <b>Klasifikasi Citra CT Scan Kanker Paru-paru </b>
            menggunakan metode <i>
              Deep Learning berbasis Transfer Learning
            </i>{" "}
            dan <i> Interpretasi Large Language Model (LLM)</i>.
          </p>
          <p>
            <b>Skills & Certifications:</b>
            <br />
            • Microsoft Office Specialist (Excel, Word, PowerPoint)
            <br />
            • Adobe Certified Professional (ACP)
            <br />• English Proficiency: <b>C1 Advanced Level</b>
            <br />• Machine Learning Certification
          </p>

          {/* Bagian Tombol Sosial Media */}
          <div className="about-social">
            <a href="mailto:pangemananemily@gmail.com" className="btn-social">
              <i className="fa-solid fa-envelope"></i>pangemananemily@gmail.com
            </a>

            <a
              href="https://www.instagram.com/emilysinth_"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-social"
            >
              <i className="fa-brands fa-instagram"></i>emilysinth_
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
