import React from "react";
import ButtonLarge from "@/components/buttonLarge";
import Card from "@/components/card";
import CardDescription from "@/components/cardDescription";
import CardTitle from "@/components/cardTitle";

const WhatYouKnowAboutIntermittentFasting = ({ onClick }: { onClick: () => void }) => {
  return (
    <Card>
      <CardTitle title="O que você sabe sobre jejum intermitente?" />
      <CardDescription description="" />
      <div className="w-full flex flex-col items-center">
        <div className="mt-3">
          <ButtonLarge label="Somente o nome" onClick={onClick} />
        </div>
        <div className="mt-3">
          <ButtonLarge label="Sei algumas coisas" onClick={onClick} />
        </div>
        <div className="mt-3">
          <ButtonLarge
            label="Tenho experiência com jejum intermitente"
            onClick={onClick}
          />
        </div>
      </div>
    </Card>
  );
};

export default WhatYouKnowAboutIntermittentFasting;
