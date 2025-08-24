import React, { useRef } from "react";
import homeImage from "../../assets/home-image.png";
import aboutImage from "../../assets/about-image.jpg";
import arrowLeft from "../../assets/arrow-left.svg";
import "./HomeComponent.css";
import ObjectivesComponent from "./components/objectives/ObjectivesComponent";
import WorkingAreasComponent from "./components/working-areas/WorkingAreasComponent";
import PostsComponent from "./components/posts/PostsComponent";
import FormComponent from "./components/form/FormComponent";

const HomeComponent = () => {
  const workingAreasRef = useRef(null);
  const aboutRef = useRef(null);

  const scrollToWorkingAreas = () => {
    const yOffset = -100; 
    const y =
      workingAreasRef.current.getBoundingClientRect().top +
      window.pageYOffset +
      yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const scrollToAbout = () => {
    const yOffset = -120;
    const y =
      aboutRef.current.getBoundingClientRect().top +
      window.pageYOffset +
      yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <div className="home-container">
      <img
        src={homeImage}
        alt="Estatua de ouro segurando uma coroa"
        className="home-img"
      />
      <div className="texts-container">
        <span>MOURA PEREIRA ADVOGADOS</span>
        <h1>A determinação é a chave para o sucesso</h1>
        <h3>
          Lorem ipsum dolor sit amet consectetur adipiscing elit quisque
          faucibus ex sapien vitae pellentesque sem.
        </h3>
      </div>
      <div className="button-container">
        <button className="working-areas-button" onClick={scrollToWorkingAreas}>
          <img src={arrowLeft} alt="Seta para a esquerda" />
          ÁREAS DE ATUAÇÃO
        </button>
        <button className="more-info-button" onClick={scrollToAbout}>
          SAIBA MAIS
        </button>
      </div>

      <div ref={aboutRef} className="objectives-container">
        <ObjectivesComponent />
      </div>

      <div ref={aboutRef} className="about-container">
        <div className="about-texts">
          <h6>SOBRE O GRUPO</h6>
          <h1>Excelência jurídica que transforma problemas em soluções.</h1>
          <p>
            A Advocacia Moura Pereira foi idealizada com o objeto de transformar
            a forma de relacionamento com as pessoas, entregamos um atendimento
            humanizado. <br /> <br /> Oferecemos assessoria jurídica e todo
            suporte necessário com foco na solução de seus problemas, seguindo
            as diretrizes do cliente centrismo. <br /> <br /> Inovação,
            Flexibilidade e Qualidade no atendimento são características do
            escritório, proporcionando aos nossos clientes uma atuação jurídica
            assertiva, transparente e de excelência. <br /> <br /> Estamos a
            disposição para entendermos suas demandas jurídicas e apresentarmos
            a melhor solução para cada caso. Fale conosco!
          </p>
          <div className="contact-info">
            <h3 id="about-link">(11) 97448-1602</h3>
            <h3>ou</h3>
            <h3 id="about-link">Agende um horário</h3>
          </div>
        </div>
        <div className="about-image">
          <img src={aboutImage} alt="about image" />
        </div>
      </div>

      <div ref={workingAreasRef} className="working-areas-container">
        <WorkingAreasComponent />
      </div>

      <div className="posts-container">
        <PostsComponent />
      </div>

      <div className="form-container">
        <FormComponent />
      </div>
    </div>
  );
};

export default HomeComponent;
