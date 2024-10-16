import React from "react";
import ButtonIcon from "@/components/buttonIcon";
import Card from "@/components/card";
import CardDescription from "@/components/cardDescription";
import CardTitle from "@/components/cardTitle";

const Question8 = ({ onClick }: { onClick: () => void }) => {
  return (
    <Card>
      <CardTitle title="Quais partes você quer melhorar?" />
      <CardDescription description="Escolha pelo menos uma opção. Você pode escolher mais." />
      <div className="w-full flex flex-row justify-center">
        <div className="mr-5">
          <ButtonIcon label="Barriga" onClick={onClick} />
        </div>
        <div className="mr-5">
          <ButtonIcon label="Gluteos" onClick={onClick} />
        </div>
        <div className="mr-5">
          <ButtonIcon label="Peitoral" onClick={onClick} />
        </div>
        <div className="mr-5">
          <ButtonIcon label="Pernas" onClick={onClick} />
        </div>
        <div className="mr-5">
          <ButtonIcon label="Continuar" onClick={onClick} />
        </div>
      </div>
    </Card>
  );
};

export default Question8;
