import React, { useRef } from "react";
import { Helmet } from "react-helmet";
import homeImage from "../../assets/home-image.png";
import aboutImage from "../../assets/about-image.png";
import arrowLeft from "../../assets/arrow-left.svg";
import "./HomeComponent.css";
import WorkingAreasComponent from "./components/working-areas/WorkingAreasComponent";
import PostsComponent from "./components/posts/PostsComponent";
import FormComponent from "./components/form/FormComponent";
import ReviewsCarousel from "./components/reviews/ReviewsCarousel";
import API_BASE_URL from "../../config";

const HomeComponent = () => {
  const workingAreasRef = useRef(null);
  const aboutRef = useRef(null);
  const formRef = useRef(null);

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
      const response = await fetch(`${API_BASE_URL}/api/contatos`, {
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
    <>
      <Helmet>
        <title>Moura Pereira Advogados - Assessoria Jurídica Completa</title>
        <meta name="description" content="Moura Pereira Advogados oferece assessoria jurídica especializada em direito civil, trabalhista, familiar e do consumidor. Atendemos empresas e particulares em São Paulo com excelência e compromisso." />
        <meta name="keywords" content="advogados, direito civil, direito trabalhista, direito familiar, direito do consumidor, assessoria jurídica, São Paulo, Moura Pereira" />
      </Helmet>
      <div className="home-container">
      <div className="hero-section">
        <img
          src={homeImage}
          alt="Estatua de ouro segurando uma coroa"
          className="home-img"
        />
        <div className="texts-container">
          <span>MOURA PEREIRA ADVOGADOS</span>
          <h1>Foi demitido e desconfia que não recebeu <br /> tudo o que tinha direito?</h1>
          <h3>
          Se você trabalhou por anos em uma empresa, pode ter valores expressivos a receber. 
          Nosso escritório atua exclusivamente <br></br>na defesa do trabalhador, garantindo que cada direito seja respeitado.
          </h3>
        </div>
        <div className="button-container">
          <button className="working-areas-button" onClick={scrollToForm}>
            <img src={arrowLeft} alt="Seta para a esquerda" />
            QUERO SABER SE TENHO VALORES A RECEBER
          </button>
          <button className="more-info-button" onClick={scrollToAbout}>
            SAIBA MAIS
          </button>
        </div>
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

      <div className="reviews-container">
        <ReviewsCarousel />
      </div>

      <div ref={formRef} className="form-container">
        <FormComponent onSubmit={handleFormSubmit} />
      </div>
    </div>
    </>
  );
};

export default HomeComponent;
