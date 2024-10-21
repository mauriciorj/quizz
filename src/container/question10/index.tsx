import React from "react";
import Image from "next/image";
import ButtonContinue from "@/components/buttonContinue";
import Card from "@/components/card";
import CardDescription from "@/components/cardDescription";
import CardTitle from "@/components/cardTitle";
import peopleReception from "@/assets/images/people-reception.png";

const Question10 = ({ onClick }: { onClick: () => void }) => {
  return (
    <Card>
      <div className="w-full flex text-center justify-center items-center">
        <Image
          alt="Seja bem vindo a sua jornada da dieta!"
          src={peopleReception}
          width={300}
          height={300}
        />
      </div>
      <CardTitle title="Você está no caminho certo!" />
      <CardDescription description="Muitas pessoas frequentemente lutam contra o medo de não serem boas o suficiente. Levaremos isso em consideração ao elaborar seu plano para lhe fornecer uma abordagem de construção de confiança!" />
      <div className="w-full flex flex-row justify-center">
        <div className="mr-5 mt-10">
          <ButtonContinue label="Cotinuar" onClick={onClick} />
        </div>
      </div>
    </Card>
  );
};

export default Question10;
