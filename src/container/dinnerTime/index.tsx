import React from "react";
import ButtonLarge from "@/components/buttonLarge";
import Card from "@/components/card";
import CardDescription from "@/components/cardDescription";
import CardTitle from "@/components/cardTitle";

const BreakfastTime = ({ onClick }: { onClick: () => void }) => {
  return (
    <Card>
      <CardTitle title="E o seu jantar, costuma ser que horas ?" />
      <CardDescription description="" />
      <div className="w-full flex flex-col items-center">
        <div className="mt-3">
          <ButtonLarge
            label="Antes das 4 da tarde"
            onClick={onClick}
            value="Antes das 4 da tarde"
          />
        </div>
        <div className="mt-3">
          <ButtonLarge
            label="Entre 4 tarde e 7 da noite"
            onClick={onClick}
            value="Entre 4 tarde  e 7 da noite"
          />
        </div>
        <div className="mt-3">
          <ButtonLarge
            label="Depois das 7 da noite"
            onClick={onClick}
            value="Depois das 7 da noite"
          />
        </div>
        <div className="mt-3">
          <ButtonLarge
            label="Eu não costumo jantar"
            onClick={onClick}
            value="Eu não costumo jantar"
          />
        </div>
      </div>
    </Card>
  );
};

export default BreakfastTime;
