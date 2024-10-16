import React from "react";
import ButtonIcon from "@/components/buttonIcon";
import Card from "@/components/card";
import CardDescription from "@/components/cardDescription";
import CardTitle from "@/components/cardTitle";

const Question9 = ({ onClick }: { onClick: () => void }) => {
  return (
    <Card>
      <CardTitle title="Quando foi a última vez que você esteve feliz com o seu corpo?" />
      <CardDescription description="" />
      <div className="w-full flex flex-row justify-center">
        <div className="mr-5">
          <ButtonIcon label="Menos de um ano" onClick={onClick} />
        </div>
        <div className="mr-5">
          <ButtonIcon label="Entre 1 e 2 anos" onClick={onClick} />
        </div>
        <div className="mr-5">
          <ButtonIcon label="Mais de 3 anos" onClick={onClick} />
        </div>
      </div>
    </Card>
  );
};

export default Question9;
