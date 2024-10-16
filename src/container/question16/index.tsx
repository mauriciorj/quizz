import React from "react";
import ButtonIcon from "@/components/buttonIcon";
import Card from "@/components/card";
import CardDescription from "@/components/cardDescription";
import CardTitle from "@/components/cardTitle";

const Question16 = ({ onClick }: { onClick: () => void }) => {
  return (
    <Card>
      <CardTitle title="Muito obrigado por confiar em nós" />
      <CardDescription
        description="É natural ter preocupações, e isso é normal — por isso estamos aqui para ajudar.

Nós construiremos um plano levando em consideração o que funciona para você (e o que não funciona), para que você possa se manter motivado, construir hábitos saudáveis ​​e atingir suas metas."
      />
      <div className="w-full flex flex-row justify-center">
        <div className="mr-5">
          <ButtonIcon label="Continuar" onClick={onClick} />
        </div>
      </div>
    </Card>
  );
};

export default Question16;
