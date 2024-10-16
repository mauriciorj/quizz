import React from "react";
import ButtonIcon from "@/components/buttonIcon";
import Card from "@/components/card";
import CardDescription from "@/components/cardDescription";
import CardTitle from "@/components/cardTitle";

const Question14 = ({ onClick }: { onClick: () => void }) => {
  return (
    <Card>
      <CardTitle title="Em média quantas horas você dorme por noite?" />
      <CardDescription description="" />
      <div className="w-full flex flex-row justify-center">
        <div className="mr-5">
          <ButtonIcon
            label="🕔 No máximo 5 horas"
            onClick={onClick}
            value="No máximo 5 horas"
          />
        </div>
        <div className="mr-5">
          <ButtonIcon
            label="🕕 Entre 5 e 6 horas"
            onClick={onClick}
            value="Entre 5 e 6 horas"
          />
        </div>
        <div className="mr-5">
          <ButtonIcon
            label="🕖 Entre 6 e 7 horas"
            onClick={onClick}
            value="Entre 6 e 7 horas"
          />
        </div>
        <div className="mr-5">
          <ButtonIcon
            label="🕗 Entre 7 e 8 horas"
            onClick={onClick}
            value="Entre 7 e 8 horas"
          />
        </div>
        <div className="mr-5">
          <ButtonIcon
            label="🕘 Mais de 8 horas"
            onClick={onClick}
            value="Mais de 8 horas"
          />
        </div>
      </div>
    </Card>
  );
};

export default Question14;
