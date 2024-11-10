import React from "react";
import ButtonLarge from "@/components/buttonLarge";
import Card from "@/components/card";
import CardDescription from "@/components/cardDescription";
import CardTitle from "@/components/cardTitle";

const BreathAfterWalking = ({ onClick }: { onClick: () => void }) => {
  return (
    <Card>
      <CardTitle title="Como você fica depois de subir alguns andares de escada ?" />
      <CardDescription description="" />
      <div className="w-full flex flex-col items-center">
        <div className="mt-3">
          <ButtonLarge
            label="Fico ofegante sem conseguir falar"
            onClick={onClick}
          />
        </div>
        <div className="mt-3">
          <ButtonLarge
            label="Fico ofegante mas até consigo falar"
            onClick={onClick}
          />
        </div>
        <div className="mt-3">
          <ButtonLarge label="Fico relativamente bem" onClick={onClick} />
        </div>
        <div className="mt-3">
          <ButtonLarge
            label="Fico muito bem e conseguiria mais"
            onClick={onClick}
          />
        </div>
      </div>
    </Card>
  );
};

export default BreathAfterWalking;
