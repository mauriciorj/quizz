import React from "react";
import Card from "@/components/card";
import CardTitle from "@/components/cardTitle";
import CardDescription from "@/components/cardDescription";
import ButtonIcon from "@/components/buttonIcon";

const Step1 = ({ onClick }: { onClick: () => void }) => {
  return (
    <Card>
      <CardTitle title="Step 1" />
      <CardDescription description="What is your name?" />
      <div className="w-full flex flex-row justify-center">
        <div className="mr-5">
          <ButtonIcon label="Homen" onClick={onClick} />
        </div>
        <div className="ml-5">
          <ButtonIcon label="Mulher" onClick={onClick} />
        </div>
      </div>
    </Card>
  );
};

export default Step1;
