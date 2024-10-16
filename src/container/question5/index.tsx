import React from "react";
import ButtonIcon from "@/components/buttonIcon";
import Card from "@/components/card";
import CardDescription from "@/components/cardDescription";
import CardTitle from "@/components/cardTitle";

const Question5 = ({ onClick }: { onClick: () => void }) => {
  return (
    <Card>
      <CardTitle title="Qual o tipo de corpo que voce quer ter?" />
      <CardDescription description="" />
      <div className="w-full flex flex-row justify-center">
        <div className="mr-5">
          <ButtonIcon label="💪 Fit" onClick={onClick} value="Fit" />
        </div>
        <div className="mr-5">
          <ButtonIcon label="💪💪 Seco" onClick={onClick} value="seco" />
        </div>
        <div className="mr-5">
          <ButtonIcon label="💪💪💪 Forte" onClick={onClick} value="forte" />
        </div>
      </div>
    </Card>
  );
};

export default Question5;
