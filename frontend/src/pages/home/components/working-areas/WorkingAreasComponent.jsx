import React, { useState } from "react";
import "./WorkingAreasComponent.css";
import familiarLawIcon from "../../../../assets/Group.svg";
import { useNavigate } from "react-router-dom";

const areas = [
  {
    title: "Direito Trabalhista",
    desc: "Responsável por regular a relação jurídica entre empregadores e trabalhadores.",
    slug: "direito-trabalho",
  },
  {
    title: "Direito do Consumidor",
    desc: "Relações jurídicas entre os fornecedores e consumidores.",
    slug: "direito-consumidor",
  },
  {
    title: "Direito de Familia",
    desc: "Formação, manutenção e extinção das relações entre os cônjuges, e entre estes e seus filhos",
    slug: "direito-familia",
  },
  {
    title: "Direito Sucessões",
    desc: "Transferência do patrimônio de alguém, depois de sua morte, em virtude de lei ou testamento.",
    slug: 'direito-sucessoes'
  },
  {
    title: "Direito Civil",
    desc: "Determinar quais são as regras e condutas que pessoas físicas e jurídicas devem ter em sociedade.",
    slug: "direito-civil"
  },
  {
    title: "Direito Extrajudicial",
    desc: "Atividades que dependem de conhecimento jurídico, mas não exigem formalidades jurídicas",
    slug: "direito-extrajudicial"
  },
];

const WorkingAreasComponent = () => {
  const [hovered, setHovered] = useState(null);
  const navigate = useNavigate();

  function handleNavigation(area) {
    navigate("/areas-de-atuacao/" + area);
  }

  return (
    <div className="working-areas-component">
      <h5 className="working-areas-subtitle">EXPERIÊNCIA</h5>
      <h2 className="working-areas-title">Áreas de Atuação</h2>
      <div className="working-areas-list">
        {areas.map((area, idx) => (
          <div
            className={`working-areas-item${hovered === idx ? " hovered" : ""}`}
            key={area.title}
            onClick={() => handleNavigation(area.slug)}
            onMouseEnter={() => setHovered(idx)}
            onMouseLeave={() => setHovered(null)}
          >
            <img src={familiarLawIcon} alt={area.title} />
            <h6>{area.title}</h6>
            <div className="line"></div>
            <p>{area.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkingAreasComponent;
