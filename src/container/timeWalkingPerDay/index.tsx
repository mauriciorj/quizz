import React from "react";
import ButtonLarge from "@/components/buttonLarge";
import Card from "@/components/card";
import CardDescription from "@/components/cardDescription";
import CardTitle from "@/components/cardTitle";

const TimeWalkingPerDay = ({ onClick }: { onClick: () => void }) => {
  return (
    <Card>
      <CardTitle title="Quanto você costuma andar por dia ?" />
      <CardDescription description="" />
      <div className="w-full flex flex-col items-center">
        <div className="mt-3">
          <ButtonLarge label="Menos de 20 minutos" onClick={onClick} />
        </div>
        <div className="mt-3">
          <ButtonLarge label="Entre 20 e 60 minutos" onClick={onClick} />
        </div>
        <div className="mt-3">
          <ButtonLarge label="Mais de 60 minutos" onClick={onClick} />
        </div>
      </div>
    </Card>
  );
};

export default TimeWalkingPerDay;
