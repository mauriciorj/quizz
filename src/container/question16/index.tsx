import React from "react";
import Image from "next/image";
import ButtonContinue from "@/components/buttonContinue";
import Card from "@/components/card";
import CardDescription from "@/components/cardDescription";
import CardTitle from "@/components/cardTitle";
import thumbsUp from "@/assets/images/thumbs-up.png";

const Question16 = ({ onClick }: { onClick: () => void }) => {
  return (
    <Card hasContinueCta onClick={() => onClick()}>
      <div className="w-full flex text-center justify-center items-center">
        <Image
          alt="Seja bem vindo a sua jornada da dieta!"
          src={thumbsUp}
          width={300}
          height={300}
        />
      </div>
      <CardTitle title="Muito obrigado por confiar em nós" />
      <CardDescription
        description="É natural ter preocupações, e isso é normal — por isso estamos aqui para ajudar.

Nós construiremos um plano levando em consideração o que funciona para você (e o que não funciona), para que você possa se manter motivado, construir hábitos saudáveis ​​e atingir suas metas."
      />
    </Card>
  );
};

export default Question16;
