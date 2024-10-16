import React from "react";
import ButtonIcon from "@/components/buttonIcon";
import Card from "@/components/card";
import CardDescription from "@/components/cardDescription";
import CardTitle from "@/components/cardTitle";

const Question13 = ({ onClick }: { onClick: () => void }) => {
  return (
    <Card>
      <CardTitle title="O quanto você bebe de água por dia?" />
      <CardDescription description="" />
      <div className="w-full flex flex-row justify-center">
        <div className="mr-5">
          <ButtonIcon
            label="💧 Menos de 1 Litro"
            onClick={onClick}
            value="Menos de 1 Litro"
          />
        </div>
        <div className="mr-5">
          <ButtonIcon
            label="💧💧 Entre 1 e 2 Litros"
            onClick={onClick}
            value="Entre 1 e 2 Litros"
          />
        </div>
        <div className="mr-5">
          <ButtonIcon
            label="💧💧💧 Mais de 2 Litros"
            onClick={onClick}
            value="Mais de 2 Litros"
          />
        </div>
      </div>
    </Card>
  );
};

export default Question13;
