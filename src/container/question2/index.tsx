import React from "react";
import ButtonLarge from "@/components/buttonLarge";
import Card from "@/components/card";
import CardDescription from "@/components/cardDescription";
import CardTitle from "@/components/cardTitle";

const Question2 = ({ onClick }: { onClick: () => void }) => {
  return (
    <Card>
      <CardTitle title="Escolha o seu sexo" />
      <CardDescription description="Biologicamente o sexo e um fator que afeta a sua taxa metabolica, que determina quantas calorias voce queima por dia" />
      <div className="w-full flex flex-col items-center">
        <div className="mt-3">
          <ButtonLarge
            icon="👩‍🦰"
            label="Mulher"
            onClick={onClick}
            value="mulher"
          />
        </div>
        <div className="mt-3">
          <ButtonLarge
            icon="👨‍🦰"
            label="Homem"
            onClick={onClick}
            value="homem"
          />
        </div>
      </div>
    </Card>
  );
};

export default Question2;
