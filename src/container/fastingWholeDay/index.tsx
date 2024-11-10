import React from "react";
import ButtonLarge from "@/components/buttonLarge";
import Card from "@/components/card";
import CardDescription from "@/components/cardDescription";
import CardTitle from "@/components/cardTitle";

const FastingWholeDay = ({ onClick }: { onClick: () => void }) => {
  return (
    <Card>
      <CardTitle title="O que você sobre fazer jejum por um dia inteiro ?" />
      <CardDescription description="" />
      <div className="w-full flex flex-col items-center">
        <div className="mt-3">
          <ButtonLarge label="Sem problemas, eu consigo!" onClick={onClick} />
        </div>
        <div className="mt-3">
        <ButtonLarge label="Eu não tenho certeza se consigo." onClick={onClick} />
        </div>
        <div className="mt-3">
          <ButtonLarge
            label="Sem chances!"
            onClick={onClick}
          />
        </div>
      </div>
    </Card>
  );
};

export default FastingWholeDay;
