import React from "react";
import Image from "next/image";
import happyWomanPhoto from "@/assets/images/happy-woman-photo.png";
import ButtonContinue from "@/components/buttonContinue";
import Card from "@/components/card";
import CardDescription from "@/components/cardDescription";
import CardTitle from "@/components/cardTitle";

const Question3 = ({ onClick }: { onClick: () => void }) => {
  return (
    <Card>
      <div className="w-full flex text-center justify-center items-center">
        <Image
          alt="Seja bem vindo a sua jornada da dieta!"
          src={happyWomanPhoto}
          width={300}
          height={300}
        />
      </div>
      <CardTitle title="Seja bem vindo a sua jornada da dieta!" />
      <CardDescription description="Bem-vindo ao Dieta Facil! Você está aqui para embarcar em sua jornada de jejum e autoexploração. Vamos entender melhor seus objetivos e necessidades específicas dentro do reino do jejum." />
      <div className="w-full flex flex-row justify-center">
        <div className="mr-5 mt-10">
          <ButtonContinue label="Cotinuar" onClick={onClick} />
        </div>
      </div>
    </Card>
  );
};

export default Question3;
