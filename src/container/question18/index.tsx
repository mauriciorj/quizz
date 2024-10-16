import React from "react";
import ButtonIcon from "@/components/buttonIcon";
import Card from "@/components/card";
import CardDescription from "@/components/cardDescription";
import CardTitle from "@/components/cardTitle";

const Question19 = ({ onClick }: { onClick: () => void }) => {
  return (
    <Card>
      <CardTitle title="Qual a sua idade?" />
      <CardDescription description="" />
      <div className="w-full flex flex-row justify-center">
        <div className="mr-5">
          <ButtonIcon label="Continuar" onClick={onClick} />
        </div>
      </div>
    </Card>
  );
};

export default Question19;
