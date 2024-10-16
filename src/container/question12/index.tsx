import React from "react";
import ButtonIcon from "@/components/buttonIcon";
import Card from "@/components/card";
import CardDescription from "@/components/cardDescription";
import CardTitle from "@/components/cardTitle";

const Question12 = ({ onClick }: { onClick: () => void }) => {
  return (
    <Card>
      <CardTitle title="Você costuma praticar alguma atividade física?" />
      <CardDescription description="" />
      <div className="w-full flex flex-row justify-center">
        <div className="mr-5">
          <ButtonIcon label="3-5 vezes na semana" onClick={onClick} />
        </div>
        <div className="mr-5">
          <ButtonIcon label="1-2 vezes na semana" onClick={onClick} />
        </div>
        <div className="mr-5">
          <ButtonIcon
            label="Não pratico ou estou comecando"
            onClick={onClick}
          />
        </div>
      </div>
    </Card>
  );
};

export default Question12;
