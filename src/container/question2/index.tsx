import React from "react";
import ButtonIcon from "@/components/buttonIcon";
import Card from "@/components/card";
import CardDescription from "@/components/cardDescription";
import CardTitle from "@/components/cardTitle";

const Question2 = ({ onClick }: { onClick: () => void }) => {
  return (
    <Card>
      <CardTitle title="Escolha o seu sexo" />
      <CardDescription description="Biologicamente o sexo e um fator que afeta a sua taxa metabolica, que determina quantas calorias voce queima por dia" />
      <div className="w-full flex flex-row justify-center">
        <div className="mr-5">
          <ButtonIcon label="👨‍🦰 Homem" onClick={onClick} value="homem" />
        </div>
        <div className="ml-5">
          <ButtonIcon label="👩‍🦰 Mulher" onClick={onClick} value="mulher" />
        </div>
      </div>
    </Card>
  );
};

export default Question2;
