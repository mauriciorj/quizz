import React from "react";
import ButtonLarge from "@/components/buttonLarge";
import Card from "@/components/card";
import CardDescription from "@/components/cardDescription";
import CardTitle from "@/components/cardTitle";

const Question11 = ({ onClick }: { onClick: () => void }) => {
  return (
    <Card>
      <CardTitle title="Você prefere ou costuma comer em casa ou na rua ?" />
      <CardDescription description="" />
      <div className="w-full flex flex-col items-center">
        <div className="mt-3">
          <ButtonLarge
            icon="🏠"
            label="Normalmente como em casa"
            onClick={onClick}
            value="Normalmente como em casa"
          />
        </div>
        <div className="mt-3">
          <ButtonLarge
            icon="🏙"
            label="Costumo comer na rua"
            onClick={onClick}
            value="Costumo comer na rua"
          />
        </div>
        <div className="mt-3">
          <ButtonLarge
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
