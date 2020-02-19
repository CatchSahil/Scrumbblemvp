import React from "react";
import Section from "./../Section";
import SectionHeader from "./../SectionHeader";
import Faq from "./../Faq";
import "./styles.scss";

function FaqSection(props) {
  return (
    <Section color={props.color} size={props.size}>
      <div className="container">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          centered={true}
          size={3}
        />
        <Faq
          items={[
            {
              question:
                "For designers, there is Behance. How is it better than Behance?",
              answer:
                "Current problems with Behance or Dribbble: Instead of sharing insights on design problem solving, most of the designers upload “visual porn”while recruiters focus on the ideas behind the final image. They need some basic indication of how we ended up with our final design. They want to know whether the designer explained their thought process? Is the business problem behind the design clear? They always ask for evidence of how we approached the problem, how they considered the business ecosystem surrounding it and how we iterated our design. So, the key here is, with each design work that users publish on Scrumbble have to go through this, write a compelling story of their design thinking process. And this will help the platform to be clutter free and will act like a filter for genuine work."
            },
            {
              question: "How does it differ from Medium?",
              answer:
                "First of all, it's not a blogging platform so I think we can't compare it with Scrumbble. With Scrumbble you could build your portfolio, share your past work, document your design/development stories, learnings, case studies, API documentation etc which can then be connected to your custom domain for free. And as the name suggest (Scrum + bble), it's specifically for Designers/Developers or basically for IT Industry. It's not behind a paywall so you own your content. It can be used for personal use and for public also. Basically, it's customizable and people could use it for different use cases."
            }
          ]}
        />
      </div>
    </Section>
  );
}

export default FaqSection;
