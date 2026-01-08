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
  const formRef = useRef(null);

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

  const scrollToForm = () => {
    const yOffset = -120;
    const y =
      formRef.current.getBoundingClientRect().top +
      window.pageYOffset +
      yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const handleFormSubmit = async (formData) => {
    try {
      const response = await fetch('/api/contatos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        alert('Mensagem enviada com sucesso!');
      }
    } catch {
      alert('Erro ao enviar mensagem');
    }
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
          Compromisso com a justiça e dedicação em cada detalhe, oferecendo
          soluções jurídicas seguras e eficazes para nossos clientes.
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
            <a id="about-link" href="https://api.whatsapp.com/send?phone=5511974481602">(11) 97448-1602</a>
            <h3>ou</h3>
            <a id="about-link" onClick={scrollToForm}>Agende um horário</a>
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

      <div ref={formRef} className="form-container">
        <FormComponent onSubmit={handleFormSubmit} />
      </div>
    </div>
  );
};

export default HomeComponent;
