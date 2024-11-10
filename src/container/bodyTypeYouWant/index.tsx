import React from "react";
import ButtonLarge from "@/components/buttonLarge";
import Card from "@/components/card";
import CardDescription from "@/components/cardDescription";
import CardTitle from "@/components/cardTitle";

const BodyTypeYouWant = ({ onClick }: { onClick: () => void }) => {
  return (
    <Card>
      <CardTitle title="Qual o tipo de corpo que voce quer ter?" />
      <CardDescription description="" />
      <div className="w-full flex flex-col items-center">
        <div className="mt-3">
          <ButtonLarge label="💪 Fit" onClick={onClick} value="Fit" />
        </div>
        <div className="mt-3">
          <ButtonLarge label="💪💪 Seco" onClick={onClick} value="seco" />
        </div>
        <div className="mt-3">
          <ButtonLarge label="💪💪💪 Forte" onClick={onClick} value="forte" />
        </div>
      </div>
    </Card>
  );
};

export default BodyTypeYouWant;
