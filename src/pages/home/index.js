/**
 * Authors:    Sourav Kumar Nanda @souravkumarnanda4@gmail.com
 * Created:    10.08.2019
 * Purpose:    I understand the importance of comment lines in big projects. While setting up a new function, I will try to write
 *             some inline comments, descriptive block comments etc. to briefly explain how things work. 

 **/

import React from "react";
import HeroSection from "./../../components/HeroSection";
import FeaturesSection from "./../../components/FeaturesSection";
import CtaSection from "./../../components/CtaSection";
import { useRouter } from "./../../util/router.js";
import "./styles.scss";

function HomePage(props) {
  const router = useRouter();

  return (
    <>
      <HeroSection
        color="background"
        size="medium"
        title="Supercharge 
        your Portfolio"
        subtitle="A no Nonsense way to create your portfolio.
        Give yourself a leap "
        threeDButtonText="Create your Profile"
        image="https://res.cloudinary.com/emishalabs/image/upload/v1569170268/portfolio1_ffedm1.svg"
        threeDButtonOnClick={() => {
          router.push("/signup");
        }}
      />
      <FeaturesSection
        color="gray"
        size="medium"
        title="Your Best Value Proposition"
        subtitle="“Give yourself a leap, and become the superhero you were meant to be”"
      />
      <CtaSection
        color="primary"
        size="medium"
        title="Become a Scrumbler Today!"
        subtitle="Try the product out for free."
        buttonText="Get Early Access"
        buttonOnClick={() => {
          router.push("/pricing");
        }}
      />
    </>
  );
}

export default HomePage;
