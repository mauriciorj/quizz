import React from "react";
import ButtonLarge from "@/components/buttonLarge";
import Card from "@/components/card";
import CardDescription from "@/components/cardDescription";
import CardTitle from "@/components/cardTitle";

const BreakfastTime = ({ onClick }: { onClick: () => void }) => {
  return (
    <Card>
      <CardTitle title="Que horas você costuma tomar café da manhã ?" />
      <CardDescription description="" />
      <div className="w-full flex flex-col items-center">
        <div className="mt-3">
          <ButtonLarge
            label="Antes das 7:00 da manhã"
            onClick={onClick}
            value="Antes das 7:00 da manhã"
          />
        </div>
        <div className="mt-3">
          <ButtonLarge
            label="Depois das 7:00 da manhã"
            onClick={onClick}
            value="Depois das 7:00 da manhã"
          />
        </div>
        <div className="mt-3">
          <ButtonLarge
            label="Entre 9 e 11 da manhã"
            onClick={onClick}
            value="Entre 9 e 11 da manhã"
          />
        </div>
        <div className="mt-3">
          <ButtonLarge
            label="Eu não tomo café da manhã"
            onClick={onClick}
            value="Eu não tomo café da manhã"
          />
        </div>
      </div>
    </Card>
  );
};

export default BreakfastTime;
