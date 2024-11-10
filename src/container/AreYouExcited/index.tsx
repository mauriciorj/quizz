import React from "react";
import ButtonLarge from "@/components/buttonLarge";
import Card from "@/components/card";
import CardDescription from "@/components/cardDescription";
import CardTitle from "@/components/cardTitle";

const AreYouExcited = ({ onClick }: { onClick: () => void }) => {
  return (
    <Card>
      <CardTitle title="O quanto você está empolgado para perder peso ?" />
      <CardDescription description="" />
      <div className="w-full flex flex-col items-center">
        <div className="mt-3">
          <ButtonLarge
            icon=""
            label="Eu só quero saber sobre jejum intermitente"
            onClick={onClick}
          />
        </div>
        <div className="mt-3">
          <ButtonLarge label="Eu quero tentar perder peso" onClick={onClick} />
        </div>
        <div className="mt-3">
          <ButtonLarge
            label="Estou pronto para perder o peso que preciso"
            onClick={onClick}
          />
        </div>
      </div>
    </Card>
  );
};

export default AreYouExcited;
