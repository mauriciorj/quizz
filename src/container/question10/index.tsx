import React from "react";
import ButtonIcon from "@/components/buttonIcon";
import Card from "@/components/card";
import CardDescription from "@/components/cardDescription";
import CardTitle from "@/components/cardTitle";

const Question10 = ({ onClick }: { onClick: () => void }) => {
  return (
    <Card>
      <CardTitle title="Você está no caminho certo!" />
      <CardDescription description="Muitas pessoas frequentemente lutam contra o medo de não serem boas o suficiente. Levaremos isso em consideração ao elaborar seu plano para lhe fornecer uma abordagem de construção de confiança!" />
      <div className="w-full flex flex-row justify-center">
        <div className="mr-5">
          <ButtonIcon label="Continuar" onClick={onClick} />
        </div>
      </div>
    </Card>
  );
};

export default Question10;
