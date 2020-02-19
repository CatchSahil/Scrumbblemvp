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
                title: "Creating Portfolio Made Easy",
                body:
                  "Creating and maintaining  portfolio has never been easier. Scrumbble let’s you do this with just some clicks. Connect your custom domain or get a free Scrumble sub domain. It’s all free...",
                image:
                  "https://res.cloudinary.com/emishalabs/image/upload/v1575745990/Portfolio_h7hcpv.svg"
              },
              {
                title: "Case Studies and Documentation",
                body:
                  "We need a different way to standout in the crowd. And Sharing our creative process is the key! Scrumbble let’s you write case studies that tells your story of how you ended up with a solution.",
                image:
                  "https://res.cloudinary.com/emishalabs/image/upload/v1575745990/CaseStudies_at7ph4.svg"
              }
            ]}
          />
        </div>
      </div>
    </Section>
  );
}

export default FeaturesSection;
