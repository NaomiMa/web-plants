import React from "react";
import {
  PlantsCard,
  PlantsContainer,
  PlantsH1,
  PlantsH2,
  PlantsIcon,
  PlantsP,
  PlantsWrapper,
} from "./PlantsElements";
import Icon1 from "../../images/aloe vera.jpg";
import Icon2 from "../../images/basil.jpg";
import Icon3 from "../../images/mint.jpg";

const Plants = () => {
  return (
    <PlantsContainer id="Plants">
      <PlantsH1>הצמחים שלנו</PlantsH1>
      <PlantsWrapper>
        <PlantsCard>
          <PlantsIcon src={Icon1} />
          <PlantsH2>אלוורה</PlantsH2>
          <PlantsP>כאן תוכלו למצוא מבחר של צמחים ולהוסיף צמחים חדשים</PlantsP>
        </PlantsCard>
        <PlantsCard>
          <PlantsIcon src={Icon2} />
          <PlantsH2>בזילקום</PlantsH2>
          <PlantsP>כאן תוכלו למצוא מבחר של צמחים ולהוסיף צמחים חדשים</PlantsP>
        </PlantsCard>
        <PlantsCard>
          <PlantsIcon src={Icon3} />
          <PlantsH2>נענע</PlantsH2>
          <PlantsP>כאן תוכלו למצוא מבחר של צמחים ולהוסיף צמחים חדשים</PlantsP>
        </PlantsCard>
      </PlantsWrapper>
    </PlantsContainer>
  );
};

export default Plants;
