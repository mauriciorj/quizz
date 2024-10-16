import React from "react";
import ButtonIcon from "@/components/buttonIcon";
import Card from "@/components/card";
import CardDescription from "@/components/cardDescription";
import CardTitle from "@/components/cardTitle";

const Question20 = ({ onClick }: { onClick: () => void }) => {
  return (
    <Card>
      <CardTitle title="A melhor estratégia 100% personalizada para você está sendo criada para te ajudar a atingir todos os seus objetivos..." />
      <CardDescription description="Precisamos dessa informação para calcular o seu IMC (Índice de Massa Corporal). Esse fator é muito importante para criarmos a sua estratégia." />
      <div className="w-full flex flex-row justify-center">
        <div className="mr-5">
          <ButtonIcon label="Continuar" onClick={onClick} />
        </div>
      </div>
    </Card>
  );
};

export default Question20;
