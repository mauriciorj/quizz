import React from "react";
import ButtonIcon from "@/components/buttonIcon";
import Card from "@/components/card";
import CardDescription from "@/components/cardDescription";
import CardTitle from "@/components/cardTitle";

const Question11 = ({ onClick }: { onClick: () => void }) => {
  return (
    <Card>
      <CardTitle title="Você prefere ou costuma comer em casa ou na rua ?" />
      <CardDescription description="" />
      <div className="w-full flex flex-row justify-center">
        <div className="mr-5">
          <ButtonIcon
            label="🏠 Normalmente como em casa"
            onClick={onClick}
            value="Normalmente como em casa"
          />
        </div>
        <div className="mr-5">
          <ButtonIcon
            label="🏙  Costumo comer na rua"
            onClick={onClick}
            value="Costumo comer na rua"
          />
        </div>
        <div className="mr-5">
          <ButtonIcon
            label="As duas opções"
            onClick={onClick}
            value="As duas opções"
          />
        </div>
      </div>
    </Card>
  );
};

export default Question11;
