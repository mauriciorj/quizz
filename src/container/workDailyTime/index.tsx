import React from "react";
import ButtonLarge from "@/components/buttonLarge";
import Card from "@/components/card";
import CardDescription from "@/components/cardDescription";
import CardTitle from "@/components/cardTitle";

const WorkDailyTime = ({ onClick }: { onClick: () => void }) => {
  return (
    <Card>
      <CardTitle title="Você costuma praticar alguma atividade física?" />
      <CardDescription description="" />
      <div className="w-full flex flex-col items-center">
        <div className="mt-3">
          <ButtonLarge label="De 9 da manhã as 5 da tarde" onClick={onClick} />
        </div>
        <div className="mt-3">
          <ButtonLarge label="Trabalho durante a noite" onClick={onClick} />
        </div>
        <div className="mt-3">
          <ButtonLarge
            label="Meu horário é flexível"
            onClick={onClick}
          />
        </div>
        <div className="mt-3">
          <ButtonLarge
            label="Não estou trabalhando"
            onClick={onClick}
          />
        </div>
      </div>
    </Card>
  );
};

export default WorkDailyTime;
