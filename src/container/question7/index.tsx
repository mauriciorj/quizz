import React from "react";
import ButtonIcon from "@/components/buttonIcon";
import Card from "@/components/card";
import CardDescription from "@/components/cardDescription";
import CardTitle from "@/components/cardTitle";

const Question7 = ({ onClick }: { onClick: () => void }) => {
  return (
    <Card>
      <CardTitle title="+1 Milhão de Usuários" />
      <CardDescription description="escolheram o nosso applicativo!" />
      <div className="w-full flex flex-row justify-center">
        <div className="mr-5">
          <ButtonIcon label="Cotinuar" onClick={onClick} />
        </div>
      </div>
    </Card>
  );
};

export default Question7;
