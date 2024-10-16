import React from "react";
import ButtonIcon from "@/components/buttonIcon";
import Card from "@/components/card";
import CardDescription from "@/components/cardDescription";
import CardTitle from "@/components/cardTitle";

const Question3 = ({ onClick }: { onClick: () => void }) => {
  return (
    <Card>
      <CardTitle title="Seja bem vindo a sua jornada da dieta!" />
      <CardDescription description="Bem-vindo ao Dieta Facil! Você está aqui para embarcar em sua jornada de jejum e autoexploração. Vamos entender melhor seus objetivos e necessidades específicas dentro do reino do jejum." />
      <div className="w-full flex flex-row justify-center">
        <div className="mr-5">
          <ButtonIcon label="Cotinuar" onClick={onClick} />
        </div>
      </div>
    </Card>
  );
};

export default Question3;
