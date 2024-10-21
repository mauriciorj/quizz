import React from "react";
import Image from "next/image";
import smilingPeople from "@/assets/images/smiling-people.png";
import ButtonContinue from "@/components/buttonContinue";
import Card from "@/components/card";
import CardDescription from "@/components/cardDescription";
import CardTitle from "@/components/cardTitle";

const Question7 = ({ onClick }: { onClick: () => void }) => {
  return (
    <Card>
      <CardTitle title="+1 Milhão de Usuários" />
      <CardDescription description="escolheram o nosso applicativo!" />
      <div className="w-full flex text-center justify-center items-center">
        <Image
          alt="Seja bem vindo a sua jornada da dieta!"
          src={smilingPeople}
          width={300}
          height={300}
        />
      </div>
      <div className="w-full flex flex-row justify-center">
        <div className="mt-20">
          <ButtonContinue label="Cotinuar" onClick={onClick} />
        </div>
      </div>
    </Card>
  );
};

export default Question7;
