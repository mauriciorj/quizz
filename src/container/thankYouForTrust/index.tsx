import React from "react";
import Card from "@/components/card";
import CardDescription from "@/components/cardDescription";
import CardTitle from "@/components/cardTitle";

const ThankYouForTrust = ({ onClick }: { onClick: () => void }) => {
  return (
    <Card hasContinueCta onClick={() => onClick()}>
      <CardTitle title="Obrigado por confiar em nós" />
      <CardDescription description="Saiba que é normal ter dúvidas, e está tudo bem. Estamos aqui para te ajudar." />
      <CardDescription description="Vamos montar um plano considerando o que realmente funciona para você - o que não funciona, para que você se matenha motivado, crie hábitos saudáveis e conquiste os seus objetivos." />
    </Card>
  );
};

export default ThankYouForTrust;
