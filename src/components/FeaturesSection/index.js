import React from "react";
import Section from "./../Section";
import SectionHeader from "./../SectionHeader";
import Features from "./../Features";
import "./styles.scss";

function FeaturesSection(props) {
  return (
    <Section color={props.color} size={props.size}>
      <div className="container">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          centered={true}
          size={3}
        />
        <div className="FeaturesSection__box box">
          <Features
            columns={2}
            items={[
              {
                title: "Create your Portfoilio",
                body:
                  "Creating portfolio has never been easier. Get your portfolio up and running within minutes. Showcase your projects, skills, past work, case studies and many more...",
                image:
                  "https://res.cloudinary.com/catchsahil/image/upload/v1566759772/postproject_gviqn7.svg"
              },
              {
                title: "Connect Custom Domain",
                body:
                  "Scrumble is designed to be flexible to your needs. Take full ownership of your portfolio. Connect your custom domain or get a free Scrumble sub domain. It’s all free...",
                image:
                  "https://res.cloudinary.com/catchsahil/image/upload/v1566759772/progress_znidke.svg"
              }
            ]}
          />
        </div>
      </div>
    </Section>
  );
}

export default FeaturesSection;
