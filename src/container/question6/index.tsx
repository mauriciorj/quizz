import React from "react";
import ButtonIcon from "@/components/buttonIcon";
import Card from "@/components/card";
import CardDescription from "@/components/cardDescription";
import CardTitle from "@/components/cardTitle";

const Question6 = ({ onClick }: { onClick: () => void }) => {
  return (
    <Card>
      <CardTitle title="Quais sao os seus objetivos?" />
      <CardDescription description="Escolha pelo menos uma opção. Você pode escolher mais." />
      <div className="w-full flex flex-row justify-center">
        <div className="mr-5">
          <ButtonIcon
            label="🫀 Melhorar sua pressao"
            onClick={onClick}
            value="Melhorar sua pressao"
          />
        </div>
        <div className="mr-5">
          <ButtonIcon
            label="🧠 Melhorar seu cerebro"
            onClick={onClick}
            value="Melhorar seu cerebro"
          />
        </div>
        <div className="mr-5">
          <ButtonIcon
            label="🏃🏼‍♂️‍➡️ Queimar gordura"
            onClick={onClick}
            value="Queimar gordura"
          />
        </div>
        <div className="mr-5">
          <ButtonIcon label="💪 Perder peso" onClick={onClick} value="forte" />
        </div>
        <div className="mr-5">
          <ButtonIcon
            label="👻 Aumentar a expectativa de vida"
            onClick={onClick}
            value="Aumentar a expectativa de vida"
          />
        </div>
        <div className="mr-5">
          <ButtonIcon
            label="🚴🏼‍♀️ Reduzir o Colesterol"
            onClick={onClick}
            value="Reduzir o Colesterol"
          />
        </div>
        <div className="mr-5">
          <ButtonIcon
            label="😴 Dormir melhor"
            onClick={onClick}
            value="Dormir melhor"
          />
        </div>
        <div className="mr-5">
          <ButtonIcon
            label="😷 Reduzir o risco de cancer"
            onClick={onClick}
            value="Reduzir o risco de cancer"
          />
        </div>
        <div className="mr-5">
          <ButtonIcon
            label="😎 Melhorar a aparencia"
            onClick={onClick}
            value="Melhorar a aparencia"
          />
        </div>
        <div className="mr-5">
          <ButtonIcon
            label="🔥 Aumentar o metabolismo"
            onClick={onClick}
            value="Aumentar o metabolismo"
          />
        </div>
        <div className="mr-5">
          <ButtonIcon label="Continuar" onClick={onClick} value="Continuar" />
        </div>
      </div>
    </Card>
  );
};

export default Question6;
