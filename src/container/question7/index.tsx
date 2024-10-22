import React from "react";
import Image from "next/image";
import smilingPeople from "@/assets/images/smiling-people.png";
import Card from "@/components/card";
import CardDescription from "@/components/cardDescription";
import CardTitle from "@/components/cardTitle";

const Question7 = ({ onClick }: { onClick: () => void }) => {
  return (
    <Card hasContinueCta onClick={onClick}>
      <CardTitle isPink title="+1 Milhão de Usuários" />
      <CardDescription description="escolheram o nosso applicativo!" isPink />
      <div className="w-full flex text-center justify-center items-center">
        <Image
          alt="Seja bem vindo a sua jornada da dieta!"
          src={smilingPeople}
          width={300}
          height={300}
        />
      </div>
    </Card>
  );
};

export default Question7;
