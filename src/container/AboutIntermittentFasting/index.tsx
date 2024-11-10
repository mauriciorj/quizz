import React from "react";
import Card from "@/components/card";
import CardDescription from "@/components/cardDescription";
import CardTitle from "@/components/cardTitle";
import CheckBadgeIcon from "@/icons/checkBadge";

const WhatYouKnowAboutIntermittentFasting = ({
  onClick,
}: {
  onClick: () => void;
}) => {
  return (
    <Card hasContinueCta onClick={() => onClick()}>
      <CardTitle title="Jejum intermitente: perder peso sem exercícios ou dietas" />
      <CardDescription description="Jejum intermitente ajuda a perder peso e aumentar o metabolismo" />
      <div className="pl-10 pr-5 pt-7">
        <div className="w-full text-left flex flex-row text-gray-600 mt-3">
          <div>
            <CheckBadgeIcon />
          </div>
          <span className="ml-2">Muito efetivo para perder peso</span>
        </div>
        <div className="w-full text-left flex flex-row text-gray-600 mt-3">
          <div>
            <CheckBadgeIcon />
          </div>
          <span className="ml-2">
            Reduz a resistência a insulina e abaixa os níveis de açúcar no
            sangue
          </span>
        </div>
        <div className="w-full text-left flex flex-row text-gray-600 mt-3">
          <div>
            <CheckBadgeIcon />
          </div>
          <span className="ml-2">
            Ajuda você a viver mais e ter uma vida saudável
          </span>
        </div>
      </div>
    </Card>
  );
};

export default WhatYouKnowAboutIntermittentFasting;
