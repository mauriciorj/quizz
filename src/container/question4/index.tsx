import React from "react";
import ButtonLarge from "@/components/buttonLarge";
import Card from "@/components/card";
import CardDescription from "@/components/cardDescription";
import CardTitle from "@/components/cardTitle";

const Question4 = ({ onClick }: { onClick: () => void }) => {
  return (
    <Card>
      <CardTitle title="Qual o seu tipo de corpo ?" />
      <CardDescription description="" />
      <div className="w-full flex flex-col items-center">
        <div className="mt-3">
          <ButtonLarge label="Normal ou Magro" onClick={onClick} />
        </div>
        <div className="mt-3">
          <ButtonLarge label="Um Pouco Acima do Peso" onClick={onClick} />
        </div>
        <div className="mt-3">
          <ButtonLarge label="Acima do Peso" onClick={onClick} />
        </div>
      </div>
    </Card>
  );
};

export default Question4;
