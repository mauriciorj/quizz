import React from "react";
import ButtonLarge from "@/components/buttonLarge";
import Card from "@/components/card";
import CardDescription from "@/components/cardDescription";
import CardTitle from "@/components/cardTitle";

const BreakfastTime = ({ onClick }: { onClick: () => void }) => {
  return (
    <Card>
      <CardTitle title="E que horas é o seu almoço ?" />
      <CardDescription description="" />
      <div className="w-full flex flex-col items-center">
        <div className="mt-3">
          <ButtonLarge
            label="Antes das 1 da tarde"
            onClick={onClick}
            value="Antes das 1 da tarde"
          />
        </div>
        <div className="mt-3">
          <ButtonLarge
            label="Entre 1 e 2 da tarde"
            onClick={onClick}
            value="Entre 1 e 2 da tarde"
          />
        </div>
        <div className="mt-3">
          <ButtonLarge
            label="Entre 2 e 4 da tarde"
            onClick={onClick}
            value="Entre 2 e 4 da tarde"
          />
        </div>
        <div className="mt-3">
          <ButtonLarge
            label="Eu não almoço"
            onClick={onClick}
            value="Eu não almoço"
          />
        </div>
      </div>
    </Card>
  );
};

export default BreakfastTime;
