import React from "react";
import ButtonLarge from "@/components/buttonLarge";
import Card from "@/components/card";
import CardDescription from "@/components/cardDescription";
import CardTitle from "@/components/cardTitle";

const HowMuchWaterDoYouDrink = ({ onClick }: { onClick: () => void }) => {
  return (
    <Card>
      <CardTitle title="O quanto você bebe de água por dia?" />
      <CardDescription description="" />
      <div className="w-full flex flex-col items-center">
        <div className="mt-3">
          <ButtonLarge
            icon="💧"
            label="Menos de 1 Litro"
            onClick={onClick}
            value="Menos de 1 Litro"
          />
        </div>
        <div className="mt-3">
          <ButtonLarge
            icon="💧💧"
            label="Entre 1 e 2 Litros"
            onClick={onClick}
            value="Entre 1 e 2 Litros"
          />
        </div>
        <div className="mt-3">
          <ButtonLarge
            icon="💧💧💧"
            label="Mais de 2 Litros"
            onClick={onClick}
            value="Mais de 2 Litros"
          />
        </div>
      </div>
    </Card>
  );
};

export default HowMuchWaterDoYouDrink;
