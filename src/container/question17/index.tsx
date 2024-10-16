import React from "react";
import ButtonIcon from "@/components/buttonIcon";
import Card from "@/components/card";
import CardDescription from "@/components/cardDescription";
import CardTitle from "@/components/cardTitle";

const Question17 = ({ onClick }: { onClick: () => void }) => {
  return (
    <Card>
      <CardTitle title="Qual a sua altura (em cm, exemplo: 172 para 1,72m) ?" />
      <CardDescription description="" />
      <div className="w-full flex flex-row justify-center">
        <div className="mr-5">
          <ButtonIcon label="Continuar" onClick={onClick} />
        </div>
      </div>
    </Card>
  );
};

export default Question17;
