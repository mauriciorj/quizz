import React from "react";
import ButtonIcon from "@/components/buttonIcon";
import Card from "@/components/card";
import CardDescription from "@/components/cardDescription";
import CardTitle from "@/components/cardTitle";

const Question4 = ({ onClick }: { onClick: () => void }) => {
  return (
    <Card>
      <CardTitle title="Qual o seu tipo de corpo ?" />
      <CardDescription description="" />
      <div className="w-full flex flex-row justify-center">
        <div className="mr-5">
          <ButtonIcon label="Normal ou Magro" onClick={onClick} />
        </div>
        <div className="mr-5">
          <ButtonIcon label="Um Pouco Acima do Peso" onClick={onClick} />
        </div>
        <div className="mr-5">
          <ButtonIcon label="Acima do Peso" onClick={onClick} />
        </div>
      </div>
    </Card>
  );
};

export default Question4;
