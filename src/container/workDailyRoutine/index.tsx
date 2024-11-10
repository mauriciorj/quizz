import React from "react";
import ButtonLarge from "@/components/buttonLarge";
import Card from "@/components/card";
import CardDescription from "@/components/cardDescription";
import CardTitle from "@/components/cardTitle";

const WorkDailyRoutine = ({ onClick }: { onClick: () => void }) => {
  return (
    <Card>
      <CardTitle title="Como costuma ser um dia seu de trabalho?" />
      <CardDescription description="" />
      <div className="w-full flex flex-col items-center">
        <div className="mt-3">
          <ButtonLarge label="Passo o dia sentado" onClick={onClick} />
        </div>
        <div className="mt-3">
          <ButtonLarge
            label="Meu trabalho é físico / muito ativo"
            onClick={onClick}
          />
        </div>
        <div className="mt-3">
          <ButtonLarge label="Um pouco de cada" onClick={onClick} />
        </div>
      </div>
    </Card>
  );
};

export default WorkDailyRoutine;
