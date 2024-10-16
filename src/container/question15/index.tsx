import React from "react";
import ButtonIcon from "@/components/buttonIcon";
import Card from "@/components/card";
import CardDescription from "@/components/cardDescription";
import CardTitle from "@/components/cardTitle";

const Question15 = ({ onClick }: { onClick: () => void }) => {
  return (
    <Card>
      <CardTitle title="Você tem algum mau hábito" />
      <CardDescription description="Fique tranquilo porque todos nós temos maus hábitos. Quais são os seus?" />
      <div className="w-full flex flex-row justify-center">
        <div className="mr-5">
          <ButtonIcon
            label="😴 Pouco descanso"
            onClick={onClick}
            value="Pouco descanso"
          />
        </div>
        <div className="mr-5">
          <ButtonIcon
            label="🍫 Eu amo doces"
            onClick={onClick}
            value="Eu amo doces"
          />
        </div>
        <div className="mr-5">
          <ButtonIcon
            label="🥤 Eu amo refrigerante"
            onClick={onClick}
            value="Eu amo refrigerante"
          />
        </div>
        <div className="mr-5">
          <ButtonIcon
            label="🍤 Eu amo fritura"
            onClick={onClick}
            value="Eu amo fritura"
          />
        </div>
        <div className="mr-5">
          <ButtonIcon
            label="🙅‍♀️ Nenhum deles"
            onClick={onClick}
            value="Nenhum deles"
          />
        </div>
      </div>
    </Card>
  );
};

export default Question15;
