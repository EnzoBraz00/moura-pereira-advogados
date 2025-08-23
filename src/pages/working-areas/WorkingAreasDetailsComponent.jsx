import React from "react";
import { useParams } from "react-router-dom";
import { workingAreasData } from "./WorkingAreasData";
import "./WorkingAreasDetailsComponent.css";

const WorkingAreasDetailsComponent = () => {
  const { slug } = useParams();
  const area = workingAreasData[slug];
  return (
    <div className="working-areas-details-component">
      <div
        className="area-title-container"
        style={{ backgroundImage: `url(${area?.img})` }}
      >
        <h1>{area?.title}</h1>
      </div>
      <div className="area-texts-container">
        <div className="area-description">
          <p>
            {area?.fullDescription.split("\n").map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
                <br />
              </React.Fragment>
            ))}
          </p>
        </div>
        <div className="services-container">
          <div className="services-section">
            <h2>PELO CLIENTE</h2>
            <ul>
              {area?.services.consumer.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          </div>
          <div className="services-section">
            <h2>PELA EMPRESA</h2>
            <ul>
              {area?.services.provider.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="area-topics-container">
          {area?.topics.map((topic, index) => (
            <div key={index} className="area-topic">
              <h3>{topic?.title}</h3>
              <p>{topic?.content}</p>
            </div>
          ))}
        </div>
        <div className="cta-container">
          <p>{area?.cta}</p>
        </div>
      </div>
    </div>
  );
};

export default WorkingAreasDetailsComponent;
